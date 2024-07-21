import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type PostWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  publishedAt?: DateTimeNullableFilter;
  author?: StringNullableFilter;
  title?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
};
