import React from "react";

function ViewModal({ name, dob, email, address, ward,mobile }) {
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
              {/* <div className="row my-3">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">ईमेल</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg">
                  {email}
                </div>
              </div> */}
              <div className="row my-3">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">नंबर</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg">
                  {mobile}
                </div>
              </div>
              <div className="row my-3">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">जन्म तारीख</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg ">{dob}</div>
              </div>
              <div className="row my-3">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">पत्ता</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg ">
                  {address}
                </div>
              </div>{" "}
              {/* <div className="row my-3">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">वॉर्ड क्रमांक</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg ">
                  {ward}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewModal;
