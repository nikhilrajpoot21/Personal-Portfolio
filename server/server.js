const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')

app.use(cors({
    origin : 'http://localhost:3000'
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.post('/api/contact',(req,res)=>{
    const { name, email, message } = req.body;
  console.log('Form submitted:', { name, email, message });

if(!name || !email || !message){
    res.status(300).json({sucess:false , message: 'Oops!! Please fill in all required fields.'})
}else{
  // You can add validation or save to database here
  res.status(400).json({ success: true, message: 'Form received!' });
}
});

const Server_PORT = 8080;
app.listen(Server_PORT,()=>{
    console.log(`Server is running on http://localhost:${Server_PORT}`);
})
