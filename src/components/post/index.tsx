import { FC } from "react";
import { PostEntity } from "../../types/posts";
import styles from "./styles.module.scss";

type PostProps = {
  post: PostEntity;
};

const Post: FC<PostProps> = ({ post }) => {
  return (
    <div className={styles.postComponent__container}>
      <p>Title: {post.title}</p>
      <div>
        <span>Body: {post.body}</span>
      </div>
    </div>
  );
};

export default Post;
