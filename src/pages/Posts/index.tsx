import { observer } from "mobx-react";
import { useCallback, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import Post from "../../components/post";
import { useAppStore } from "../../mobx";
import { PostEntity } from "../../types/posts";
import styles from "./styles.module.scss";

const Posts = () => {
  const { api, store } = useAppStore();

  useEffect(() => {
    api.posts.fetchPosts();

    let scrollEventListenerl: any;

    const element = document.getElementById("pagination");

    if (element) {
      scrollEventListenerl = element.addEventListener("scroll", () => {
        const scrolledToEnd =
          element.clientHeight + element.scrollTop + 100 > element.scrollHeight;

        if (scrolledToEnd && !api.posts.isLoading) {
          api.posts.fetchPosts();
        }
      });
    }

    return () => {
      element?.removeEventListener("scroll", scrollEventListenerl);
    };
  }, []);

  const renderItem = useCallback(
    (item: PostEntity) => <Post key={item.id} post={item} />,
    []
  );

  return (
    <section id="pagination" className={styles.postsPage}>
      {store.posts.getPosts.map(renderItem)}
      {api.posts.isLoading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
    </section>
  );
};

export default observer(Posts);
