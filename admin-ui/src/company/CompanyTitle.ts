import { Company as TCompany } from "../api/company/Company";

export const COMPANY_TITLE_FIELD = "id";

export const CompanyTitle = (record: TCompany): string => {
  return record.id || record.id;
};
