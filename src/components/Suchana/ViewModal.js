import React from "react";

function ViewModal({title,desc,link}) {
  return (
    <>
      <div className="  mb-3">
        <div className="col-md-12 mt-2">
          <div className=" mb-3">
            <div className="card-body">
              <div className="row my-3 ">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">शीर्षक</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg">{title}</div>
              </div>

              <div className="row my-3">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">माहिती</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg ">
                 {desc}
                </div>
              </div>

              <div className="row my-3">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">लिंक</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg">
                {link}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewModal;
