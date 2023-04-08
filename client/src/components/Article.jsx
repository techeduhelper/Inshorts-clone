import React from 'react';
import { useEffect, useState } from 'react';
import {Box, styled} from '@mui/material';
import { getNews } from '../service/api';
import Datacontainer from './Datacontainer';



const ConBox =styled(Box)`
    margin: 15px 20% 0 20%;
`
const Article = () => {


  const [news, setNews] = useState([]);

  useEffect(() => {
      dailyNews();
  },[]);


  const dailyNews = async () =>{
    let response = await getNews();
    setNews(response.data);
  }

  return (
    <ConBox>
        {
          news.map(data => (
              <Datacontainer data ={data}/>
          ))
        }
    </ConBox>
  )
}

export default Article;