import { Link } from "react-router-dom";
import SectionHero from "../../Components/SectionHero/SectionHero";

/* eslint-disable react/prop-types */
const MenuCategory = ({values , Title , bgIMG , Desc}) => {

    return (
        <div>

       { Title &&  <SectionHero bgIMG={bgIMG} Title={Title} Desc={Desc}> </SectionHero>}
            <div className="grid md:grid-cols-2 justify-center gap-7 items-center my-20">
                {
            
                 values.map(items => <div className="flex justify-center gap-5 items-center"  key={items._id}>
                        <img style={{borderRadius : '0 200px 200px 200px'}} className="w-[118px] h-[104px]" src={items.image} alt="" />
                        <div>
                            <h1 className="text-xl font-normal">{items.name}</h1>
                            <p className="text-[#737373] text-base font-normal">{items.recipe}</p>
                        </div>
                        <p className="text-[#BB8506] text-xl font-normal">${items.price}</p>
                 </div>)
                }
                 
            </div>
           <Link to={`/order/${Title}`}> <div className="flex justify-center my-12">
                <button className="btn  border-0 border-b-4 border-[#1F2937] text-xl font-medium text-[#1F2937]">
                    Order Your Favorite Food</button>
                </div></Link>
        </div>
    );
};

export default MenuCategory;