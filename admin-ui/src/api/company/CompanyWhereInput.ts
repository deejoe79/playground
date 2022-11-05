import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CompanyWhereInput = {
  allowedContactCount?: IntNullableFilter;
  id?: StringFilter;
};
