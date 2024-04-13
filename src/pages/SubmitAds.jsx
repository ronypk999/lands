import { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

export default function SubmitAds() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [facilities, setFacilities] = useState([]);
  const facilityRef = useRef();

  const onSubmit = () => {
    if (facilities.length < 2) {
      toast.error("You must add at least 2 facility");
    } else {
      toast.success(
        "Done! We will review your request and add to listings as soon as possbile"
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Ads</title>
      </Helmet>
      <ToastContainer></ToastContainer>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-xl font-bold flex gap-3">
              Create ads for selling or renting land
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type your title</span>
                </label>
                <input
                  type="text"
                  {...register("title", { required: true, minLength: 10 })}
                  placeholder="Title"
                  className="input input-bordered"
                  required
                />
                {errors?.title &&
                  (errors?.title?.type === "required" ? (
                    <span className="text-red-500">This field is required</span>
                  ) : (
                    errors?.title?.type === "minLength" && (
                      <span className="text-red-500">
                        Must be 10 characters
                      </span>
                    )
                  ))}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Segment name</span>
                </label>
                <input
                  type="text"
                  {...register("segment", { required: true, minLength: 5 })}
                  placeholder="Segment name"
                  className="input input-bordered"
                  required
                />
                {errors?.segment &&
                  (errors?.segment?.type === "required" ? (
                    <span className="text-red-500">This field is required</span>
                  ) : (
                    errors?.segment?.type === "minLength" && (
                      <span className="text-red-500">Must be 5 characters</span>
                    )
                  ))}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  {...register("location", { required: true, minLength: 5 })}
                  placeholder="Where is located?"
                  className="input input-bordered"
                  required
                />
                {errors?.location &&
                  (errors?.location?.type === "required" ? (
                    <span className="text-red-500">This field is required</span>
                  ) : (
                    errors?.location?.type === "minLength" && (
                      <span className="text-red-500">Must be 5 characters</span>
                    )
                  ))}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  {...register("price", { required: true, minLength: 1 })}
                  placeholder="What price do you want?"
                  className="input input-bordered"
                  required
                />
                {errors?.price &&
                  (errors?.price?.type === "required" ? (
                    <span className="text-red-500">This field is required</span>
                  ) : (
                    errors?.price?.type === "minLength" && (
                      <span className="text-red-500">Must be 1 characters</span>
                    )
                  ))}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rent or Sale</span>
                </label>
                <select
                  {...register("status", { required: true })}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option value="20">Rent</option>

                  <option value="30">Sale</option>
                </select>

                {errors?.status && (
                  <span className="text-red-500">You must select one</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Facilities</span>
                </label>
                {facilities.length > 0 && (
                  <div className="flex py-3 gap-1 flex-wrap">
                    {facilities.map((data, idx) => {
                      return (
                        <span className="badge badge-success pr-0" key={idx}>
                          {data}
                          <span
                            className="cursor-pointer rounded-full px-[5px] hover:bg-white"
                            onClick={() => {
                              const f = facilities.filter(
                                (face) => face !== data
                              );

                              setFacilities(f);
                            }}
                          >
                            x
                          </span>
                        </span>
                      );
                    })}
                  </div>
                )}
                <div className="join">
                  <input
                    ref={facilityRef}
                    className="input input-bordered join-item"
                    placeholder="Type Facility"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (facilityRef.current.value) {
                        setFacilities([
                          ...facilities,
                          facilityRef.current.value,
                        ]);
                        facilityRef.current.value = "";
                      }
                    }}
                    className="btn join-item rounded-r-full"
                  >
                    add
                  </button>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  {...register("image", { required: true })}
                  placeholder="Enter your image url"
                  className="input input-bordered"
                  required
                />

                {errors?.image && (
                  <span className="text-red-500">You must put a image url</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>

                <textarea
                  {...register("descrition", {
                    required: true,
                    minLength: 100,
                    maxLength: 500,
                  })}
                  className="textarea textarea-bordered"
                  placeholder="Type your description"
                ></textarea>

                {errors?.descrition &&
                errors?.descrition?.type === "required" ? (
                  <span className="text-red-500">
                    You must provide a description
                  </span>
                ) : errors?.descrition?.type === "minLength" ? (
                  <span className="text-red-500">
                    Must be 100 - 500 characters
                  </span>
                ) : (
                  errors?.descrition?.type === "maxLength" && (
                    <span className="text-red-500">
                      Must be under 500 characters
                    </span>
                  )
                )}
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
