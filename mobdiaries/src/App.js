import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Projectpage from "./components/Pages/Projectpage"
import Eventpage from "./components/Pages/Eventpage"
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Eventpage}></Route>
        <Route  path="/project" component={Projectpage}></Route></Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
