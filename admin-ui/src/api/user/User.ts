import { Photo } from "../photo/Photo";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  photosToUsers?: Array<Photo>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
