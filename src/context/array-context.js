import React, { useState } from "react";
import autoGenerateArrayofIntegers from "../lib/generateRandomIntegers";
import { MAX_ARRAY_SIZE, MIN_ARRAY_SIZE } from "../lib/constants";

const defaultArraySize = 10;
const ArrayContext = React.createContext({
  arraySize: defaultArraySize,
  array: [],
  autoGenerateArray: () => {},
  addItemToArray: (item) => {},
  changeArraySize: (size) => {},
  updateArray: (array) => {},
});

export const ArrayContextProvider = (props) => {
  const [arraySize, setArraySize] = useState(defaultArraySize);
  const [array, setArray] = useState(autoGenerateArrayofIntegers(arraySize));

  const autoGenerateArray = (size = arraySize) => {
    setArray(autoGenerateArrayofIntegers(size));
    console.log("Array: ", array);
  };

  const addItemToArray = (item) => {
    if (!item) return;
    if (typeof item !== "number") return;
    setArray((prev) => [...prev, item]);
  };

  const changeArraySize = (size) => {
    if (typeof size !== "number") return;
    if (size < MIN_ARRAY_SIZE || size > MAX_ARRAY_SIZE) return;

    setArraySize(size);
    autoGenerateArray(size);
  };

  const updateArray = (updatedArray) => {
    setArray((prev) => updatedArray);
  };

  return (
    <ArrayContext.Provider
      value={{
        arraySize,
        array,
        autoGenerateArray,
        addItemToArray,
        changeArraySize,
        updateArray,
      }}
    >
      {props.children}
    </ArrayContext.Provider>
  );
};

export default ArrayContext;
