import { GetPostsDTO, PostEntity } from "../types/posts";
import TestAxios from "./axios";

export const getPosts = async ({
  page,
  limit,
}: GetPostsDTO): Promise<Array<PostEntity>> => {
  const response = await TestAxios.get("/posts", {
    params: {
      _page: page,
      _limit: limit,
    },
  });
  return response.data;
};
