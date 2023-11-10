/* eslint-disable react/no-unescaped-entities */
import { Helmet } from 'react-helmet-async';
import SectionHero from '../../Components/SectionHero/SectionHero';
import MenuCover from '../../assets/menu/banner3.jpg'
import Dessert from '../../assets/menu/dessert-bg.jpeg'
import Pizza from '../../assets/menu/pizza-bg.jpg'
import Salad from '../../assets/menu/salad-bg.jpg'
import Soup from '../../assets/menu/soup-bg.jpg'
import MenuCategory from './MenuCategory';
import UseMenu from '../../Hooks/UseMenu';

const Menu = () => {
    const [Menu] = UseMenu()
    const offer = Menu.filter(items => items.category === 'offered')
    const desserts = Menu.filter(items => items.category === 'dessert')
    const pizza = Menu.filter(items => items.category === 'pizza')
    const salad = Menu.filter(items => items.category === 'salad')
    const soup = Menu.filter(items => items.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Bitsro Resturant | Menu</title>
            </Helmet>
            <SectionHero bgIMG={MenuCover} Title='OUR MENU' Desc='Would you like to try a dish?'>

            </SectionHero>

            {/* offer section */}
            <div className="mt-16">
            <h1 className="text-xl font-normal text-[#D99904] text-center my-3">---Don't miss---</h1>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] "></div>
            </div>
            <p className="text-4xl font-normal text-center my-5">TODAY'S OFFER</p>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] mb-14"></div>
            </div>

          
          
            <MenuCategory values={offer}></MenuCategory>
              </div>
          {/* offer section */}

          
            {/* dessert section */}
            <MenuCategory values={desserts} Title='DESSERTS' Desc='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' bgIMG={Dessert}></MenuCategory>
          {/* dessert section */}

            {/* pizza section */}
            <MenuCategory values={pizza} Title='PIZZA' Desc='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' bgIMG={Pizza}></MenuCategory>
          {/* pizza section */}


           {/* Salad section */}
           <MenuCategory values={salad} Title='SALAD' Desc='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' bgIMG={Salad}></MenuCategory>
          {/* Salad section */}

          {/* Salad section */}
          <MenuCategory values={soup} Title='SOUP' Desc='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' bgIMG={Soup}></MenuCategory>
          {/* Salad section */}
        </div>
    );
};

export default Menu;