import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoUpdateInput = {
  geo?: string | null;
  owner?: UserWhereUniqueInput;
  shortId?: string | null;
};
