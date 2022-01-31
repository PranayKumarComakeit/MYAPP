const express = require('express');
const Razorpay=require('razorpay');
const shortid=require('shortid');
const cors=require('cors');
const app = express()
const port = 3000
app.use(express.json())
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const razorpay=new Razorpay({
    key_id:'rzp_test_APOswlZCQxJr3W',
    key_secret:'qT7c4qE0tWLzxdApf9Wr5tkC'
})
app.use(cors);
app.post('/razorpay', async(req, res)=>{
 const payment_capture=1
 const amount=500
 const currency ='INR';
 const options={
    amount:amount*100,
    currency,
    receipt: shortid.generate(), 
    payment_capture
}
const response = await razorpay.orders.create(options);
res.json({
    id:response.id,
    currency:'INR',
    amount:response.amount
});
})
module.exports = app ;