import { Helmet } from 'react-helmet-async';
import SectionHero from '../../Components/SectionHero/SectionHero';
import MenuCover from '../../assets/menu/menu-bg.png'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bitsro Resturant | Menu</title>
            </Helmet>
            <SectionHero bgIMG={MenuCover} Title={'OUR MENU'} Desc={'Would you like to try a dish?'}>

            </SectionHero>
        </div>
    );
};

export default Menu;