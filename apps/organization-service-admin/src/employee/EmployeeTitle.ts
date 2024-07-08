import { Employee as TEmployee } from "../api/employee/Employee";

export const EMPLOYEE_TITLE_FIELD = "fullName";

export const EmployeeTitle = (record: TEmployee): string => {
  return record.fullName?.toString() || String(record.id);
};
