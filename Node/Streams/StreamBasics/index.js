const express = require("express")
const fs = require("fs")
const app = express()
const status =  require("express-status-monitor")

const PORT = 3000


app.use(status())

app.get("/getTextData",(req,res)=>{

    try {

        fs.readFile("./sample.txt",(err,data)=>{
            res.end(data);
        
        })        
    } catch (error) {
        console.log("Encountoured the error",error);
    }





})

app.get("/getTextStream",(req,res)=>{
    const stream = fs.ReadStream("./sample.txt","utf-8")
    // stream.on('data',(chunk)=>res.write(chunk))
    // stream.on('end',()=>res.end())
    stream.pipe(res);
})

app.listen(PORT,()=>{
    console.log(`The application has started on port ${PORT}`);

})