import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to the new Blog";
  const likes = 50;
  const link = "https://google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <h1>{title}</h1>
        <p>liked {likes} times</p>
        <p>{10}</p>
        <p>{"Hello, ninjas"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Go to google</a>
      </div>
    </div>
  );
}

export default App;
