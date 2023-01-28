import React, { useContext } from "react"; 
import NewsOverview from "./newsOverview";
import Navbar from "../../components/header";
import Footer from "../../components/footer";

function News(props) {
  const { data } = []; 
 

  return (
    <div>
      <div>
        <Navbar/>
      </div>

      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsOverview data={news} key={news.article_id} />
            ))
          : "Loading"}
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  );
}

export default News;
