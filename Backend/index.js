const express=require("express");
const cors=require("cors");
const axios=require("axios");

const app=express();
app.use(express.json());
app.use(cors({origin:true}));


app.post("/authenticate",async(req,res)=>{
    const {username}=req.body;
    try{
        const r=await axios.put("https://api.chatengine.io/users/",
            {username:username,secret:username,first_name:username},
            {headers:{"private-key":"dc52f94e-7030-4bd6-aff2-99c933736a64"}}
        );
        return res.status(r.status).json(r.data)
    }
    catch(e){
        return res.status(500).json({"message":e})
    }
});
app.listen(3001,()=>console.log("server listening on port : 3001"));