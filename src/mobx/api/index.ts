import { Store } from "..";
import PostsApi from "./posts";

export default class AppApi {
  public posts: PostsApi;

  constructor(store: Store) {
    this.posts = new PostsApi(store);
  }
}
