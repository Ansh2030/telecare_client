import React from 'react'
import axios from "axios";//amount, name, email, phone


// function handleRedirect(paydone){
//     return(
//         <
//     )
// }

export async function handlepay(amount, name, email, phone){
   
    const amt = 200;
    const cy = "INR"
    const receiptId = "cdcdcdc"
    try{
        // const fetch = (await import('node-fetch')).default;
        const response = await axios.post("https://telecare-server.onrender.com/api/orders/order",{
            amount:amt,
            receipt: receiptId ,
            currency:cy
        });
          
        console.log(response.data.id);

        var options = {
            "key": process.env.REACT_key_id, // Enter the Key ID generated from the Dashboard
            "amount": amt, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": cy,
            "name": "Acme Corp", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": response.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": async function (response){
              const body = {...response,
            };

            console.log(body);
            const validRes = await axios.post("https://telecare-server.onrender.com/api/orders/validate",body)
                
console.log(validRes);
 return(validRes);
            },
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                "name": "name", //your customer's name
                "email": "email", 
                "contact": "252525255"  //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });

        rzp1.open();
        // e.preventDefault();
    }//closin the try block
    catch(e){
        console.log(e.message
            );
    }

}


function Payments() {
  return (
    <div>
      <button onClick={handlepay}>pay</button>
    </div>
  )
}

export default Payments
