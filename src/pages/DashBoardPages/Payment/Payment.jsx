import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import UseCart from '../../../Hooks/UseCart';
const stripePromise = loadStripe(import.meta.env.VITE_GATEWAY_PAYMENT_KEY);

const Payment = () => {
  const [cart , refetch] = UseCart()
  const totalPrice = cart.reduce((total , item ) => total + item.price ,0)
  const price = parseInt(totalPrice.toFixed(2))
   
    return (
        <div>
            <div className="mt-16">
          
          <div className="flex justify-center">
          <div className="w-96 h-[4px] bg-[#E8E8E8] "></div>
          </div>
          <p className="text-4xl font-normal text-center my-5">Payment</p>
          <div className="flex justify-center">
          <div className="w-96 h-[4px] bg-[#E8E8E8] mb-14"></div>
          </div>
      </div>

      <div>
      <Elements stripe={stripePromise}>
      <div className='max-w-4xl mx-auto'>
      <CheckoutForm  cart={cart} refetch={refetch} price={price}></CheckoutForm>
      </div>
    </Elements>
      </div>
        </div>
    );
};

export default Payment;