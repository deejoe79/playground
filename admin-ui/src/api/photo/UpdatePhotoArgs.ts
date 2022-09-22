import { PhotoWhereUniqueInput } from "./PhotoWhereUniqueInput";
import { PhotoUpdateInput } from "./PhotoUpdateInput";

export type UpdatePhotoArgs = {
  where: PhotoWhereUniqueInput;
  data: PhotoUpdateInput;
};
