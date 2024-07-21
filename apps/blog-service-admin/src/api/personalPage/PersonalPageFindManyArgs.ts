import { PersonalPageWhereInput } from "./PersonalPageWhereInput";
import { PersonalPageOrderByInput } from "./PersonalPageOrderByInput";

export type PersonalPageFindManyArgs = {
  where?: PersonalPageWhereInput;
  orderBy?: Array<PersonalPageOrderByInput>;
  skip?: number;
  take?: number;
};
