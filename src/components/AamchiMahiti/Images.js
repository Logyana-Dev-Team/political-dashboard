import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

function Images() {
  const [profile, setProfile] = useState({});
  const [banner, setBanner] = useState({});
  const [loading, setLoading] = useState(true);

  const addProfileImage = async (e) => {
    let formDataProfile = new FormData();
    formDataProfile.append("file", e.target.files[0]);
    formDataProfile.append("upload_preset", "ambarnath");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/logyana/image/upload",
      {
        method: "POST",
        body: formDataProfile,
      }
    );
    const file = await res.json();
    let obj = {
      fileURL: file.secure_url,
    };
    axios
      .post(`/profile/60832c199e34c03a4035af33`, obj)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    toast.success("Images changed  successfully !!");
  };

  const addBannerImage = async (e) => {
    let formDataBanner = new FormData();
    formDataBanner.append("file", e.target.files[0]);
    formDataBanner.append("upload_preset", "ambarnath");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/logyana/image/upload",
      {
        method: "POST",
        body: formDataBanner,
      }
    );
    const file = await res.json();
    let obj = {
      fileURL: file.secure_url,
    };
    axios
      .post(`/banner/60832bd5c35ec50b64d3dc14`, obj)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    toast.success("Images changed  successfully !!");
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("/profile")
      .then((res) => {
        console.log(res.data[0]);
        setProfile(res.data[0]);
      })
      .catch((err) => console.log(err));
    axios
      .get("/banner")
      .then((res) => {
        console.log(res.data[0]);
        setBanner(res.data[0]);
      })
      .catch((err) => console.log(err));

    setLoading(false);
  }, []);
  return (
    <>
      {loading ? null : (
        <>
          <div className="form-group m-sm-4 " style={{ margin: "10px" }}>
            <label
              for="title"
              style={{
                color: "black",
                fontWeight: "bold",
                paddingVertical: "15px",
                marginRight: "2rem",
              }}
            >
              परिचय चित्र निवडा(400px x 400px )
            </label>
            <label></label>
            <img
              style={{ width: "30%", height: "20%" }}
              src={profile.filename}
              alt="imagg"
            />

            <input
              type="file"
              id="profile"
              name="profile"
              placeholder="Choose Image"
              // ref={register}
              onChange={(e) => addProfileImage(e)}
            />
          </div>

          <div className=" m-sm-4 col-sm-10 " style={{ margin: "10px" }}>
            <label
              for="title"
              style={{
                color: "black",
                fontWeight: "bold",
                paddingVertical: "15px",
                marginRight: "2rem",
              }}
            >
              बॅनर निवडा (700px x 1200px)
            </label>
            <img
              style={{ width: "50%", height: "20%" }}
              src={banner.filename}
              alt="imagg"
              className="col-sm-8"
            />

            <input
              type="file"
              id="banner"
              name="banner"
              placeholder="Choose Image"
              // ref={register}
              onChange={(e) => addBannerImage(e)}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Images;
