import React, { useState } from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

function Row({ number, message, name, id }) {
  const [viewModal, setViewModal] = useState(false);

  return (
    <>
      <div className="  mb-3">
        <div className="col-md-12 mt-2">
          <div className=" mb-3">
            <div className="card-body">
              <div className="row my-3 ">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">नाव</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg">{name}</div>
              </div>
              <div className="row my-3 ">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">नंबर</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg">
                  {number}
                </div>
              </div>

              <div className="row my-3">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">संदेश</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg ">
                  {message}
                </div>
              </div>
            </div>
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
            <div className="p-3">संदेश</div>
          </CModalTitle>
        </CModalHeader>
        <CModalBody>{/* <ViewModal  /> */}</CModalBody>
        <CModalFooter>
          <CButton color="success" onClick={() => setViewModal(!viewModal)}>
            Confirm
          </CButton>{" "}
          <CButton color="secondary" onClick={() => setViewModal(!viewModal)}>
            रद्द करा
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
}

export default Row;
