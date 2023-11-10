import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import CallUs from "../../Components/CallUs/CallUs";
import Category from "../../Components/Category/Category";
import ChefRecommends from "../../Components/ChefRecommends/ChefRecommends";
import FromOurMenuBanner from "../../Components/FromOurMenuBanner/FromOurMenuBanner";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";


const Home = () => {
    return (
        <div>
           <Helmet>
                <title>Bitsro Resturant | Home</title>
            </Helmet>
          <Banner/>  
          <Category></Category>
          <PromoBanner></PromoBanner>
          <PopularMenu></PopularMenu>
          <CallUs></CallUs>
          <ChefRecommends></ChefRecommends>
          <FromOurMenuBanner></FromOurMenuBanner>
        </div>
    );
};

export default Home;