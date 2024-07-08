import { Organization } from "../organization/Organization";

export type Report = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  reportType?: "Option1" | null;
  reportName: string | null;
  organization?: Organization | null;
};
