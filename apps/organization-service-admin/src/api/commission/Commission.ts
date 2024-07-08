import { Organization } from "../organization/Organization";

export type Commission = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fullName: string | null;
  position: string | null;
  organization?: Organization | null;
};
