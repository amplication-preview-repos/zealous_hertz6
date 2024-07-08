import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fullName?: SortOrder;
  position?: SortOrder;
  organizationId?: SortOrder;
};
