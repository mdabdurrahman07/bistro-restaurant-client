import { useEffect, useState } from "react";

const ChefRecommends = () => {
    const [Menu  ,setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenu(data))
    },[])
    return (
        <div>
            <div className="mt-16">
            <h1 className="text-xl font-normal text-[#D99904] text-center my-3">---Should Try---</h1>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] "></div>
            </div>
            <p className="text-4xl font-normal text-center my-5">CHEF RECOMMENDS</p>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] mb-14"></div>
            </div>
        </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center mb-10">
            {
                Menu.slice(0,3).map(foods => <div key={foods._id} className="card w-96 bg-[#F3F3F3] shadow-xl">
                <figure>
                  <img src={foods.image} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{foods.name}</h2>
                  <p>{foods.recipe}</p>
                  <div className="card-actions">
                    <button className="uppercase  text-[#BB8506] border-0 border-b-2
                     border-[#BB8506] px-6 py-3 rounded-lg bg-[#E8E8E8] hover:bg-[#1F2937] active:bg-[#1F2937] focus:outline-none focus:ring focus:bg-[#1F2937]">add to cart</button>
                  </div>
                </div>
              </div>)
            }
        </div>
            
        
        </div>
    );
};

export default ChefRecommends;