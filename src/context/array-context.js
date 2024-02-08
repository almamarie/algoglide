import React, { useState } from "react";
import autoGenerateArrayofIntegers from "../lib/generateRandomIntegers";

// NOTE: maximum array size is 200

const defaultArraySize = 10;
const ArrayContext = React.createContext({
  arraySize: defaultArraySize,
  array: [],
  autoGenerateArray: () => {},
  addItemToArray: (item) => {},
  changeArraySize: (size) => {},
});

export const ArrayContextProvider = (props) => {
  const [arraySize, setArraySize] = useState(defaultArraySize);
  const [array, setArray] = useState(autoGenerateArrayofIntegers(arraySize));

  const autoGenerateArray = () => {
    setArray(autoGenerateArrayofIntegers(arraySize));
  };

  const addItemToArray = (item) => {
    if (typeof item !== "number") return;
    setArray((prev) => prev.push(item));
  };

  const changeArraySize = (size) => {
    if (typeof size !== "number") return;
    setArraySize(size);
  };

  return (
    <ArrayContext.Provider
      value={{
        arraySize,
        array,
        autoGenerateArray,
        addItemToArray,
        changeArraySize,
      }}
    >
      {props.children}
    </ArrayContext.Provider>
  );
};

export default ArrayContext;
