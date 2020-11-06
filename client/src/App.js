import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";
import Book from "./pages/Book/Book";
import NotFound from "./pages/NotFound/NotFound";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Saved} />
          <Route exact path="/book/bookId" component={Book} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
