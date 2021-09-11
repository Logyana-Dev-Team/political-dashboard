import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function EditModal({ preloadedValues, closeEditModal, id }) {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: preloadedValues,
  });

  const onCancel = () => {
    reset(preloadedValues);
  };
  const onSubmit = (data) => {
    console.log(data);

    axios
      .patch(`/karya/${id}`, {
        title: data.title,
        desc: data.desc,
        link: data.link,
        videolink: data.videolink,
        // images:images
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Changes updated successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => console.log(err));
    closeEditModal();
  };

  return (
    <>
      <div className="  mb-3">
        <div className="col-md-12 mt-2">
          <div className=" mb-3">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row my-3">
                  <div className="col-sm-2">
                    <label className="font-weight-bolder h5" for="inputName">
                      शीर्षक
                    </label>
                  </div>
                  <div className="col-sm-10 col-md-8">
                    <input
                      type="text"
                      className="form-control  text-value-lg"
                      style={{ color: "black" }}
                      id="title"
                      placeholder="Name"
                      name="title"
                      ref={register}
                    />
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-sm-2">
                    <label className="font-weight-bolder h5" for="inputEmail4">
                      माहिती
                    </label>
                  </div>
                  <div className="col-sm-10 col-md-8">
                    <textarea
                      type="text"
                      className="form-control   text-value-lg"
                      style={{ color: "black", height: "300px" }}
                      id="desc"
                      placeholder="Loyana Solution Pvt Ltd"
                      name="desc"
                      ref={register}
                    ></textarea>
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-sm-2">
                    <label className="font-weight-bolder h5" for="inputEmail4">
                      लिंक
                    </label>
                  </div>
                  <div className="col-sm-10 col-md-8 ">
                    <input
                      type="name"
                      className="form-control text-value-lg"
                      style={{ color: "black" }}
                      id="link"
                      placeholder="www.link.com"
                      name="link"
                      ref={register}
                    />
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-sm-2">
                    <label className="font-weight-bolder h5" for="videolink">
                      व्हिडिओ लिंक
                    </label>
                  </div>
                  <div className="col-sm-10 col-md-8 ">
                    <input
                      type="name"
                      className="form-control text-value-lg"
                      style={{ color: "black" }}
                      id="videolink"
                      placeholder="https://www.youtube.com/watch?v=IcUqu-fYImE"
                      name="videolink"
                      ref={register}
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-end  my-4 ">
                  <button className="btn btn-success mx-2" type="submit">
                    बदल करा
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    type="button"
                    onClick={() => {
                      closeEditModal();
                      onCancel();
                    }}
                  >
                    रद्द करा
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditModal;
