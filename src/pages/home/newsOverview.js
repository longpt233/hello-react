import React from "react";

function NewsOverview({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      {/* <div dangerouslySetInnerHTML={{__html:data.content}} /> */}
      <span className="news__published">{data.created_at}</span> 
    </div>
  );
}

export default NewsOverview;
