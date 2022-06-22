import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [blogs, setBlogs] = useState([]);

  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/blogs").then((response) => {
      setBlogs(response.data);
    });
  }, []);

  const onCreateClick = () => {
    axios
      .post("http://localhost:3000/blogs", {
        author,
        content,
        title,
        createdAt: new Date().toISOString(),
      })
      .then((response) => {
        setBlogs([...blogs, response.data]);
      });
  };
  return (
    <div style={{ padding: 50 }}>
      <div style={{ display: "flex" }}>
        <input
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
          placeholder="author"
        />
        <textarea
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
          placeholder="content"
        />
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="title"
        />
        <button onClick={onCreateClick}>Create</button>
      </div>
      {blogs.map((blog) => (
        <div>
          <h5>{blog.author}</h5>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
