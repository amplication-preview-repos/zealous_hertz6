import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type CommissionWhereInput = {
  id?: StringFilter;
  fullName?: StringNullableFilter;
  position?: StringNullableFilter;
  organization?: OrganizationWhereUniqueInput;
};
