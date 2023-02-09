import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Moreaboutme from "./components/Moreaboutme";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Switch>
            <Route path="/home">
              <Home />
              <About />
              <Projects />
            </Route>
            <Route path="/about">
              <Moreaboutme />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
