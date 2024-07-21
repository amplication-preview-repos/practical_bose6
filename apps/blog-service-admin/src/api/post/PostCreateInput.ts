import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type PostCreateInput = {
  content?: string | null;
  publishedAt?: Date | null;
  author?: string | null;
  title?: string | null;
  category?: CategoryWhereUniqueInput | null;
};
