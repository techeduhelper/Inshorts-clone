import news from "../model/newsSchema.js"


export const getNews = async (req, res) => {
    try {
        let dataFrontend = await news.find({});
        res.status(200).json({
            success: true,
            data: dataFrontend,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error fetching news" });
    }
}