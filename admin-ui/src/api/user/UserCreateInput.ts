import { PhotoCreateNestedManyWithoutUsersInput } from "./PhotoCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  photosToUsers?: PhotoCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
