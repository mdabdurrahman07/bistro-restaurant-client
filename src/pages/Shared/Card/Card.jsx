/* eslint-disable react/prop-types */
const Card = ({item}) => {

  const   {image ,  name ,  recipe } = item
    return (
        
            <div className="card w-96 bg-[#F3F3F3] shadow-xl">
                <figure>
                  <img src={image} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{name}</h2>
                  <p>{recipe}</p>
                  <div className="card-actions">
                    <button className="uppercase  text-[#BB8506] border-0 border-b-2
                     border-[#BB8506] px-6 py-3 rounded-lg bg-[#E8E8E8] hover:bg-[#1F2937] active:bg-[#1F2937] focus:outline-none focus:ring focus:bg-[#1F2937]">add to cart</button>
                  </div>
                </div>
              </div>
        
    );
};

export default Card;