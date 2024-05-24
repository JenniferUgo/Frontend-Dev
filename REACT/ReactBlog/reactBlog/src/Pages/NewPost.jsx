import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsUploading(true);

    const entry = { title, content, author };

    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    }).then(() => {
      setIsUploading(false);
      navigate("/");
    });
  };

  return (
    <div className="Create">
      <h2>Add New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Post Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Post Content</label>
        <textarea
          type="text"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <label>Author</label>
        <select
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="">select author</option>
          <option value="Bonnie">Bonnie</option>
          <option value="Clyde">Clyde</option>
        </select>

        {!isUploading && <button>Submit</button>}
        {isUploading && <button disabled>Uploading...</button>}
      </form>
    </div>
  );
}

export default NewPost;
