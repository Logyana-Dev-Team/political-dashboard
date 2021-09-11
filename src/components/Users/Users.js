import React, { useEffect, useState } from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faDownload } from "@fortawesome/free-solid-svg-icons";
import ViewModal from "./ViewModal";
import axios from "axios";
import { toast } from "react-toastify";
import { CSVLink } from "react-csv";

function Users() {
  const [viewModal, setViewModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  const [modalData, setModalData] = useState({});
  const [itemId, setItemId] = useState();

  function openViewModal(item) {
    setModalData(item);
    setViewModal(true);
  }
  function openDeleteModal(id) {
    setItemId(id);
    setDeleteModal(true);
  }
  const onDelete = (id) => {
    axios
      .delete(`/users/${id}`)
      .then((res) => {
        console.log(res);
        toast.success("User deleted successfully !!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => console.log(err));

    setDeleteModal(!deleteModal);
  };
  useEffect(() => {
    axios
      .get("/users")
      .then((res) => {
        setAllUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const users = allUsers.map((user) => {
    return user;
  });

  const headers = [
    { label: "Full Name", key: "name" },
    { label: "Date Of Birth", key: "dob" },
    { label: "Address", key: "address" },
    { label: "Mobile No.", key: "mobile" },
  ];

  return (
    <>
      <div className="container-fluid  bg-white shadow-lg pb-3">
        <div className="row mx-auto d-flex justify-content-start align-items-center p-3 ">
          <div
            className="col-10"
            style={{
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            युजर्स
          </div>
          <div
            className="col-2"
            style={{
              float: "right",
            }}
          >
            <CSVLink data={users} headers={headers} filename={"Users.csv"}>
              <CButton color="success" className="px-4">
                <FontAwesomeIcon icon={faDownload} /> Export to excel
              </CButton>
            </CSVLink>
          </div>
          <div className=" container-fluid col-10 my-4">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">नाव</th>
                  <th scope="col">क्रिया</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((item, idx) => {
                  return (
                    <tr>
                      <th scope="row">{idx + 1}</th>
                      <td>{item.name}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faEye}
                          className=" hoverr-icon-view mx-2"
                          onClick={() => openViewModal(item)}
                        />

                        <FontAwesomeIcon
                          icon={faTrash}
                          className=" hoverr-icon-delete mx-2"
                          onClick={() => openDeleteModal(item._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <CModal
          show={viewModal}
          onClose={() => setViewModal(!viewModal)}
          size="lg"
        >
          <CModalHeader className="p-0">
            <CModalTitle
              className=" font-weight-bold font-2xl w-100 "
              style={{ backgroundColor: "#cd5c5c", color: "white" }}
            >
              <div className="p-3">संदेश</div>
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <ViewModal
              name={modalData.name}
              email={modalData.email}
              dob={modalData.dob}
              ward={modalData.ward}
              address={modalData.address}
              mobile={modalData.mobile}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="success" onClick={() => setViewModal(!viewModal)}>
              बंद करा
            </CButton>
          </CModalFooter>
        </CModal>
        <CModal
          show={deleteModal}
          onClose={() => setDeleteModal(!deleteModal)}
          color="danger"
        >
          <CModalHeader closeButton>
            <CModalTitle>काढून टाका</CModalTitle>
          </CModalHeader>
          <CModalBody>तुम्हाला खात्री आहे काढून टाकायचे आहे ?</CModalBody>
          <CModalFooter>
            <CButton color="danger" onClick={() => onDelete(itemId)}>
              काढून टाका
            </CButton>{" "}
            <CButton
              color="secondary"
              onClick={() => setDeleteModal(!deleteModal)}
            >
              रद्द करा
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    </>
  );
}

export default Users;
