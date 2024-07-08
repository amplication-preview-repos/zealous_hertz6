import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ReportUpdateInput = {
  reportType?: "Option1" | null;
  reportName?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
};
