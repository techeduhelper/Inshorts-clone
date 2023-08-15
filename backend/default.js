import data from './constants/data.js';
import news from './model/newsSchema.js';



const DefaultData = async () =>{
    try{
       await news.insertMany(data);
       console.log('data successfully imported')
    }catch(error){
        console.log(error);
    }
}

export default DefaultData;