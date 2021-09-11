import React from "react";

function Row({ name, mob, desc, subject, date }) {
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
                <div className="col-sm-8 text-black  text-value-lg">
                  {name}
                  <div>{date}</div>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">मो. नंबर</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg ">{mob}</div>
              </div>
              <div className="row my-3">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">विषय</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg ">
                  {subject}
                </div>
              </div>
              <div className="row my-3 ">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">तक्रार</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg">{desc}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Row;
