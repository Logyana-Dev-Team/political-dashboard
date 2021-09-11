import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import axios from "axios";
import EditForm from "./EditForm";
import Images from "./Images";

Modal.setAppElement("#root");

const AamchiMahiti = () => {
  const [status, setStatus] = useState(false);
  const [state, setState] = useState({
    name: "",
    dob: "",
    desc1: "",
    desc2: "",
    facebook: "",
    instagram: "",
    gmail: "",
    whatsapp: "",
    playstore: "",
    number: 0,
  });

  useEffect(() => {
    axios
      .get("/mahiti")
      .then((res) => {
        // console.log(res.data[0]);
        setState(res.data[0]);
        setStatus(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container-fluid bg-white shadow-lg pb-3 ">
        <div className="row mx-auto d-flex justify-content-flex-start align-items-center p-3 ">
          <div
            className="col-lg-10 col-md-10 col-8 "
            style={{
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            आमची माहिती
          </div>
        </div>

        {status && <EditForm preloadedValues={state} />}
        <Images />
      </div>
    </>
  );
};

export default AamchiMahiti;
