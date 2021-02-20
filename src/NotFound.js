import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="Not Found">
      <h2>Sorry</h2>
      <p>This page does not exist</p>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default NotFound;
