import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <Banner />

      <h2 className="font-bold text-[40px] text-center mb-11">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Categories categories={categories} />

        <Outlet />
      </div>
    </div>
  );
};

export default Home;
