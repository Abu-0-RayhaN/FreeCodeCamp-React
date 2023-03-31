import React, { useEffect, useState } from "react";

export default function GetPost() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typeicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setPost(data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError(err);
      });
  }, []);
  return (
    <div>
      {loading ? "loading..." : post.title}
      {error || null}
    </div>
  );
}
