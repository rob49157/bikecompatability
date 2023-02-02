const router = require('express').Router();
const { BottomBracket, Brakeset} = require('./models')

//GET ONE BB 

// router.get("/brake", async (req,res) =>{
//     try{
//         const dbbrakedata= await Brakeset.findall({
//             include:[
//                 {
//                     model:Brakeset,
//                     attributes:['name', 'model', 'price']
//                 }
//             ]
//         })
//     }catch(err){
//         console.log("fasfsad")
//         res.status(500).json(err)
//     }
// }
// )