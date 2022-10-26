import { action, makeAutoObservable } from "mobx";
import { PostEntity } from "../../types/posts";

import { Store } from "../index";

export class PostsStore {
  private postsMap: Array<PostEntity> = [];

  constructor(private store: Store) {
    makeAutoObservable(this);
  }

  get getPosts() {
    return this.postsMap;
  }

  @action load(posts: Array<PostEntity>) {
    this.postsMap = this.postsMap.concat(posts);
  }
}
