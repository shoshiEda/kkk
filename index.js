const express = require('express')



const app = express()

//app.get('/',(req,res)=> shopService.getShopData().then((data) => res.send(data)))

//app.get('/puki',(req,res)=> res.send('<h1>Hello Puki</h1>'))


//shopService.getShopData().then((data) => console.log(data))

const port = 8000
app.listen(port, () => 
    console.log(`Server listening on port http://127.0.0.1:${port}/`))