
import news from "../model/newsSchema.js"


export const getNews = async (request , response ) =>{
    try {
       let dataFrontend = await news.find({});
       response.status(200).json(dataFrontend);
    } catch (error) {
        response.status(500).json({message: dataFrontend.message});
    }
}