import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ReportWhereInput = {
  id?: StringFilter;
  reportType?: "Option1";
  reportName?: StringNullableFilter;
  organization?: OrganizationWhereUniqueInput;
};
