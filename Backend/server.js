//cyjvpbEYcjPEQ3DJ
//user Vikas
import  express from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js'
import Users from "./Users.js";
import key from "./.KEY.js";
import cors from 'cors';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
//App Config
const app=express()
const port=process.env.PORT||8001
const uri = key;
//MiddleWares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
//DB config
mongoose.connect(uri).then(()=>{
    console.log(`connection success`)
}).catch((err)=> console.log(err))
//API Endpoints
app.get('/',(req,res)=>{
    res.status(200).send('Hello')
})
app.post('/user/register', async (req,res)=>{
    try{
       // console.log(req.body)
        const hashedPass=await bcrypt.hash(req.body.password,10)
        Users.create({
            email:req.body.email,
            password:hashedPass
        },(error,data)=>{
            if(error){
                res.status(500).send(error)
            }else{
                res.status(201).send(data)
            }
        })
    }
    catch{
     //   res.redirect('/register')
     res.status(500).send("error")
    }
})
app.post('/user/logged',async (req,res)=>{
    const user=await Users.findOne({
        email:req.body.email})
        if(user==null){
            return res.json({status:'Incorrect Email',user:false,message:'Incorrect Email'})
        }
            if(await bcrypt.compare(req.body.password,user.password)){
                const token=jwt.sign({
                    email:req.body.email
                },'secret124')
                return res.json({status:'ok',user:token})
            }else{
                return res.json({status:'Incorrect Password',user:false,message:'Incorrect Password'})
            }
         })
app.post('/tinder/card',(req,res)=>{
    const dbCard=req.body;
    Cards.create(dbCard,(error,data)=>{
        if(error){
            res.status(500).send(error)
        }else{
            res.status(201).send(data)
        }
    })
})
app.get('/tinder/card',(req,res)=>{
    Cards.find((error,data)=>{
        if(error){
            res.status(500).send(error)
        }else{
            res.status(200).send(data)
        }
    })
})
//Listener
app.listen(port,()=>{
    console.log(`listening on local host ${port}`)
})