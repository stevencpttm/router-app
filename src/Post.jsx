import { useLoaderData } from "react-router";

function Post() {
  const { id, post } = useLoaderData();

  return (
    <div>
      <h1>Post: {id}</h1>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
}

export default Post;
