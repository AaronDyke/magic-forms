export type magicFieldType =
  | "select"
  | "multiselect"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export interface MagicFormField {
  id: string;
  label: string;
  type: magicFieldType;
  defaultValue?: any;
  options?: { label: string; value: any }[];
}
