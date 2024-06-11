const express=require('express')
const app=express()
const cors=require('cors')
const { json } = require('body-parser')

app.use(cors())

app.get("/test",(req,res)=>{
    console.log(req)
     res.send({
        code:"200",
        msg:"OK",
        data:"我收到了一条消息"
    })
})
app.listen(8088,()=>{
    console.log("server start success!")
})