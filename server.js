import express from "express";
import  sum  from "./sum.js";
const app = express();
const PORT= 3000;

app.get("/home", (req,res)=>{
    console.log("This is home ");
   res.json({message:"HI, i am root "});
});

app.get("/getSum/:a/:b",async(req, res)=>{
    const {a, b}= req.params;
   
    res.json({ans:sum(parseInt(a),parseInt(b))});

})

app.listen(PORT,()=>{
    console.log("app is listening on port 3000");
})