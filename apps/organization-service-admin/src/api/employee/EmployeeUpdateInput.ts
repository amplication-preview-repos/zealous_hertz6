import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type EmployeeUpdateInput = {
  fullName?: string | null;
  position?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
};
