import { CommissionUpdateManyWithoutOrganizationsInput } from "./CommissionUpdateManyWithoutOrganizationsInput";
import { ReportUpdateManyWithoutOrganizationsInput } from "./ReportUpdateManyWithoutOrganizationsInput";
import { EmployeeUpdateManyWithoutOrganizationsInput } from "./EmployeeUpdateManyWithoutOrganizationsInput";

export type OrganizationUpdateInput = {
  inn?: string | null;
  name?: string | null;
  commissions?: CommissionUpdateManyWithoutOrganizationsInput;
  reports?: ReportUpdateManyWithoutOrganizationsInput;
  employees?: EmployeeUpdateManyWithoutOrganizationsInput;
};
