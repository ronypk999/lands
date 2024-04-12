import { useLoaderData } from "react-router-dom";
import Slider from "../components/home/Slider";
import Estate from "../components/estate/Estate";
import NotifyLogin from "../notify/NotifyLogin";

const Home = () => {
  const data = useLoaderData();

  return (
    <>
      <NotifyLogin></NotifyLogin>
      <Slider></Slider>
      <div className="px-3 md:px-6 lg:px-12">
        <div className="flex justify-around gap-12 flex-wrap">
          {data.map((data) => {
            return <Estate key={data.id} data={data}></Estate>;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
