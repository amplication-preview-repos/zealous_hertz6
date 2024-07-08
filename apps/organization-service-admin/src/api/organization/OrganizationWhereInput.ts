import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommissionListRelationFilter } from "../commission/CommissionListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";

export type OrganizationWhereInput = {
  id?: StringFilter;
  inn?: StringNullableFilter;
  name?: StringNullableFilter;
  commissions?: CommissionListRelationFilter;
  reports?: ReportListRelationFilter;
  employees?: EmployeeListRelationFilter;
};
