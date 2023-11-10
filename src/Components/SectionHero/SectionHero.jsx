/* eslint-disable react/prop-types */
import {  Parallax } from 'react-parallax';

const SectionHero = ({Title , bgIMG , Desc , }) => {
   
   
    return (
        
          <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={bgIMG}
        bgImageAlt="the menu"
        strength={-200}
>

           <div className='p-40 h-[700px]'>
           <div className="bg-[#15151599] opacity-95  p-20 w-3/4 mx-auto">
                <h1 className="text-5xl font-normal text-center text-white uppercase">{Title}</h1>
                <p className='text-base font-normal text-white text-center mt-3'>{Desc}</p>
            </div>
           </div>
        
</Parallax>
        
    );
};

export default SectionHero;

