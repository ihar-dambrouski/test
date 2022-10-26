import { makeAutoObservable } from "mobx";
import { getPosts } from "../../api";

import { Store } from "../index";

export default class PostsApi {
  public hasError = false;
  public isLoading = false;
  public errorMessage = "";
  private currentPage = 1;
  private limit = 15;
  private fulliLoaded = false;

  constructor(private store: Store) {
    makeAutoObservable(this);
  }

  fetchPosts = async () => {
    try {
      if (this.fulliLoaded) return;

      this.isLoading = true;

      const data = await getPosts({
        page: this.currentPage,
        limit: this.limit,
      });

      this.isLoading = false;

      if (data.length === 0) {
        this.fulliLoaded = true;
      }
      this.currentPage += 1;
      this.store.posts.load(data);
    } catch (e) {
      this.isLoading = false;
      this.hasError = true;
      //Used for demo purpose (test App)
      this.errorMessage = "Something went wrong";
    }
  };
}
