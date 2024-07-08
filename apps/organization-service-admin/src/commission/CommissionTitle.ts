import { Commission as TCommission } from "../api/commission/Commission";

export const COMMISSION_TITLE_FIELD = "fullName";

export const CommissionTitle = (record: TCommission): string => {
  return record.fullName?.toString() || String(record.id);
};
