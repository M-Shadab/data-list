type DataListItemObjectType = {
  id: string;
  label: string;
  value: boolean;
  [key: string]: any;
};

type DataObjectType = {
  [key: string]: {
    id: string;
    label: string;
    value: boolean;
    count: number;
  };
};

type DataListProps = {
  multiSelect?: boolean;
  showCount?: boolean;
  defaultSelected?: string[];
  data: DataListItemObjectType[];
  onChange: (
    prev: DataListItemObjectType[],
    curr: DataListItemObjectType[]
  ) => void;
};

type SearchInputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type CheckboxProps = {
  id?: string;
  label: string;
  checked: boolean;
  onChange?: () => void;
};

type CircleProps = {
  color: string;
};

type ThemeProps = {
  [key: string]: any;
};

export type {
  DataListProps,
  DataListItemObjectType,
  DataObjectType,
  SearchInputProps,
  CheckboxProps,
  CircleProps,
  ThemeProps,
};
