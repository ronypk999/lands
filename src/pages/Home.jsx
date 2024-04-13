import { useLoaderData } from "react-router-dom";
import Slider from "../components/home/Slider";
import Estate from "../components/estate/Estate";
import NotifyLogin from "../notify/NotifyLogin";
import { Helmet } from "react-helmet";
const Home = () => {
  const data = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <NotifyLogin></NotifyLogin>
      <Slider></Slider>
      <div className="px-3 md:px-6 lg:px-12">
        <h1 className="text-4xl font-bold py-6 text-center">
          Buy or Rent land
        </h1>
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
