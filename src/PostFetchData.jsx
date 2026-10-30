import { useLoaderData } from "react-router";
import { useState, useEffect } from "react";

function Post() {
  const { id } = useLoaderData();
  const [post, setPost] = useState(null);

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + id,
    );
    const post = await response.json();

    setPost(post);
  };

  return (
    <div>
      <h1>Post: {id}</h1>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
}

export default Post;
