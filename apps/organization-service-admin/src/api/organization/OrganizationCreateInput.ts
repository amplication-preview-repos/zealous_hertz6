import { CommissionCreateNestedManyWithoutOrganizationsInput } from "./CommissionCreateNestedManyWithoutOrganizationsInput";
import { ReportCreateNestedManyWithoutOrganizationsInput } from "./ReportCreateNestedManyWithoutOrganizationsInput";
import { EmployeeCreateNestedManyWithoutOrganizationsInput } from "./EmployeeCreateNestedManyWithoutOrganizationsInput";

export type OrganizationCreateInput = {
  inn?: string | null;
  name?: string | null;
  commissions?: CommissionCreateNestedManyWithoutOrganizationsInput;
  reports?: ReportCreateNestedManyWithoutOrganizationsInput;
  employees?: EmployeeCreateNestedManyWithoutOrganizationsInput;
};
