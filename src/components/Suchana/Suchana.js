import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import {
  CCardBody,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
  CCol,
} from "@coreui/react";
import SuchanaListCard from "./SuchanaListCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const Suchana = () => {
  const { register, handleSubmit, reset } = useForm();
  const [allSuchanas, setAllSuchanas] = useState([]);

  const onSubmit = (data) => {
    console.log(data); // sent object
    axios
      .post("/suchana", {
        title: data.title,
        desc: data.desc,
        link: data.link,
      })
      .then((response) => {
        console.log(response.data);
        reset({});
        closeModal();
        toast.success("Suchana added successfully !!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("/suchana")
      .then((res) => {
        console.log(res);
        setAllSuchanas(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [state, setState] = useState(false);

  function openModal() {
    setState(true);
  }

  function closeModal() {
    setState(false);
  }

  return (
    <>
      <div className="container-fluid  bg-white shadow-lg pb-3">
        <div className="row mx-auto d-flex justify-content-center align-items-center p-3">
          <div
            className="col-lg-9 col-md-8 col-sm-8"
            style={{
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            नागरिकांसाठी सूचना
          </div>
          <div className="col-lg-3 col-md-4  col-sm-4 d-flex justify-content-end">
            <button
              className="btn btn-behance font-weight-bold"
              onClick={openModal}
              style={{ fontSize: "1rem" }}
            >
              <FontAwesomeIcon icon={faPlusCircle} className="mr-1" />
              नवीन सूचना
            </button>
          </div>
        </div>
        {/* Modal start */}
        <CModal show={state} onClose={() => setState(!state)} size="lg">
          <CModalHeader closeButton>
            <CModalTitle className=" font-weight-bold">नवीन सूचना</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <form
              style={{ width: "90%", display: "block", alignItems: "center" }}
              className="mx-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-group" style={{ margin: "10px" }}>
                <label
                  for="title"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    paddingVertical: "10px",
                  }}
                >
                  सूचनेचे शीर्षक
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  ref={register}
                  placeholder="Write here"
                />
              </div>

              <div className="form-group" style={{ margin: "10px" }}>
                <label
                  for="desc"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    paddingVertical: "10px",
                  }}
                >
                  सूचनेची माहिती
                </label>
                <textarea
                  className="form-control"
                  id="desc"
                  name="desc"
                  ref={register}
                  placeholder="Write here..."
                  rows="5"
                ></textarea>
              </div>
              <div className="form-group" style={{ margin: "10px" }}>
                <label
                  for="link"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    paddingVertical: "10px",
                  }}
                >
                  संकेतस्थळ
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="link"
                  name="link"
                  ref={register}
                  placeholder="Write here"
                />
              </div>
              <div className="d-flex justify-content-end  my-4 ">
                <button className="btn btn-success mx-2" type="submit">
                  सूचना टाका
                </button>
                <button
                  className="btn btn-danger mx-2"
                  type="button"
                  onClick={() => setState(!state)}
                >
                  {" "}
                  रद्द करा{" "}
                </button>
              </div>
            </form>
          </CModalBody>
        </CModal>

        <CRow>
          <CCol xs="12" lg="12">
            <div style={{ width: "100%", height: "100%" }}>
              <CCardBody style={{ width: "100%", height: "100%" }}>
                {allSuchanas.map((item) => {
                  return (
                    <div key={item._id}>
                      <SuchanaListCard
                        id={item._id}
                        title={item.title}
                        desc={item.desc}
                        link={item.link}
                        preloaded={item}
                      />
                    </div>
                  );
                })}
              </CCardBody>
            </div>
          </CCol>
        </CRow>
      </div>
    </>
  );
};

export default Suchana;
