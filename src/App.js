import React from "react"; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 

import NewsPage from "./pages/home/news_page";
import NewsDetail from "./pages/details/news_detail";
import "./app.css";

function App() {
  return ( 
  <React.Fragment>
    
    <Router>
      <Routes>
        <Route exact path="/" element={<NewsPage key="home" />} />
        <Route exact path="/world" element={<NewsPage key="world" name="Thế giới" category_id="149"/>}/>
        <Route exact path="/cine" element={<NewsPage key="cine" name="Phim" category_id="2"/>}/>
        <Route exact path="/health" element={<NewsPage key="health" name="Sức khỏe" category_id="79"/>}/> 
        <Route exact path="/detail/:slug" element={<NewsDetail key="detail"/>}/> 
      </Routes>
    </Router>
  </React.Fragment>

  );
}

export default App;
