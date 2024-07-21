import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  publishedAt?: SortOrder;
  author?: SortOrder;
  title?: SortOrder;
  categoryId?: SortOrder;
};
