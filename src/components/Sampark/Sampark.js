import React, { useState, useEffect } from "react";
import Modal from "react-modal";
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

Modal.setAppElement("#root");

const Sampark = () => {
  const [viewModal, setViewModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [allSampark, setAllSampark] = useState([]);

  const [modalData, setModalData] = useState({});

  function openViewModal(item) {
    setModalData(item);
    setViewModal(true);
  }
  function openDeleteModal(id) {
    setItemId(id);
    setDeleteModal(true);
  }
  useEffect(() => {
    axios
      .get("/sampark")
      .then((res) => {
        console.log(res);
        setAllSampark(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const users = allSampark.map((user) => {
    return user;
  });

  const headers = [
    { label: "Full Name", key: "name" },
    { label: "Mobile No.", key: "number" },
    { label: "Message", key: "message" },
  ];

  console.log(users);

  const [itemId, setItemId] = useState();

  const onDelete = (id) => {
    axios
      .delete(`/sampark/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    toast.error("Sampark Deleted !!");

    setDeleteModal(!deleteModal);
  };
  return (
    <>
      <div className="container-fluid  bg-white shadow-lg pb-3">
        <div className="row mx-auto d-flex justify-content-center align-items-center p-3">
          <div
            className="col-10"
            style={{
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            संपर्क संदेश
          </div>
          <div
            className="col-2"
            style={{
              float: "right",
            }}
          >
            <CSVLink data={users} headers={headers} filename={"Contacts.csv"}>
              <CButton color="success" className="px-4">
                <FontAwesomeIcon icon={faDownload} /> Export to excel
              </CButton>
            </CSVLink>
          </div>
        </div>
        <div className="container-fluid col-10">
          {" "}
          <table class="table table-lg">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">नाव</th>
                <th scope="col">मोबाइल नंबर</th>
                <th scope="col">विषय</th>
                <th scope="col">क्रिया</th>
              </tr>
            </thead>
            <tbody>
              {allSampark.map((item, idx) => {
                return (
                  <tr>
                    <th scope="row">{idx + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.number}</td>
                    <td>{item.message}</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faEye}
                        className=" hoverr-icon-view mx-1"
                        onClick={() => openViewModal(item)}
                      />

                      <FontAwesomeIcon
                        icon={faTrash}
                        className=" hoverr-icon-delete mx-1"
                        onClick={() => openDeleteModal(item._id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
              number={modalData.number}
              message={modalData.message}
              id={modalData.id}
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
};

export default Sampark;
