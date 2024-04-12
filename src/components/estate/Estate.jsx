import PropTypes from "prop-types";
import { IoLocationSharp } from "react-icons/io5";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { Link } from "react-router-dom";
const Estate = ({ data }) => {
  const { id, estate_title, image, location, area, status, price } = data;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <div className="flex justify-between">
            <div className="badge badge-success">{price}</div>
            <div className="badge badge-secondary">{status}</div>
          </div>
          <p className="flex gap-1 items-center">
            <IoLocationSharp className="text-xl text-red-500"></IoLocationSharp>
            {location}
          </p>
          <p className="flex gap-1 items-center">
            Size: {area} <BsBoundingBoxCircles></BsBoundingBoxCircles>
          </p>
          <div className="card-actions justify-end">
            <Link
              to={`/property/${estate_title.replace(" ", "-")}/${id}`}
              className="btn btn-success"
            >
              View Property
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Estate;

Estate.propTypes = {
  data: PropTypes.object.isRequired,
};
