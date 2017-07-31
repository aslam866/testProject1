const express   = require("express"),
    mongoose    = require("mongoose"),
      router    = express.Router(),
      Person    = require("../models/Person");
mongoose.Promise=global.Promise;


router.post("/",function(req,res){
    const savePerson=new Person(req.body);
    savePerson.save().then(()=>{
        res.status(200).send("data inserted");
    }).catch((err)=>{
        res.send(err);
    })

})

router.get("/",function(req,res){
     Person.find({}).then((users)=>{
         res.json(users)
     }).catch((err)=>{
         res.send(err);
     })
})
router.delete("/:id",function(req,res){
    const id=req.params.id;
    Person.remove({_id:mongoose.Types.ObjectId(id)}).then(()=>{
        res.status(200).send("data deleted");
    }).catch(()=>{
        res.send(err);
    })

})
router.put("/:id",function(req,res){
    const id=req.params.id;
    Person.findByIdAndUpdate(id,req.body,
    {
        new:true
    }
    ).then(()=>{
           res.status(200).send("Person details  updated");
       }).catch((err)=>{
            res.send(err);
       })
    });





module.exports=router;