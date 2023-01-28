import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const cate = "149";

  useEffect(() => {
    axios
      .get(
        `http://localhost:8094/news/api/v1/articles?filter=category_entity_id.${cate}&offset=2&limit=10`
      )
      .then((response) => {
        console.log(response)
        setData(response.data.data)
      })
      .catch((error) => console.log(error));
  }, []);
  // này là Context dùng để inject dữ liệu vào trong một class nào đó
  return (
    <NewsContext.Provider value={{ data }}>   
      {props.children}
    </NewsContext.Provider>
  );
};
