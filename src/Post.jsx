import postInfo from "./data.js";

export default function Post() {
  return (
    <div>
      <p>{postInfo.title}</p>
      <img src={postInfo.imageLink} alt="post" width="200" height="200"></img>
      <p>{postInfo.description}</p>
    </div>
  );
}