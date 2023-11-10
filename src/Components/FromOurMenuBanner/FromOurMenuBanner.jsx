import featuredImg from "../../assets/home/featured.jpg"
import "./featured.css"
const FromOurMenuBanner = () => {
    return (
        <div className="featuredBg py-20 bg-fixed">
            <div className="mt-16">
            <h1 className="text-xl font-normal text-[#D99904] text-center my-3 uppercase">---Check it out---</h1>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] "></div>
            </div>
            <p className="text-4xl font-normal text-center my-5">FROM OUR MENU</p>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] mb-14"></div>
            </div>
        </div>

        <section className="flex-row md:flex justify-center items-center  gap-3 mb-12 bg-slate-500 opacity-80">
            <div>
                <img className="w-[500px] h-[280px]" src={featuredImg} alt="" />
            </div>
            <div>
                
                <p className="text-white" ><span className='text-xl'>March 20, 2023</span> <br />
                      <span className='text-xl'>  WHERE CAN I GET SOME?</span> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error <br />
            voluptate facere, deserunt dolores maiores quod nobis quas <br />
                quasi. Eaque repellat recusandae ad laudantium tempore <br />
                consequatur consequuntur omnis ullam maxime tenetur.</p>
            </div>
        </section>
        </div>
    );
};

export default FromOurMenuBanner;