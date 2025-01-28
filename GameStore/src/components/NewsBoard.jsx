import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY
      }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);
  return (
    <div>
      <h2 className="text-center">
        <span className="badge bg-danger fs-5">Latest News</span>
      </h2>
      <div className="d-flex gap-3 flex-row flex-wrap justify-content-center">
        {articles.map((news, index) => {
          return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}
      </div>

    </div>
  );
};

export default NewsBoard;
