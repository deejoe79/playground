import { Photo as TPhoto } from "../api/photo/Photo";

export const PHOTO_TITLE_FIELD = "shortId";

export const PhotoTitle = (record: TPhoto): string => {
  return record.shortId || record.id;
};
