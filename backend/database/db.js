import mongoose from "mongoose";


const Connection = async (URL)=>{
    try{
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log(`Connected to succesfully`);
    }catch(error){
        console.log(error);
    }
}


export default Connection;