import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <Banner />

      <h2 className="font-bold text-[40px] text-center">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="flex">
        <Categories categories={categories} />

        <Outlet />
      </div>
    </div>
  );
};

export default Home;
