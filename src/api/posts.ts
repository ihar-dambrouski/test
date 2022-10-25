import { PostEntity } from "../types/posts";
import TestAxios from "./axios";

export const getPosts = async (): Promise<Array<PostEntity>> => {
  const response = await TestAxios.get("/posts");
  return response.data;
};
