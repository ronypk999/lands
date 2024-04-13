import { useLoaderData, useParams } from "react-router-dom";
import NotifyLogin from "../notify/NotifyLogin";
import { IoLocationSharp } from "react-icons/io5";
import { BsBoundingBoxCircles } from "react-icons/bs";
import Estate from "../components/estate/Estate";
import { Helmet } from "react-helmet";

const Property = () => {
  const { id, propertyName } = useParams();
  const allData = useLoaderData();
  const filterData = allData.filter((data) => {
    if (
      data.id !== parseInt(id) &&
      data.estate_title !== propertyName.replace("-", " ")
    ) {
      return true;
    }
  });
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
      <Helmet>
        <title>View Property</title>
      </Helmet>
      <NotifyLogin></NotifyLogin>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="hero min-h-screen bg-base-200"
      >
        <div className="hero-content flex-col">
          <div className="flex gap-3 flex-col">
            <img src={image} className="max-w-xxl rounded-lg shadow-2xl" />
            <div className="flex justify-around gap-6">
              <span
                data-aos="fade-right"
                data-aos-delay="100"
                className="badge badge-success p-3 text-base"
              >
                Price: {price}
              </span>
              <span
                data-aos="fade-left"
                data-aos-delay="300"
                className="badge badge-secondary p-3 text-base"
              >
                For {status}
              </span>
            </div>
          </div>
          <div className="space-y-3 max-w-lg">
            <h1
              data-aos="fade-left"
              data-aos-delay="500"
              className="text-xl md:text-2xl lg:text-5xl font-bold"
            >
              {estate_title}
            </h1>
            <p className="py-6 text-base">{description}</p>
            <p
              className="flex gap-1 items-center"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <IoLocationSharp className="text-xl text-red-500"></IoLocationSharp>
              {location} ({segment_name})
            </p>
            <p
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="flex gap-1 items-center"
            >
              Size: {area} <BsBoundingBoxCircles></BsBoundingBoxCircles>
            </p>
            <div className="flex gap-2">
              Facilities:
              {facilities.map((f, idx) => {
                return (
                  <span
                    data-aos="fade-left"
                    data-aos-delay={(idx + 1) * 300}
                    key={idx}
                    className="badge badge-primary"
                  >
                    {f}
                  </span>
                );
              })}
            </div>
            <div className="text-right">
              <button
                data-aos="fade-left"
                data-aos-delay="700"
                className="btn btn-primary"
              >
                Call owner
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-6 lg:px-12">
        <h1 className="text-2xl font-bold py-6 text-center">
          More similar lands
        </h1>
        <div className="flex justify-around gap-12 flex-wrap">
          {filterData.map((data) => {
            return <Estate key={data.id} data={data}></Estate>;
          })}
        </div>
      </div>
    </>
  );
};

export default Property;
