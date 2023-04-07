import React, { useEffect } from 'react'
import getNews from '../service/api';

const Article = () => {

  useEffect = () => {
    useEffect(()=>{
      dailyNews();
    }, []);


    const dailyNews= async () =>{
      let response = await getNews();
    }


  return (
    <div>Article</div>
  )
}

export default Article;