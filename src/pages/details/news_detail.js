import React, { useEffect, useState } from "react";

function NewsDetail() {

    const [articles, setArticles] = useState([]);  

    const getNews = async () => {

      let arr = window.location.href.split('/')
      const id = arr[arr.length - 1]

      const url = `http://localhost:8094/news/api/v1/articles?filter=id.${id}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.data.articles[0]); 

    }
  
    useEffect(() => {
        getNews();
    }, [])

    return (
        <div className="news">
        <h1 className="news__title">{articles.title}</h1> 
        <span className="news__published">{articles.created_at}</span> 
        <div dangerouslySetInnerHTML={{__html:articles.content}} />
        </div>
    );
}

export default NewsDetail;
