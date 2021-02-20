import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isSending, setIsSending] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    setIsSending(true);
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
    fetch(`http://localhost:8000/blogs`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog)
    })
      .then((res) => {
        console.log({ res });
        setIsSending(false);
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        setIsSending(false);
        // history.go(-1);
        history.push("/");
      });
  };
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Blog Title: <strong>{title}</strong>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog Body: {body}</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <label>Blog Author: {author} </label>
        <select
          name=""
          id=""
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="peach">peach</option>
          <option value="luigi">luigi</option>
          <option value="bowser">bowser</option>
        </select>
        {!isSending && <button>Add Blog</button>}
      </form>
      {isSending && (
        <div
          style={{
            padding: "10px 20px",
            backgroundColor: "#f1356d",
            color: "white"
          }}
        >
          Sending Blog post
        </div>
      )}
    </div>
  );
};

export default Create;
