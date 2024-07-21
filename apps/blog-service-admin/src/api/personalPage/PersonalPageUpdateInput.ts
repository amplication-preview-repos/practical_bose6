import { InputJsonValue } from "../../types";

export type PersonalPageUpdateInput = {
  name?: string | null;
  profileImage?: InputJsonValue;
  bio?: string | null;
};
