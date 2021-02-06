import React from "react";
import MemeList from "./components/MemeList";
import PostMeme from "./components/PostMeme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdateMeme from "./components/UpdateMeme";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/" component={MemeList} />
        <Route exact path="/" component={PostMeme} />
        <Route exact path="/update" component={UpdateMeme} /> */}
      </Router>
    </div>
  );
}

export default App;
