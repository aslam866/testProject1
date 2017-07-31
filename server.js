const express    = require("express"),
      bodyParser = require("body-parser"),
      path       = require("path");
      personApi        = require("./server/routes/personApi"),
      port       = 3000 || process.env.port,
      app        = express(),
     mongoose    =require("mongoose");
mongoose.connect('mongodb://localhost:27017/aslamMeanApp');

app.use(express.static(path.join(__dirname,"client")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/api/persons",personApi);
app.get("",(req,res)=>{
    res.sendFile(path.join(__dirname,'src/index.html'));
});

app.listen(port,function(){
    console.log("Server running on localhost"+port);
})

