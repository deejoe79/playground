import { PhotoWhereInput } from "./PhotoWhereInput";
import { PhotoOrderByInput } from "./PhotoOrderByInput";

export type PhotoFindManyArgs = {
  where?: PhotoWhereInput;
  orderBy?: Array<PhotoOrderByInput>;
  skip?: number;
  take?: number;
};
