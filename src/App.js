import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  const likes = 50;
  const link = "https://google.com";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {/* <p>liked {likes} times</p>
          <p>{10}</p>
          <p>{"Hello, ninjas"}</p>
          <p>{[1, 2, 3, 4, 5]}</p>
          <p>{Math.random() * 10}</p>
          <a href={link}>Go to google</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
