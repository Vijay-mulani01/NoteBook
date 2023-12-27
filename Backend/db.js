const mongoose = require('mongoose');

const url='mongodb://127.0.0.1/notebook';
const connectToMongo=()=>{
    const success=mongoose.connect(url);
    if (success){
        console.log("connected to MongoDB");
    }
}
module.exports=connectToMongo;