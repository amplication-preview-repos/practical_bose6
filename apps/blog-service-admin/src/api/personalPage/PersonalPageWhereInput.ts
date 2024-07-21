import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PersonalPageWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  profileImage?: JsonFilter;
  bio?: StringNullableFilter;
};
