import { CompanyWhereInput } from "./CompanyWhereInput";
import { CompanyOrderByInput } from "./CompanyOrderByInput";

export type CompanyFindManyArgs = {
  where?: CompanyWhereInput;
  orderBy?: Array<CompanyOrderByInput>;
  skip?: number;
  take?: number;
};
