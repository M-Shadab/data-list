import {
  DataListItemObjectType,
  DataObjectType,
  CountObjectType,
} from "./types";

export const getLowerCase = (str: string): string => str.toLocaleLowerCase();

export const getDataObject = (data: DataListItemObjectType[]) => {
  const dataObject: DataObjectType = {};

  // make dataObject from data list for O(1) lookup time by id field
  data.forEach((item) => {
    dataObject[item.id] = item;
  });

  return dataObject;
};

export const getCountObject = (data: DataListItemObjectType[]) => {
  const countObject: CountObjectType = {};

  // make countObject for color item's count
  data.forEach((item) => {
    if (item.eyeColor in countObject) {
      countObject[item.eyeColor]++;
    } else countObject[item.eyeColor] = 1;
  });

  return countObject;
};
