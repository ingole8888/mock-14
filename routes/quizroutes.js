const express=require("express")
const quizroutes=express.Router()
const quiz=require("../data.json")
const quizmodel=require("../models/quizmodel")

quizroutes.get("/quiz",async(req,res)=>{
    
    try{
        const category=req.query.category;
        const difficulty=req.query.difficulty;
        const page=+(req.query.page) -1 || 0 
      
         let data=await quizmodel.find({category,difficulty}).skip(page * 1 ).limit(1)
            return res.send({message:"data",data})
    }
    catch(err){
        return res.send({"err":err})
    }
   
})

     
quizroutes.post("/quiz", async (req, res) => {
    try {
        const newQuiz = await quizmodel.create(req.body)
        return res.status(200).send({ message: 'Data added successfully', data: newQuiz })
    } catch (e) {
        return res.status(500).send("Internal server error")
    }
})
module.exports=quizroutes