import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { getNews } from "../service/api.js";
import Datacontainer from "./Datacontainer";

const ConBox = styled(Box)(({ theme }) => ({
  margin: "15px 20% 0 20%",
  [theme.breakpoints.down("md")]: {
    margin: "25px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    margin: "10px",
  },
}));
const Article = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    dailyNews();
  }, []);

  const dailyNews = async () => {
    try {
      let response = await getNews();
      setNews(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <ConBox>
      {news?.data?.map((data) => (
        <Datacontainer data={data} key={data.id} />
      ))}
    </ConBox>
  );
};

export default Article;
