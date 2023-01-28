import React from "react"; 
import News from "./pages/home/newsPage";
import "./app.css";

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom"; 

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/app-news">
          <News/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
