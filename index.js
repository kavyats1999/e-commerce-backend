require('dotenv').config()

require('./DB/connection')


const express=require('express')

const router=require('./Routes/router')


const cors=require('cors')


// create server

const dropCartserver=express()

dropCartserver.use(cors())

dropCartserver.use(express.json())

dropCartserver.use(router)

const PORT=3000||process.env.PORT

dropCartserver.listen(PORT,()=>{
    console.log(`dropcart server listening at port ${PORT}`);
})

dropCartserver.get('/',(req,res)=>{
    res.status(200).send('<h1>dropcart server connected successfully waiting for request</h1>')
})