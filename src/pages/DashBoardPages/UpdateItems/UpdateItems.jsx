import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form"
import { ImSpoonKnife } from "react-icons/im";
import UseAxiosPublic from '../../../Hooks/UseAxiosPublic'
import UseAxios from '../../../Hooks/UseAxios'
import Swal from "sweetalert2";

const UpdateItems = () => {
    const items = useLoaderData()
    
    const {name , recipe , price  , category , _id} = items
    const img_hoisting_key  = import.meta.env.VITE_IMG_UPLOAD_TOKEN
    const img_hoisting_api = `https://api.imgbb.com/1/upload?key=${img_hoisting_key}`
    const PublicAxios = UseAxiosPublic()
    const AxiosSecure = UseAxios()
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const imgFile = {image : data?.image[0]}
        const res = await PublicAxios.post(img_hoisting_api  , imgFile , {
            headers : {
               "content-type" : "multipart/form-data"    
            }
        })
        if(res.data?.success){
            const MenuItems = {

                name : data?.name,
                recipe : data?.recipe,
                image : res.data?.data?.display_url,
                category : data?.category,
                price : parseFloat(data?.price)
            }
            const MenuRes = await  AxiosSecure.patch(`menu/${_id}` , MenuItems)
            
            if(MenuRes.data.insertedId){
                // reset()
                Swal.fire({
                   
                    icon: "success",
                    title: "Item Updated Successfully",
                    showConfirmButton: false,
                    timer: 1000
                  });
            }
        }

        // console.log(res.data)
    }
    
   

    
    return (
        <div>
            <div className="mt-16">
          
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] "></div>
            </div>
            <p className="text-4xl font-normal text-center my-5">Update Items</p>
            <div className="flex justify-center">
            <div className="w-96 h-[4px] bg-[#E8E8E8] mb-14"></div>
            </div>
        </div>

        {/* update table */}
        <div className="max-w-6xl mx-auto bg-gray-300 p-5 ">

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div 
        className="form-control w-full ">
            <label className="label">
                <span className="label-text text-xl text-[#444] font-semibold">Recipe name*</span>
               
            </label>
            <input {...register('name', {required : true})} defaultValue={name} type="text" placeholder="Recipe name" className="input input-bordered w-full " />
         
            </div>

            {/* dual inputs  */}

            <div className="flex gap-4">

                {/* category */}

            <div className="form-control w-full ">
            <label className="label">
                <span className="label-text text-xl text-[#444] font-semibold">Category*</span>
               
            </label>
            
            <select defaultValue={category} {...register('category' , {required : true})}
      className="select select-bordered w-full">
        <option disabled value="value">Category</option>
        <option value="salad">Salad</option>
        <option value="soup">Soup</option>
        <option value="drinks">Drinks</option>
        <option value="pizza">Pizza</option>
        <option value="desserts">Dessert</option>
      
        </select>
         
            </div>
            {/* price */}
            <div 
           
            className="form-control w-full ">
            <label className="label">
                <span className="label-text text-xl text-[#444] font-semibold">Price*</span>
               
            </label>
            <input  {...register('price' , {required : true})} defaultValue={price}  type="number" placeholder="Price" className="input input-bordered w-full " />
         
            </div>

            </div>
            {/* dual inputs */}

            <div 
           
            className="form-control w-full ">
            <label className="label">
                <span className="label-text text-xl text-[#444] font-semibold">Recipe Details*</span>
               
            </label>
            <textarea  {...register('recipe' , {required : true})} defaultValue={recipe}  placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
         
            </div>

            <input {...register('image' , {required : true})} type="file" className="py-5" />



         
             <button type="submit" className="flex justify-around items-center gap-2 bg-gradient-to-r from-[#835D23] to-[#B58130]
              text-white px-4 py-2 text-xl font-bold">Update Items <ImSpoonKnife></ImSpoonKnife></button>

                    
           
                 </form>

        </div>
        </div>
    );
};

export default UpdateItems;