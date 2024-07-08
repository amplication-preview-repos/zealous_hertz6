import { SortOrder } from "../../util/SortOrder";

export type CommissionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fullName?: SortOrder;
  position?: SortOrder;
  organizationId?: SortOrder;
};
