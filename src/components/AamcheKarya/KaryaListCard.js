import React, { useState } from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import axios from "axios";
import { toast } from "react-toastify";

function KaryaListCard({ title, link, desc, id, images, videolink }) {
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [user] = useState({
    title: title,
    desc: desc,
    link: link,
  });

  function openViewModal() {
    setViewModal(true);
  }

  function openEditModal() {
    setEditModal(true);
  }

  function closeEditModal() {
    setEditModal(false);
  }

  function openDeleteModal() {
    setDeleteModal(true);
  }
  const onDelete = () => {
    axios
      .delete(`/karya/${id}`)
      .then((res) => console.log(res))
      .then(() => {
        setDeleteModal(!deleteModal);
        toast.error("Karya Deleted !!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="card w-100 my-2">
        <div className="card-body row p-2">
          <div className="card-title col-md-8 col-sm-12 my-0 py-0">
            <h6>{title}</h6>
          </div>
          <div className=" card-action col-md-4 col-sm-12 d-flex justify-content-end align-items-center  ">
            <button
              className="btn btn-success btn-sm mx-1"
              onClick={() => {
                openViewModal();
              }}
            >
              पहा
            </button>
            <button
              className="btn btn-warning btn-sm text-white mx-1 "
              onClick={() => {
                openEditModal();
              }}
            >
              बदल करा
            </button>
            <button
              className="btn btn-danger btn-sm mx-1"
              onClick={() => {
                openDeleteModal();
              }}
            >
              काढा
            </button>
          </div>
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
            <div className="p-3"> पहा</div>
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {/* Modal Code */}
          <ViewModal
            title={title}
            desc={desc}
            link={link}
            images={images}
            id={id}
            videolink={videolink}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="success" onClick={() => setViewModal(!viewModal)}>
            बंद करा
          </CButton>{" "}
        </CModalFooter>
      </CModal>

      <CModal
        show={editModal}
        onClose={() => setViewModal(!editModal)}
        size="lg"
      >
        <CModalHeader className="p-0">
          <CModalTitle
            className=" font-weight-bold font-2xl w-100 "
            style={{ backgroundColor: "#cd5c5c", color: "white" }}
          >
            <div className="p-3">बदल करा</div>
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <EditModal
            preloadedValues={user}
            id={id}
            closeEditModal={closeEditModal}
          />
        </CModalBody>
      </CModal>
      <CModal
        show={deleteModal}
        onClose={() => setDeleteModal(!deleteModal)}
        color="danger"
      >
        <CModalHeader>
          <CModalTitle>काढून टाका</CModalTitle>
        </CModalHeader>
        <CModalBody style={{ fontWeight: "bold", fontSize: "1rem" }}>
          तुम्हाला खात्री आहे काढून टाकायचे आहे ?
        </CModalBody>
        <CModalBody className="d-flex justify-content-end ">
          <CButton
            color="danger"
            className="m-1"
            onClick={() => {
              onDelete();
            }}
          >
            काढून टाका
          </CButton>{" "}
          <CButton
            color="secondary"
            className="m-1"
            onClick={() => setDeleteModal(!deleteModal)}
          >
            रद्द करा
          </CButton>
        </CModalBody>
      </CModal>
    </>
  );
}

export default KaryaListCard;
