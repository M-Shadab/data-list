import { DataListItemObjectType, DataObjectType } from "./types";

export const getLowerCase = (str: string): string => str.toLocaleLowerCase();

export const getDataObject = (data: DataListItemObjectType[]) => {
  const dataObject: DataObjectType = {};

  // make dataObject from data list for O(1) lookup time by id field
  data.forEach((item) => {
    if (item.label in dataObject) {
      dataObject[item.label]["count"] = dataObject[item.label]["count"] + 1;
    } else {
      dataObject[item.label] = {
        id: item.label,
        label: item.label,
        count: 1,
        value: false,
      };
    }
  });

  return dataObject;
};
