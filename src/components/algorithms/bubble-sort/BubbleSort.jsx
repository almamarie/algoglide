import React, { useContext, useState } from "react";
import styles from "./BubbleSort.module.css";
import ArrayContext from "../../../context/array-context";
import { MAX_ARRAY_SIZE, MIN_ARRAY_SIZE } from "../../../lib/constants";
import AlgorithmContext from "../../../context/algorithm-context";
import { bubbleSortAlgorithm } from "./BubbleSortAlgorithm";

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

const BubbleSort = (props) => {
  // const arrayCtx = useContext(ArrayContext);
  const algoCtx = useContext(AlgorithmContext);
  const [startSorting, setStartSorting] = useState(false);
  const [sortingArray, setSortingArray] = useState([]);

  const maxArrayValue = Math.max(...props.array);
  const calcHeight = (height) => {
    const calculatedHeight = (height / maxArrayValue) * 60;
    return calculatedHeight;
  };

  function calculateDivWidth() {
    const arrayLength = props.array.length;
    const minItems = MIN_ARRAY_SIZE;
    const maxItems = MAX_ARRAY_SIZE;

    if (arrayLength < minItems || arrayLength > maxItems) return;

    // Calculate the slope of the linear equation
    const slope = (maxWidth - minWidth) / (maxItems - minItems);

    // Calculate the width based on the array length and the slope
    const width = slope * (arrayLength - minItems) + minWidth;

    return width;
  }

  if (props.startAlgorithm === "start") {
    console.log("Starting...");
    bubbleSortAlgorithm([...props.array], algoCtx.speed);
    algoCtx.signalRunningAlgorithm("stop");
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles["bars-ul"]} id="bubble-sort-bars-ul">
        {props.array.map((bar, index) => {
          return (
            <li
              key={index}
              className={`visualization-bar ${styles.bar}`}
              data-length={bar}
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

export default BubbleSort;
