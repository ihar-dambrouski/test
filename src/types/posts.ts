export type PostEntity = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type GetPostsDTO = {
  page: number;
  limit: number;
};
