import React from "react";
import { Link } from "react-router-dom";

function NewsItem({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1> 
      <span className="news__published">{data.created_at}</span> 
      <Link className="nav-link" to={`/detail/${data.article_id}`} >
					Read More
			</Link>
    </div>
  );
}

export default NewsItem;
