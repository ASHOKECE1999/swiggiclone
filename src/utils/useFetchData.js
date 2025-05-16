import React from "react";
import { useState, useEffect } from "react";

const useFetchData = (id) => {
  
  const [data, dataInfo] = useState(null);
  console.log(id, "iddd");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const json = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const dataFor = await json.json();
    dataInfo(dataFor);
    console.log(dataFor,"gagagagag");
  };
  return data;
};
export default useFetchData;
