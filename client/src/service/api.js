import axios from 'axios';


async function getNews() {

    const URL = `http://localhost:8000/`;
    try {
      return await axios.get('${URL}/news');
    } catch (error) {
      console.log(error);
    }
  };
  