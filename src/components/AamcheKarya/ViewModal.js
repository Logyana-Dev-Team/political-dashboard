import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { icons } from "../../assets/icons";

function ViewModal({ title, desc, link, images, id, videolink }) {
  const deleteImage = (imageId) => {
    // console.log(imageId);
    axios
      .delete(`/karya/${id}/${imageId}`)
      .then((res) => {
        console.log(res);
        toast.error("Image Deleted !!");
      })
      .catch((err) => console.log(err));

    // setDeleteModal(!deleteModal);
    window.location.reload();
  };

  const addImage = async (e) => {
    // const inputFile = document.getElementById("image");
    let formData = new FormData();
    if (e.target.files[0]) {
      formData.append("file", e.target.files[0]);
      formData.append("upload_preset", "logyanasolutions");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/logyana/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const file = await res.json();
      // console.log(file);
      let obj = {
        fileURL: file.secure_url,
      };

      axios
        .post(`/karya/image/${id}`, obj)
        .then((res) => {
          console.log(res);
          toast.success("Image added !!");
        })
        .catch((err) => console.log(err));
    } else alert("choose image ");
    // setDeleteModal(!deleteModal);
    // window.location.reload();
  };

  return (
    <>
      <div className="container-fluid mb-3">
        <div className="col-md-12 mt-2">
          <div className=" mb-3">
            <div className="card-body">
              <div className="row my-3">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">शीर्षक</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg">
                  {title}
                </div>
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
                <div className="col-sm-8 text-black  text-value-lg">{link}</div>
              </div>
              {images.length > 0 ? (
                <div className="row my-3">
                  <div className="col-sm-4 my-3 ">
                    <h5 className="font-weight-bolder">चित्रे</h5>
                  </div>

                  <div className="col-sm-8 text-black ">
                    <input
                      type="file"
                      className="mt-3"
                      id="image"
                      name="image"
                      placeholder="Choose Image"
                      onChange={(e) => addImage(e)}
                    />
                    <p>
                      (File size should be less than 256KB and in .jpg,.jpeg
                      format)
                    </p>
                    <button
                      className="btn btn-behance m-2"
                      type="button"
                      onClick={() => {
                        addImage();
                      }}
                    >
                      Add image
                    </button>
                  </div>
                </div>
              ) : null}
            </div>

            {images.map((item) => {
              let id = item._id;
              return (
                <div key={id}>
                  <img
                    src={item.filename}
                    alt="sourceImage"
                    style={{
                      width: "250px",
                      height: "150px",
                      marginRight: "2px",
                    }}
                  />
                  <button
                    className="btn btn-sm btn-danger"
                    type="button"
                    onClick={() => {
                      //delete image route
                      deleteImage(id);
                    }}
                  >
                    <img
                      src={icons.close}
                      alt="sourceImage"
                      style={{ width: "15px", height: "15px" }}
                    />
                  </button>
                </div>
              );
            })}
            <div className="row my-3">
              <div className="col-sm-4">
                <h5 className="font-weight-bolder">Video लिंक</h5>
              </div>
              <div className="col-sm-8 text-black  text-value-lg">
                {videolink}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewModal;
