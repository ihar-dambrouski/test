import { createContext, useContext } from "react";

import AppApi from "./api";
import { PostsStore } from "./store/posts";

export class Store {
  public posts: PostsStore;

  constructor() {
    this.posts = new PostsStore(this);
  }
}

export interface AppContextType {
  store: Store;
  api: AppApi;
}

export const appStore = new Store();
export const apiStore = new AppApi(appStore);

export const AppStoreContext = createContext<AppContextType>({
  api: apiStore,
  store: appStore,
});

export const useAppStore = (): AppContextType => {
  const storage = useContext(AppStoreContext);
  return storage;
};
