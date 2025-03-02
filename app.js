const express=require('express')


const app=express();

const port=5001;
 
app.get('/',(res,req)=>{
    req.send("Hello world--For CICD");
})

app.listen(port,()=>{
    console.log("NodeJS UP and Running on 5001")
})