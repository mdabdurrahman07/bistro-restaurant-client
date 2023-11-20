/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxios from '../../../Hooks/UseAxios'
import useAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types, no-unused-vars
const CheckoutForm = ({cart , price , refetch}) => {
  const {User} = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const [error , Seterror] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, settransactionId] = useState("");
    const AxiosSecure = UseAxios()


    useEffect(()=> {
      if(price > 0) {
        AxiosSecure.post('create-payment-intent' , {price} )
      .then(res => {
        // console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
      }
    },[AxiosSecure,price])
    const handleSubmit = async (event) => {
        event.preventDefault();

       
        // checking stripe and elements
        if (!stripe || !elements) {
         
            return;
          }
            // getting card 
          const card = elements.getElement(CardElement);

                if (card == null) {
                return;
                }

                const {error, paymentMethod} = await stripe.createPaymentMethod({
                    type: 'card',
                    card,
                });

                if(error){
                    console.log('error' , error)
                    Seterror(error.code)
                }
                else{
                    console.log('paymentMethod' , paymentMethod)
                    Seterror('')
                }

                const {paymentIntent , error : ConfirmError} = await stripe.confirmCardPayment(clientSecret , {
                  payment_method : {
                    card : card,
                    billing_details : {

                      name : User?.displayName || 'anonymous',
                      email : User?.email || 'anonymous'

                    }
                  }

                  
                })
                if(ConfirmError){
                  console.log(ConfirmError)
                }
                else{
                  console.log('payment intent ' , paymentIntent)
                  if(paymentIntent.status === "succeeded"){
                    console.log('transaction Id ' , paymentIntent.id)
                    settransactionId(paymentIntent.id)

                    // now save the payment details in the dataBase
                    const payment = {
                      email : User?.email,
                      transactionId : paymentIntent.id,
                      price : price,
                      date  : new Date(),
                      cartId : cart.map(item => item?._id),
                      foodId : cart.map(item => item?.foodID),
                      status : 'pending'
                    }

               const res = await  AxiosSecure.post('payments' , payment)
               console.log('payments result' , res)
               refetch()
               if(res.data?.paymentResult?.insertedId){

                               
                  Swal.fire({
                    icon: "success",
                    title: "Payment Successful",
                    showConfirmButton: false,
                    timer: 1000
                  });
               }
                  }
                }
    }
    return (
       <form onSubmit={handleSubmit}>
            <CardElement>
            options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      
     
            </CardElement>
            <button className="mt-5 bg-slate-700 text-white text-lg font-semibold px-6 py-2 rounded-lg"
             type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>

      <p className="mt-4 text-red-500 p-2">{error}</p>
      {transactionId &&  <p className="mt-4 text-emerald-500 p-2">{transactionId}</p> }
       </form>
    );
};

export default CheckoutForm;