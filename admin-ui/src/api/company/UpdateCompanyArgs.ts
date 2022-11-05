import { CompanyWhereUniqueInput } from "./CompanyWhereUniqueInput";
import { CompanyUpdateInput } from "./CompanyUpdateInput";

export type UpdateCompanyArgs = {
  where: CompanyWhereUniqueInput;
  data: CompanyUpdateInput;
};
