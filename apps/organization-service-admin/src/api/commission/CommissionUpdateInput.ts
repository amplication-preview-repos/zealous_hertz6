import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type CommissionUpdateInput = {
  fullName?: string | null;
  position?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
};
