const express = require('express')
const app = express()
const cors = require('cors')
const port=8080
const hostname="localhost"
app.use(cors())
app.get("/",(req,res)=>{
    console.log(req)
    res.send({
        data:"hello"
    })
})
app.listen(port,hostname, () => {
    console.log(`serve start on port:${port}`)
})
