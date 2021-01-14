import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import getArtist from "./Networking/FetchAPI";
import "./App.css";

const baseUrl = "https://rest.bandsintown.com";
const app_id = "000";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
