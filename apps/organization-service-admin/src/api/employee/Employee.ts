import { Organization } from "../organization/Organization";

export type Employee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fullName: string | null;
  position: string | null;
  organization?: Organization | null;
};
