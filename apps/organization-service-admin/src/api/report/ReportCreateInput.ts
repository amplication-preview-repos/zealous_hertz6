import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ReportCreateInput = {
  reportType?: "Option1" | null;
  reportName?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
};
