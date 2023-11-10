import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"

const Category = () => {
    return (
      <>
        <div className="mt-16">
            <h1 className="text-xl font-normal text-[#D99904] text-center my-3">---From 11:00am to 10:00pm---</h1>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] "></div>
            </div>
            <p className="text-4xl font-normal text-center my-5">ORDER ONLINE</p>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] "></div>
            </div>
        </div>
        {/* swiper js */}
        
        <div className='mt-12'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />  
          <p className='text-4xl text-white font-medium  -mt-20 uppercase'>Salad</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />  
        <p className='text-4xl text-white font-medium  -mt-20 uppercase'>pizza</p>
         </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" /> 
        <p className='text-4xl text-white font-medium  -mt-20 uppercase'>Soup</p> 
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />  
        <p className='text-4xl text-white font-medium  -mt-20 uppercase'>Cake</p> 
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />  
        <p className='text-4xl text-white font-medium   uppercase'>Salad</p> 
        </SwiperSlide>
      </Swiper>
        </div>
        
        </>
    );
};

export default Category;