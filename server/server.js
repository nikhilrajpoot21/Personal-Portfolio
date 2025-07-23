const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/contact_form_details')
.then(console.log("MongoDB connected"))
.catch((err)=>console.log("MonngoDB Error", err))

app.use(cors({
    origin : 'http://localhost:3000'
}));
const userSchema = new mongoose.Schema({
    name:{
      type:String,
      required : true,
    },
    email:{
      type:String,
      required:true,
      unique : true,
    },
    message:{
      type:String,
      required:true,
    }
},
  {timestamps:true}
);

const user =  mongoose.model('user', userSchema);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.post('/api/contact',async (req,res)=>{
    const { name, email, message } = req.body;
  console.log('Form submitted:', { name, email, message });

  await user.create({
    name:name,
    email:email,
    message:message
  })

if(!name || !email || !message){
    res.status(300).json({sucess:false , message: 'Oops!! Please fill in all required fields.'});
}else{

  res.status(200).json({ success: true, message: 'All details received!' });
}
});

const Server_PORT = 8080;
app.listen(Server_PORT,()=>{
    console.log(`Server is running on http://localhost:${Server_PORT}`);
});
