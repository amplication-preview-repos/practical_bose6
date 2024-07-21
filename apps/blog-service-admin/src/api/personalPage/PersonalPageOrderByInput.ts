import { SortOrder } from "../../util/SortOrder";

export type PersonalPageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  profileImage?: SortOrder;
  bio?: SortOrder;
};
