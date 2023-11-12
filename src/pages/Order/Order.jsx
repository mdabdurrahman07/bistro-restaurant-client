import { useState } from 'react';
import SectionHero from '../../Components/SectionHero/SectionHero';
import orderImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../Hooks/UseMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad' , 'pizza' , 'soup' , 'dessert' , 'drinks' ]
    const {category} = useParams()
    const initialIndex = categories.indexOf(category.toLowerCase())
    const [index , setindex] = useState(initialIndex)
    const [Menu] = UseMenu()
    const drinks = Menu.filter(items => items.category === 'drinks')
    const desserts = Menu.filter(items => items.category === 'dessert')
    const pizza = Menu.filter(items => items.category === 'pizza')
    const salad = Menu.filter(items => items.category === 'salad')
    const soup = Menu.filter(items => items.category === 'soup')
    

    return (
        <div>
            <SectionHero bgIMG={orderImg} Title='OUR SHOP' Desc='Would you like to try a dish?'></SectionHero>
            <Tabs defaultIndex={index} onSelect={(index) => setindex(index)}>
                <TabList>
                    <Tab >SALAD</Tab>
                    <Tab >PIZZA</Tab>
                    <Tab >SOUP</Tab>
                    <Tab >DESSERT</Tab>
                    <Tab >DRINKS</Tab>
                
                </TabList>
                <TabPanel><OrderTab values={salad}></OrderTab></TabPanel>
                <TabPanel><OrderTab values={pizza}></OrderTab></TabPanel>
                <TabPanel><OrderTab values={soup}></OrderTab></TabPanel>
                <TabPanel><OrderTab values={desserts}></OrderTab></TabPanel>
                <TabPanel><OrderTab values={drinks}></OrderTab></TabPanel>
                
                </Tabs>
        </div>
    );
};

export default Order;