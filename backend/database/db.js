import mongoose from "mongoose";


const Connection = async ()=>{
    const URL = `mongodb://uccmaniruddinkhan:uccmaniruddinkhan@ac-ly8vlhn-shard-00-00.vgwb16o.mongodb.net:27017,ac-ly8vlhn-shard-00-01.vgwb16o.mongodb.net:27017,ac-ly8vlhn-shard-00-02.vgwb16o.mongodb.net:27017/?ssl=true&replicaSet=atlas-fjx96q-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log(`Connected to succesfully`);
    }catch(error){
        console.log(error);
    }
}


export default Connection;