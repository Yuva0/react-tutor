import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext<any>(null);

export const useData = () => {
  return useContext(DataContext);
};


export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [topics, setTopics] = useState<any>(null);
  const [categories, setCategories] = useState<any>(null);

  useEffect(() => {
    const promiseTopic = axios.get("http://localhost:5000/api/topic");
    const promiseCategory = axios.get("http://localhost:5000/api/category");

    Promise.all([promiseTopic, promiseCategory]).then((values) => {
      setTopics(values[0].data);
      setCategories(values[1].data);
    });
  },[]);
  return (
    <DataContext.Provider value={{ topics, categories }}>
      {children}
    </DataContext.Provider>
  );
};
