import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type EmployeeCreateInput = {
  fullName?: string | null;
  position?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
};
