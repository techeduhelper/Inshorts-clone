import axios from 'axios';


export const getNews = async ()  =>{

  const URL ='http://localhost:8000';
  try {
    return await axios.get(`${URL}/news`);
  } catch (error) {
    console.log('while error is come print error', error)
  }
} 