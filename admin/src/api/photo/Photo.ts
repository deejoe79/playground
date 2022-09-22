import { User } from "../user/User";

export type Photo = {
  createdAt: Date;
  geo: string | null;
  id: string;
  owner?: User;
  shortId: string | null;
  updatedAt: Date;
};
