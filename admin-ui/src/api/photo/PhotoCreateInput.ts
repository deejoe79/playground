import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoCreateInput = {
  geo?: string | null;
  owner: UserWhereUniqueInput;
  shortId?: string | null;
};
