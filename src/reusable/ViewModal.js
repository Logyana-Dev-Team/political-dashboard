import React from "react";

function ViewModal() {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-danger">View Profile</h6>
        </div>
        <div className="col-md-12 mt-2">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="d-flex flex-column align-items-center text-center col-md-4 col-sm-12 mb-4">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width="100"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-2">
                  <h6 className="mb-0 font-weight-bolder">Name</h6>
                </div>
                <div className="col-sm-10 text-secondary">Pawan Sawant</div>
              </div>

              <div className="row">
                <div className="col-sm-2">
                  <h6 className="mb-0 font-weight-bolder">Business Name</h6>
                </div>
                <div className="col-sm-10 text-secondary">
                  Loyana Solution Pvt Ltd
                </div>
              </div>

              <div className="row">
                <div className="col-sm-2">
                  <h6 className="mb-0 font-weight-bolder">Email</h6>
                </div>
                <div className="col-sm-10 text-secondary">
                  pawantsawant1999@gmail.com
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <h6 className="mb-0 font-weight-bolder">Mobile</h6>
                </div>
                <div className="col-sm-10 text-secondary">9995864856</div>
              </div>

              <div className="row">
                <div className="col-sm-2">
                  <h6 className="mb-0 font-weight-bolder">Address</h6>
                </div>
                <div className="col-sm-10 text-secondary">
                  Logyana Solutions Pvt Ltd , Pimpri , Pune
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
