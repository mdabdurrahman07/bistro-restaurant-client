import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";


const Home = () => {
    return (
        <div>
          <Banner/>  
          <Category></Category>
          <PromoBanner></PromoBanner>
          <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;