import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PhotoListRelationFilter } from "../photo/PhotoListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  photosToUsers?: PhotoListRelationFilter;
  username?: StringFilter;
};
