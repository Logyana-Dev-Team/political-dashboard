import React from "react";

function AddSuchana() {
  return (
    <>
      <form
        style={{ width: "90%", display: "block", alignItems: "center" }}
        className="mx-auto"
      >
        <div className="form-group" style={{ margin: "10px" }}>
          <label
            for="exampleFormControlInput1"
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
            id="fullname"
            placeholder="Your Fullname"
          />
        </div>
        {/* <div className="form-group" style={{ margin: "15px" }}>
          <label
            for="exampleFormControlInput1"
            style={{
              color: "black",
              fontWeight: "bold",
              paddingVertical: "10px",
            }}
          >
            Email-ID
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Email-ID"
          />
        </div> */}

        <div className="form-group" style={{ margin: "15px" }}>
          <label
            for="Description"
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
            id="Description"
            placeholder="Write here..."
            rows="5"
          ></textarea>
        </div>
      </form>
    </>
  );
}

export default AddSuchana;
