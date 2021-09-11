import React from "react";
import { useForm } from "react-hook-form";

import facebook from "../../assets/icons/facebook.png";
import Instagram from "../../assets/icons/instagram.png";
import Gmail from "../../assets/icons/gmail.png";
import Whatsapp from "../../assets/icons/whatsapp.png";
import Check from "../../assets/icons/check.png";
import Playstore from "../../assets/icons/playstore.png";

import axios from "axios";
import { toast } from "react-toastify";

function EditForm({ preloadedValues }) {
  const { handleSubmit, register } = useForm({
    defaultValues: preloadedValues,
  });

  // const [data, setData] = useState({});

  const onSubmit = (data) => {
    // const inpFile = document.getElementById("inpFile");
    let formData = new FormData();

    // for (const file of inpFile.files) {
    //   formData.append("images", file);
    // }

    //useless for now , sending body as object, not used this formData to update
    // patch isn't working with formData :(
    formData.append("name", data.name);
    formData.append("dob", data.dob);
    formData.append("desc1", data.desc1);
    formData.append("desc2", data.desc2);
    formData.append("facebook", data.facebook);
    formData.append("instagram", data.instagram);
    formData.append("gmail", data.gmail);
    formData.append("whatsapp", data.whatsapp);
    formData.append("number", data.number);

    // axios.post('',formData)
    // .then((response) => {
    //       console.log(response.data);
    //       toast.success("Changes saved successfully !!");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //    });

    // axios.get('http://localhost:7000/')
    // .then((response) => {
    //       console.log(response.data[0]);
    //       setData(response.data[0])
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // e.preventDefault();
    // for (const [key,value] of formData)
    // {console.log(`Key:${key}`)
    // console.log(`Value:${value}`)}

    axios
      .patch("/mahiti/60833357e3bc4128c4065324", {
        name: data.name,
        dob: data.dob,
        desc1: data.desc1,
        desc2: data.desc2,
        facebook: data.facebook,
        instagram: data.instagram,
        gmail: data.gmail,
        whatsapp: data.whatsapp,
        playstore: data.playstore,
        number: data.number,
      })
      .then((response) => {
        console.log(response.data);
        toast.success("Changes saved successfully !!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form
        style={{ width: "90%", display: "block", alignItems: "center" }}
        className="mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <img src={`data:${data.contentType};base64,${data.imageBase64}`} alt='imagg' /> */}
        <div className="form-group" style={{ margin: "10px" }}>
          <label
            for="title"
            style={{
              color: "black",
              fontWeight: "bold",
              paddingVertical: "10px",
            }}
          >
            नाव
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            ref={register}
            placeholder="Write here"
          />
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
            जन्म तारीख
          </label>
          <input
            type="text"
            className="form-control"
            id="dob"
            name="dob"
            ref={register}
            placeholder="Write here"
          />
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
            परिचय
          </label>
          <textarea
            className="form-control"
            id="desc1"
            name="desc1"
            ref={register}
            placeholder="Write here..."
            rows="5"
          ></textarea>
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
            राजकीय कार्यकीर्द
          </label>
          <textarea
            className="form-control"
            id="desc2"
            name="desc2"
            ref={register}
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
              paddingVertical: "15px",
            }}
          >
            <img
              src={facebook}
              width="23px"
              height="23px"
              className="mr-2"
              alt="alt"
            />
            Facebook लिंक
          </label>
          <input
            type="text"
            className="form-control"
            id="facebook"
            name="facebook"
            ref={register}
            placeholder="Write here"
          />
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
            <img
              src={Instagram}
              width="23px"
              height="23px"
              className="mr-2"
              alt="alt"
            />
            Instagram लिंक
          </label>
          <input
            type="text"
            className="form-control"
            id="instagram"
            name="instagram"
            ref={register}
            placeholder="Write here"
          />
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
            <img
              src={Gmail}
              width="23px"
              height="23px"
              className="mr-2"
              alt="alt"
            />
            Gmail लिंक
          </label>
          <input
            type="text"
            className="form-control"
            id="gmail"
            name="gmail"
            ref={register}
            placeholder="Write here"
          />
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
            <img
              src={Whatsapp}
              width="23px"
              height="23px"
              className="mr-2"
              alt="alt"
            />
            Whatsapp नंबर
          </label>
          <input
            type="text"
            className="form-control"
            id="whatsapp"
            name="whatsapp"
            ref={register}
            placeholder="Write here"
          />
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
            <img
              src={Playstore}
              width="23px"
              height="23px"
              className="mr-2"
              alt="alt"
            />
            Playstore लिंक
          </label>
          <input
            type="text"
            className="form-control"
            id="playstore"
            name="playstore"
            ref={register}
            placeholder="Write here"
          />
        </div>
        <div className="form-group my-3" style={{ margin: "10px" }}>
          <label
            for="title"
            style={{
              color: "black",
              fontWeight: "bold",
              paddingVertical: "10px",
            }}
          >
            मोबाईल नंबर
          </label>
          <input
            type="number"
            className="form-control"
            id="number"
            name="number"
            ref={register}
            placeholder="Write here"
          />
        </div>
        <div className="col-12  d-flex justify-content-end my-4">
          <button
            type="submit"
            className="btn btn-behance font-weight-bold "
            style={{ fontSize: "1rem" }}
          >
            जतन करा
            <img
              src={Check}
              width="15px"
              height="15px"
              className="ml-2"
              alt="alt"
            />
          </button>
        </div>
      </form>
    </>
  );
}

export default EditForm;
