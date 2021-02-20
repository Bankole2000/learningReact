import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:8000/blogs/"
  );
  const title = "Welcome to the new Blog";

  // let name = 'Mario'
  // const [blogs, setBlogs] = useState(
  //   null
  //   //   [
  //   //   {
  //   //     title: "My new website",
  //   //     body: "lorem ipsum....",
  //   //     author: "mario",
  //   //     id: 1
  //   //   },
  //   //   { title: "Another post", body: "lorem ipsum....", author: "luigi", id: 2 },
  //   //   { title: "Just a title", body: "lorem ipsum....", author: "peach", id: 3 },
  //   //   { title: "Something", body: "lorem ipsum....", author: "toad", id: 4 }
  //   // ]
  // );

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);
  const [name, setName] = useState("Mario");

  const [age, setAge] = useState(25);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch(`http://localhost:8000/blogs`)
  //       .then((res) => {
  //         console.log({ res });
  //         if (!res.ok) {
  //           throw Error("Could not Fetch data");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setBlogs(data);
  //         setIsPending(false);
  //         setError(null);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //         setError(err.message);
  //         setIsPending(false);
  //       });
  //   }, 2000);

  //   console.log("useEffect Ran");
  //   console.log({ name, age });
  // }, [name, age]);

  const handleClick = (e) => {
    console.log("Hello Ninjas", e);
  };

  const handleClickAgain = (name, e) => {
    console.log(`Hello ${name}`, e.target);
  };

  const changeName = () => {
    setName("Luigi");
    setAge(30);
  };

  return (
    <div className="home">
      <h1>{title}</h1>
      {/* <h1>
        {name} is {age} years old
      </h1>
      <button
        onClick={() =>
          name == "mario" ? setName("Princess") : setName("mario")
        }
      >
        Change Name
      </button>
      <button onClick={() => setAge(age + 1)}>Age+</button>
      <button onClick={() => setAge(age - 1)}>Age-</button>
      <h1>Homepage</h1> */}
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          // handleDelete={handleDelete}
        />
      )}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "mario")}
          title="Mario's Blogs!"
        />
      )}
      {/* {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
        </div>
      ))} */}
      {/* <p>
        {name} is {age} years old
      </p>
      <button onClick={changeName}>Change Name</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) => handleClickAgain("Mario", e)}>
        Click Me Again
      </button> */}
    </div>
  );
};

export default Home;
