const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/Users",{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() =>{
    console.log("Connection  is sucessful"); 
}).catch((e) =>{
    console.log("No connection"); 
    console.log(e); 
});

