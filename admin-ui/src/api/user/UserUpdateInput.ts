import { PhotoUpdateManyWithoutUsersInput } from "./PhotoUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  photosToUsers?: PhotoUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
