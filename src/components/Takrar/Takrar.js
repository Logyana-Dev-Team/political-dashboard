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
import Select from "react-select";
import { CSVLink } from "react-csv";

const options = [
  { value: "अपूर्ण", label: "अपूर्ण" },
  { value: "चालू", label: "चालू" },
  { value: "पूर्ण", label: "पूर्ण" },
];

function Takrar() {
  const [viewModal, setViewModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [allTakrar, setAllTakrar] = useState([]);
  const [comment, setComment] = useState([]);

  const [modalData, setModalData] = useState({});
  const [itemId, setItemId] = useState();

  function openViewModal(item) {
    setModalData(item);
    console.log(modalData);
    setViewModal(true);
  }
  function openDeleteModal(id) {
    setItemId(id);
    setDeleteModal(true);
  }

  const onSelectOption = (selectedValue, id) => {
    console.log(selectedValue);
    axios
      .patch(`/takrar/${id}`, {
        status: selectedValue,
      })
      .then((res) => {
        console.log(res);
        toast.success("Changes updated successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => console.log(err));
  };
  const onDelete = (id) => {
    axios
      .delete(`takrar/${id}`)
      .then((res) => {
        console.log(res);
        toast.error("Deleted successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => console.log(err));

    setDeleteModal(!deleteModal);
  };

  useEffect(() => {
    axios
      .get("/takrar")
      .then((res) => {
        console.log(res.data);
        setAllTakrar(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const takrar = allTakrar.map((takrar) => {
    return takrar;
  });

  const headers = [
    { label: "Full Name", key: "name" },
    { label: "Mobile No.", key: "mob" },
    { label: "Subject", key: "subject" },
    { label: "Complaint", key: "desc" },
  ];

  console.log(takrar);

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
            तक्रार / प्रस्ताव
          </div>
          <div
            className="col-2"
            style={{
              float: "right",
            }}
          >
            <CSVLink
              data={takrar}
              headers={headers}
              filename={"Complaints.csv"}
            >
              <CButton color="success" className="px-4">
                <FontAwesomeIcon icon={faDownload} /> Export to excel
              </CButton>
            </CSVLink>
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
              mob={modalData.mob}
              desc={modalData.desc}
              subject={modalData.subject}
              date={modalData.date}
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
        <table class="table table-lg">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">नाव</th>
              <th scope="col">तारीख</th>
              <th scope="col">क्रिया</th>
              <th scope="col">स्थिती</th>
              <th scope="col">अनुकरण</th>
            </tr>
          </thead>
          <tbody>
            {allTakrar.map((item, idx) => {
              return (
                <tr>
                  <th scope="row">{idx + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.updatedAt.split("T")[0]}</td>
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
                  <td>
                    <div>
                      <Select
                        // value={selectedOption}
                        onChange={(selected) => {
                          onSelectOption(selected.value, item._id);
                        }}
                        options={options}
                        defaultInputValue={item.status}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="row">
                      <div className="col">
                        <textarea
                          style={{ width: "100%" }}
                          onChange={(e) => setComment(e.target.value)}
                        />
                      </div>
                      <div className="col">
                        <button
                          onClick={() => {
                            const mob = item.mob;
                            const name = item.name;
                            const status = item.status;
                            const message =
                              "प्रिय  " +
                              name +
                              ",%0Aअंबरनाथ कांबळे अँप्लिकेशन वर तक्रार नोंदवल्या बद्दल धन्यवाद.%0Aआपल्या तक्रारीची स्थिती पुढील प्रमाणे आहे -%0Aस्तिथी : " +
                              status +
                              " %0Aनोंद :" +
                              comment;
                            window.open(
                              `https://wa.me/91${mob}?text=${message}`
                            );
                            setComment("");
                          }}
                          className="btn btn-success"
                        >
                          पाठवा
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Takrar;
