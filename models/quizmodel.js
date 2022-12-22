const mongoose=require("mongoose")

const quizschema=new mongoose.Schema({
    category:{type:String},
    type:{type:String},
    difficulty:{type:String},
    question:{type:String},
    correct_answer:{type:String},
    incorrect_answers:{type:Object}  
})

const quizmodel=mongoose.model("quizdata",quizschema)

module.exports=quizmodel