import { useEffect, useState } from "react";

const PopularMenuCard = () => {
   
    const [Menu  ,setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenu(data))
    },[])
    // console.log(Menu)
    return (
        <div>
            <div className="grid md:grid-cols-2 justify-center gap-7 items-center">
                {
                 Menu.slice(0,6).map(items => <div className="flex justify-center gap-5 items-center"  key={items._id}>
                        <img style={{borderRadius : '0 200px 200px 200px'}} className="w-[118px] h-[104px]" src={items.image} alt="" />
                        <div>
                            <h1 className="text-xl font-normal">{items.name}</h1>
                            <p className="text-[#737373] text-base font-normal">{items.recipe}</p>
                        </div>
                        <p className="text-[#BB8506] text-xl font-normal">${items.price}</p>
                 </div>)
                }
               
            </div>
        </div>
    );
};

export default PopularMenuCard;