import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type EmployeeWhereInput = {
  id?: StringFilter;
  fullName?: StringNullableFilter;
  position?: StringNullableFilter;
  organization?: OrganizationWhereUniqueInput;
};
