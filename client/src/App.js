import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";
import Book from "./pages/Book/Book";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";

function App() {
  return (
      <Router>
      <div className="d-flex flex-column min-vh-100" >
        <Container>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/books" component={Saved} />
            <Route exact path="/book/bookId" component={Book} />
            <Route path="/" component={NotFound} />
          </Switch>
        </Container>
        <Footer />
        </div>
      </Router>
  );
}

export default App;
