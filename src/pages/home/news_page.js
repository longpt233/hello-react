import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import NewsItem from "./news_item";
import NavBar from "../../components/navbar";

const NewsPage = (props) => { 

  const [articles, setArticles] = useState([]);  

  const updateNews = async () => {
    const url = `http://localhost:8094/news/api/v1/articles?filter=category_entity_id.${props.category_id}&offset=1&limit=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.data.articles); 
  }

  useEffect(() => {
    updateNews();
  }, [])
 
  return (
    <>
      <NavBar></NavBar>
      <h1
        className="text-center"
        style={{
          margin: "90px 0 20px 0", 
        }}
      >
        Tin tức {" "} {`${props.name}`}
      </h1>
 
      <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4">
                <NewsItem data={element}/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

NewsPage.defaultProps = { 
  pageSize: 6,
  category: "149", 
};
NewsPage.propTypes = { 
  pageSize: PropTypes.number,
  category: PropTypes.string, 
};

export default NewsPage;
