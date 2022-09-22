import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoWhereInput = {
  geo?: StringNullableFilter;
  id?: StringFilter;
  owner?: UserWhereUniqueInput;
  shortId?: StringNullableFilter;
};
