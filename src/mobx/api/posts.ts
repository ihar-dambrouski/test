import { makeAutoObservable } from "mobx";
import { getPosts } from "../../api";

import { Store } from "../index";

export default class PostsApi {
  public hasError = false;
  public isLoading = false;
  public errorMessage = "";

  constructor(private store: Store) {
    makeAutoObservable(this);
  }

  fetchPosts = async () => {
    try {
      this.isLoading = true;

      const data = await getPosts();

      this.store.posts.load(data);

      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      this.hasError = true;
      //Used for demo purpose (test App)
      this.errorMessage = "Something went wrong";
    }
  };
}
