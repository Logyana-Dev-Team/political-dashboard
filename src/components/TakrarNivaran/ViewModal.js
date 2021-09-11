import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { icons } from "../../assets/icons";

function ViewModal({ type, name, complaint, images, id, desc }) {
  const deleteImage = (imageId) => {
    axios
      .delete(`/nivaran/${id}/${imageId}`)
      .then((res) => {
        console.log(res);
        toast.error("Image Deleted !!");
      })
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const addImage = async (e) => {
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
                  <h5 className="font-weight-bolder">तक्रारीचा प्रकार</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg">{type}</div>
              </div>

              <div className="row my-3">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">तक्रार देणाऱ्याचे नाव</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg ">
                  {name}
                </div>
              </div>
              <div className="row my-3">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">दिलेली तक्रार</h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg ">
                  {complaint}
                </div>
              </div>

              <div className="row my-3">
                <div className="col-sm-4">
                  <h5 className="font-weight-bolder">
                    तक्रार निवारण बद्दल माहिती
                  </h5>
                </div>
                <div className="col-sm-8 text-black  text-value-lg">{desc}</div>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewModal;
