import { useLoaderData, useParams } from "react-router-dom";
import NotifyLogin from "../notify/NotifyLogin";
import { IoLocationSharp } from "react-icons/io5";
import { BsBoundingBoxCircles } from "react-icons/bs";

const Property = () => {
  const { id, propertyName } = useParams();
  const allData = useLoaderData();
  const data = allData.find((data) => {
    if (
      data.id === parseInt(id) &&
      data.estate_title === propertyName.replace("-", " ")
    ) {
      return true;
    }
  });

  const {
    estate_title,
    description,
    price,
    segment_name,
    image,
    location,
    status,
    area,
    facilities,
  } = data;

  return (
    <>
      <NotifyLogin></NotifyLogin>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="flex gap-3 flex-col">
            <img src={image} className="max-w-xxl rounded-lg shadow-2xl" />
            <div className="flex justify-around gap-6">
              <span className="badge badge-success p-3 text-base">
                Price: {price}
              </span>
              <span className="badge badge-secondary p-3 text-base">
                For {status}
              </span>
            </div>
          </div>
          <div className="space-y-3 max-w-lg">
            <h1 className="text-5xl font-bold">{estate_title}</h1>
            <p className="py-6 text-base">{description}</p>
            <p className="flex gap-1 items-center">
              <IoLocationSharp className="text-xl text-red-500"></IoLocationSharp>
              {location} ({segment_name})
            </p>
            <p className="flex gap-1 items-center">
              Size: {area} <BsBoundingBoxCircles></BsBoundingBoxCircles>
            </p>
            <div className="flex gap-2">
              Facilities:
              {facilities.map((f, idx) => {
                return (
                  <span key={idx} className="badge badge-primary">
                    {f}
                  </span>
                );
              })}
            </div>
            <div className="text-right">
              <button className="btn btn-primary">Call owner</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
