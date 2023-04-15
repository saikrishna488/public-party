const express =require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
})
app.get('/*',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
})

app.listen(port,()=> console.log("server has been started on port "+port));