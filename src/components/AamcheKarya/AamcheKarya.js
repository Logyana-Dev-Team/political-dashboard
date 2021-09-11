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
import KaryaListCard from "./KaryaListCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const Karya = () => {
  const [loading, setLoading] = useState(false);
  const [videolinkValue, setvideolinkValue] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [allKaryas, setAllKaryas] = useState([]);

  let fileArray = [];

  const onSubmit = async (data, event) => {
    event.preventDefault();
    let isNull = document.getElementById("inpFile");
    // let videolink = document.getElementById("videolink") || "" ;
    // console.log(videolink);

    const inpFile = isNull.files;

    let imgFormData = new FormData();
    if (inpFile) {
      for (const f of inpFile) {
        imgFormData.append("file", f);
        imgFormData.append("upload_preset", "logyanasolutions");
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/logyana/image/upload",
          {
            method: "POST",
            body: imgFormData,
          }
        );
        const file = await res.json();
        console.log(file);
        let obj = {
          fileURL: file.secure_url,
        };
        fileArray.push(obj);
      }
      console.log(fileArray);
    } // formData.append("fileArray", fileArray);

    let dataObject = {
      title: data.title,
      desc: data.desc,
      link: data.link,
      fileArray: fileArray,
      videolink: videolinkValue,
    };
    console.log(dataObject); // sent object
    axios
      .post("/karya", dataObject)
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        reset({});
        closeModal();
        toast.success("Karya added successfully !!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        // reset({});
        closeModal();
        // toast.danger("Failed !!");
        // setTimeout(() => {
        //   window.location.reload()
        //   }, 2000);
      });
    // setTimeout(() => {
    //   window.location.reload()
    //   }, 2000);
  };

  useEffect(() => {
    axios
      .get("/karya")
      .then((res) => {
        console.log(res.data);
        setAllKaryas(res.data);
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
            आमचे कार्य
          </div>
          <div className="col-lg-3 col-md-4  col-sm-4 d-flex justify-content-end">
            <button
              className="btn btn-behance font-weight-bold"
              onClick={openModal}
              style={{ fontSize: "1rem" }}
            >
              <FontAwesomeIcon icon={faPlusCircle} className="mr-1" />
              नवीन कार्य
            </button>
          </div>
        </div>
        {/* Modal start */}
        <CModal show={state} onClose={() => setState(!state)} size="lg">
          <CModalHeader closeButton>
            <CModalTitle className=" font-weight-bold">नवीन कार्य</CModalTitle>
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
                  कार्य शीर्षक
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
                  कार्यची माहिती
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
                  लिंक
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
              <div className="form-group my-4" style={{ margin: "10px" }}>
                <label
                  for="inpFile"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    paddingVertical: "15px",
                    marginRight: "2rem",
                  }}
                >
                  चित्र निवडा
                </label>
                <input
                  type="file"
                  id="inpFile"
                  name="inpFile"
                  placeholder="Choose Image"
                  multiple
                  ref={register}
                />
                <p>
                  (Total file size should be less than 400KB and in .jpg,.jpeg
                  format)
                </p>
              </div>
              <div className="form-group my-4" style={{ margin: "10px" }}>
                <label
                  for="videolink"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    paddingVertical: "15px",
                    marginRight: "2rem",
                  }}
                >
                  व्हिडिओ लिंक
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="videolink"
                  name="videolink"
                  value={videolinkValue}
                  onChange={(e) => setvideolinkValue(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-end  my-4 ">
                <button
                  className="btn btn-success mx-2"
                  type="submit"
                  onClick={() => {
                    setLoading(true);
                  }}
                >
                  {loading ? (
                    <div className="spinner-border fast" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <>कार्य टाका</>
                  )}
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
                {allKaryas.map((item) => {
                  return (
                    <div key={item._id}>
                      <KaryaListCard
                        id={item._id}
                        title={item.title}
                        desc={item.desc}
                        link={item.link}
                        preloaded={item}
                        images={item.images}
                        videolink={item.videolink}
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

export default Karya;
