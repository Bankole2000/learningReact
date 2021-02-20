import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  const history = useHistory();
  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE"
    }).then((res) => {
      if (res.ok) {
        history.push("/");
      }
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading Blog Details...</div>}
      {error && <div>Couldn't fetch blog details..</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={() => history.go(-1)}>Go back</button>
          <button
            style={{
              backgroundColor: "#f1356d",
              color: "white",
              border: 0,
              padding: "8px",
              borderRadius: "8px",
              cursor: "pointer",
              margin: "10px 10px"
            }}
            onClick={() => handleDelete(blog.id)}
          >
            Delete blog post
          </button>
        </article>
      )}
      {/* <h2>Blog Details {id}</h2> */}
    </div>
  );
};

export default BlogDetails;
