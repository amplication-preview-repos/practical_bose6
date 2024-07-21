import { InputJsonValue } from "../../types";

export type PersonalPageCreateInput = {
  name?: string | null;
  profileImage?: InputJsonValue;
  bio?: string | null;
};
