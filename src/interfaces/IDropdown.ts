export interface IDropdownOption {
  label?: string;
  value: string;
  id: number;
  url: string;
}
export interface IDropdown {
  title: string;
  items: Array<IDropdownOption>;
}