/* eslint-disable react/prop-types */
import {  Parallax } from 'react-parallax';

const SectionHero = ({Title , bgIMG , Desc}) => {
    
   
    return (
        
          <Parallax
        blur={{ min: -60, max: 75 }}
        bgImage={(bgIMG)}
        bgImageAlt="the menu"
        strength={-200}
>

           <div className='p-32'>
           <div className="bg-black opacity-60 p-20 w-3/4 mx-auto">
                <h1 className="text-5xl font-normal text-center text-white uppercase">{Title}</h1>
                <p className='text-base font-normal text-white text-center mt-3'>{Desc}</p>
            </div>
           </div>
        
</Parallax>
        
    );
};

export default SectionHero;

