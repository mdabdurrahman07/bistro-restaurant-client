import PopularMenuCard from "./PopularMenuCard";

const PopularMenu = () => {
    return (
        <div>
             <div className="mt-16">
            <h1 className="text-xl font-normal text-[#D99904] text-center my-3">---Check it out---</h1>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] "></div>
            </div>
            <p className="text-4xl font-normal text-center my-5">FROM OUR MENU</p>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] mb-14"></div>
            </div>
        </div>
        <PopularMenuCard></PopularMenuCard>
            <div className="flex justify-center mt-12">
                <button className="btn  btn-wide border-0 border-b-4 border-[#1F2937] text-xl font-medium text-[#1F2937]">View Full  Menu</button>
                </div>
        </div>
    );
};

export default PopularMenu;