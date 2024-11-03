import Banner from "../components/Banner";
import Categories from "../components/Categories";

const Home = () => {
    return (
        <div>
            <Banner/>

            <h2 className="font-bold text-[40px] text-center">Explore Cutting-Edge Gadgets</h2>

            <Categories/>

            
        </div>
    );
};

export default Home;