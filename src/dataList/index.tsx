import React, { useState, useEffect } from "react";
import Checkbox from "../components/checkbox";
import { getLowerCase, getDataObject, getCountObject } from "../utils/util";
import SearchInput from "../components/searchInput";
import { Font16 } from "../components/typography";
import {
  DataListWrapper,
  StyledList,
  CountWrapper,
  CircleCount,
  Circle,
} from "./styledIndex";
import {
  DataListProps,
  DataObjectType,
  DataListItemObjectType,
  CountObjectType,
} from "../utils/types";

const Index = ({
  multiSelect = false,
  showCount = false,
  data,
  defaultSelected = [],
  onChange,
}: DataListProps) => {
  const [query, setQuery] = useState<string>("");
  const [countObject, setCountObject] = useState<CountObjectType>({});
  const [dataObject, setDataObject] = useState<DataObjectType>({});
  const [filterDataObject, setFilterDataObject] = useState<DataObjectType>({});
  const [currentSelectedItemIdList, setCurrentSelectedItemIdList] = useState<
    string[]
  >([]);

  const callOnChangeCallback = (
    dataObject: DataObjectType,
    prevSelectedItemIdList: string[]
  ) => {
    // Creating list of previous and current selected items for onChange Callback
    const prevSelectedList: DataListItemObjectType[] = [];
    const currSelectedList: DataListItemObjectType[] = [];

    currentSelectedItemIdList.forEach((id) =>
      prevSelectedList.push(dataObject[id])
    );

    prevSelectedItemIdList.forEach((id) =>
      currSelectedList.push(dataObject[id])
    );
    onChange(prevSelectedList, currSelectedList);
  };

  const handleCheckboxChange = (id: string) => {
    const prevDataObject: DataObjectType = { ...dataObject };
    let prevSelectedItemIdList = [];

    // multiSelect is enable
    if (multiSelect) {
      // Toggle selected state of Checkbox
      prevDataObject[id].value = !prevDataObject[id].value;

      // update currentSelectedItemIdList
      prevSelectedItemIdList = [...currentSelectedItemIdList];

      if (prevDataObject[id].value) {
        prevSelectedItemIdList.push(id); //push new item's id
      } else {
        //delete existing item's id
        const index = prevSelectedItemIdList.findIndex((item) => item === id);
        prevSelectedItemIdList.splice(index, 1);
      }
    } else {
      // multiSelect is disable

      // set value to false for previously selected item
      currentSelectedItemIdList[0] &&
        (prevDataObject[currentSelectedItemIdList[0]].value = false);

      // set value to true for new selected item
      prevDataObject[id].value = true;

      // update currentSelectedItemIdList
      prevSelectedItemIdList = [id];
    }

    // Making call to onChange callBack to get previous and next selected item's list
    callOnChangeCallback(prevDataObject, prevSelectedItemIdList);

    setCurrentSelectedItemIdList(prevSelectedItemIdList);
    setDataObject(prevDataObject);
  };

  // populate state from props
  useEffect(() => {
    if (data.length > 0) {
      const dataObject: DataObjectType = getDataObject(data);
      const countObject: CountObjectType = getCountObject(data);

      let currentSelectedItemIdList: string[] = [];

      // sets value to true for listItem ids present in defaultSelected list
      if (multiSelect) {
        defaultSelected.forEach((id) => {
          dataObject[id].value = true;
        });

        currentSelectedItemIdList = defaultSelected;
      } else {
        const id = defaultSelected[0];
        if (id) {
          dataObject[id].value = true;

          // only set first id in currentSelectedItemIdList from defaultSelected, as multiSelect is false
          currentSelectedItemIdList = [defaultSelected[0]];
        }
      }

      setCountObject(countObject);
      setCurrentSelectedItemIdList(currentSelectedItemIdList);
      setDataObject(dataObject);
    }
  }, [data]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = getLowerCase(e.target.value);
    setQuery(newQuery);

    // create newFilterData Object based on new query
    const newfilterDataObject: DataObjectType = {};

    for (let key in dataObject) {
      getLowerCase(dataObject[key].label).indexOf(newQuery) !== -1 &&
        (newfilterDataObject[key] = dataObject[key]);
    }

    const filteredData = Object.values(newfilterDataObject);
    const countObject: CountObjectType = getCountObject(filteredData);

    setCountObject(countObject);
    setFilterDataObject(newfilterDataObject);
  };

  const list =
    query === "" ? Object.values(dataObject) : Object.values(filterDataObject);

  return (
    <DataListWrapper>
      <SearchInput
        placeholder="search by name"
        value={query}
        onChange={handleSearch}
      />
      {showCount && (
        <CountWrapper>
          {Object.keys(countObject).map((key) => (
            <CircleCount key={key}>
              <Circle color={key} /> <Font16>{countObject[key]}</Font16>
            </CircleCount>
          ))}
        </CountWrapper>
      )}

      <StyledList>
        {list.map((item) => (
          <li key={item.id}>
            <Checkbox
              checked={item.value}
              id={item.id}
              label={item.label}
              onChange={() => handleCheckboxChange(item.id)}
            />
          </li>
        ))}
      </StyledList>
    </DataListWrapper>
  );
};

export default Index;
