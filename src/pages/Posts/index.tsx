import { observer } from "mobx-react";
import { useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import Post from "../../components/post";
import { useAppStore } from "../../mobx";
import styles from "./styles.module.scss";

const Posts = () => {
  const { api, store } = useAppStore();

  useEffect(() => {
    api.posts.fetchPosts();
  }, []);

  return (
    <section className={styles.postsPage}>
      {api.posts.isLoading ? (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      ) : (
        store.posts.getPosts.map((item) => {
          return <Post key={item.id} post={item} />;
        })
      )}
    </section>
  );
};

export default observer(Posts);
