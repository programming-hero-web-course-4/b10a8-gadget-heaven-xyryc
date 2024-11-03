import Banner from "../components/Banner";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Banner />

      <h2 className="font-bold text-[40px] text-center">
        Explore Cutting-Edge Gadgets
      </h2>

      <Categories />
    </div>
  );
};

export default Home;
