import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type CommissionCreateInput = {
  fullName?: string | null;
  position?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
};
