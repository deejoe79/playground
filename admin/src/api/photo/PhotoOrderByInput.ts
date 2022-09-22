import { SortOrder } from "../../util/SortOrder";

export type PhotoOrderByInput = {
  createdAt?: SortOrder;
  geo?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  shortId?: SortOrder;
  updatedAt?: SortOrder;
};
