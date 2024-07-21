import { PersonalPage as TPersonalPage } from "../api/personalPage/PersonalPage";

export const PERSONALPAGE_TITLE_FIELD = "name";

export const PersonalPageTitle = (record: TPersonalPage): string => {
  return record.name?.toString() || String(record.id);
};
