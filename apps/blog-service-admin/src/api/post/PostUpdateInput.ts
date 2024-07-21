import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type PostUpdateInput = {
  content?: string | null;
  publishedAt?: Date | null;
  author?: string | null;
  title?: string | null;
  category?: CategoryWhereUniqueInput | null;
};