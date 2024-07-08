import { Commission } from "../commission/Commission";
import { Report } from "../report/Report";
import { Employee } from "../employee/Employee";

export type Organization = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  inn: string | null;
  name: string | null;
  commissions?: Array<Commission>;
  reports?: Array<Report>;
  employees?: Array<Employee>;
};
