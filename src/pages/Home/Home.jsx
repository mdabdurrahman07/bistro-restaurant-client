import Banner from "../../Components/Banner/Banner";
import CallUs from "../../Components/CallUs/CallUs";
import Category from "../../Components/Category/Category";
import ChefRecommends from "../../Components/ChefRecommends/ChefRecommends";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";


const Home = () => {
    return (
        <div>
          <Banner/>  
          <Category></Category>
          <PromoBanner></PromoBanner>
          <PopularMenu></PopularMenu>
          <CallUs></CallUs>
          <ChefRecommends></ChefRecommends>
        </div>
    );
};

export default Home;