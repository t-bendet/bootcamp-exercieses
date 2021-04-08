import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Demo from "./pages/Demo";
function App() {
  /**
   * useParams
   * useLocation
   * useHistory
   * useRouteMatch
   */
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/demo/:param">
            <Demo hello={"hello"} />
          </Route>
          <Route exact path="/" component={() => <Home hello={"hello"} />} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/:first/:last" component={User} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
