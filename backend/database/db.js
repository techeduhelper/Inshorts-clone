import mongoose from "mongoose";


const Connection = async ()=>{
    const URL = `mongodb+srv://uccmaniruddinkhan:uccmaniruddinkhan@inshorts-clone.vgwb16o.mongodb.net/?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log(`Connected to succesfully`);
    }catch(error){
        console.log(error);
    }
}


export default Connection;