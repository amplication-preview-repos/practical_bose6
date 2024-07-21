import { JsonValue } from "type-fest";

export type PersonalPage = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  profileImage: JsonValue;
  bio: string | null;
};
