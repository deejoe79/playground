import { PhotoWhereInput } from "./PhotoWhereInput";

export type PhotoListRelationFilter = {
  every?: PhotoWhereInput;
  some?: PhotoWhereInput;
  none?: PhotoWhereInput;
};
