import React, { useState } from "react";

function Form() {
  const [state, setstate] = useState([]);
  return (
    <>
      <form
        style={{ width: "90%", display: "block", alignItems: "center" }}
        className="mx-auto"
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
            placeholder="Write here"
          />
        </div>

        <div className="form-group" style={{ margin: "10px" }}>
          <label
            for="information"
            style={{
              color: "black",
              fontWeight: "bold",
              paddingVertical: "10px",
            }}
          >
            कार्याची माहिती
          </label>
          <textarea
            className="form-control"
            id="information"
            placeholder="Write here..."
            rows="5"
          ></textarea>
        </div>

        <div className="form-group" style={{ margin: "10px" }}>
          <label
            for="title"
            style={{
              color: "black",
              fontWeight: "bold",
              paddingVertical: "10px",
            }}
          >
            चित्र निवडा
          </label>
          <input
            multiple
            type="file"
            className="form-control"
            id="images"
            name="images"
            onChange={(e) => {
              setstate(e.target.value);
            }}
            value={state}
            placeholder="Choose Image"
          />
        </div>
      </form>
    </>
  );
}

export default Form;
