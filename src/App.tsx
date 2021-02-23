import React, { useState, useEffect } from "react";
import { DataListItemObjectType } from "./utils/types";
import { getApiData } from "./services/dataService";
import DataList from "./dataList";
import Loader from "./components/loader";
import { H1 } from "./components/typography";
import "./App.css";

const App = () => {
  const [dataList, setDataList] = useState<Array<DataListItemObjectType>>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const dataList: DataListItemObjectType[] = [];
      setIsloading(true);

      try {
        const data: any = await getApiData();

        data.forEach((item: any) => {
          dataList.push({
            id: item._id,
            label: item.eyeColor,
            value: false,
            eyeColor: item.eyeColor,
          });
        });
        setDataList(dataList);
        setIsloading(false);
      } catch (error) {
        setIsloading(false);
        console.log("err: ", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <H1>Filtered Data List</H1>
      <DataList
        data={dataList}
        showCount={true}
        multiSelect={true}
        defaultSelected={["red", "blue"]} //passing red invalid id, to test invalid id handling
        onChange={(
          prev: DataListItemObjectType[],
          curr: DataListItemObjectType[]
        ) => console.log("prev: ", prev, "curr: ", curr)}
      />
      {isLoading && <Loader />}
    </div>
  );
};

export default App;
