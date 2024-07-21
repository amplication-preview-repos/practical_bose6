import { Category } from "../category/Category";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  publishedAt: Date | null;
  author: string | null;
  title: string | null;
  category?: Category | null;
};
