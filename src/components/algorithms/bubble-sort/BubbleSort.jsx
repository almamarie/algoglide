import React, { useContext } from "react";
import styles from "./BubbleSort.module.css";
import ArrayContext from "../../../context/array-context";
import { MAX_ARRAY_SIZE, MIN_ARRAY_SIZE } from "../../../lib/constants";

/**
 * The below width and height are hard coded values from the
 * corresponding css file. The values must always be same
 *
 * width - 100 rem
 * height - 60 rem
 *
 */

const minWidth = 8;
const maxWidth = 0.2;

const BubbleSort = () => {
  const arrayCtx = useContext(ArrayContext);

  const maxArrayValue = Math.max(...arrayCtx.array);
  const calcHeight = (height) => {
    const calculatedHeight = (height / maxArrayValue) * 60;
    return calculatedHeight;
  };

  function calculateDivWidth() {
    const arrayLength = arrayCtx.array.length;
    const minItems = MIN_ARRAY_SIZE;
    const maxItems = MAX_ARRAY_SIZE;

    if (arrayLength < minItems || arrayLength > maxItems) return;

    // Calculate the slope of the linear equation
    const slope = (maxWidth - minWidth) / (maxItems - minItems);
    console.log("Slope: ", slope);

    // Calculate the width based on the array length and the slope
    const width = slope * (arrayLength - minItems) + minWidth;

    return width;
  }

  bubbleSort([...arrayCtx.array]);
  return (
    <div className={styles.wrapper}>
      <ul className={styles["bars-ul"]}>
        {arrayCtx.array.map((bar, index) => {
          return (
            <li
              key={index}
              className={styles.bar}
              style={{
                height: `${calcHeight(bar)}rem`,
                width: `${calculateDivWidth()}rem`,
              }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

/**
 * Sorts an array of numbers in ascending order
 *
 * @param {Array<number>} array The array to be sorted
 * @returns A sorted array
 */
const bubbleSort = (array) => {
  /**
   * In each place, what is needed is
   * i and j
   */
  console.log("Starting to sort: ", array);
  for (let i = 0; i < array.length; i++) {
    let isSorted = true;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        isSorted = false;
      }
    }

    if (isSorted) break;
  }
};

const swap = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

export default BubbleSort;
