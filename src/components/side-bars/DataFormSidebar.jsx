import React, { useContext } from "react";
import styles from "./DataFormSidebar.module.css";
import algorithmsObject, { extractAlgorithms } from "../../lib/algorithms";
import AlgorithmContext from "../../context/algorithm-context";
import {
  MAX_ALGORITHM_SPEED,
  MAX_ARRAY_SIZE,
  MIN_ALGORITHM_SPEED,
  MIN_ARRAY_SIZE,
} from "../../lib/constants";
import SideBarContext from "../../context/side-bar-context";
import Button from "../ui/button/Button";
import ArrayContext from "../../context/array-context";
const DataFormSidebar = () => {
  const algoCtx = useContext(AlgorithmContext);
  const sideBarsCtx = useContext(SideBarContext);
  const arrayCtx = useContext(ArrayContext);

  const algorithmTypeHandler = (event) => {
    const value = event.target.value;
    algoCtx.changeAlgorithmType(value);
  };

  const algorithmHandler = (event) => {
    const value = event.target.value;
    algoCtx.changeAlgorithm(value);
  };

  const algorithmSpeedHandler = (event) => {
    const value = event.target.value;
    algoCtx.setAlgorithmSpeed(value);
  };

  const codeBarToggleHandler = (event) => {
    event.preventDefault();
    console.log("Here");
    sideBarsCtx.toggleShowCodeSideBar();
  };

  const arraySizeHandler = (event) => {
    const value = +event.target.value;
    console.log("Here");
    arrayCtx.changeArraySize(value);
  };

  const extractedAlgorithms = extractAlgorithms(algoCtx.algorithmType);

  return (
    <div className={styles.form}>
      <div className={styles["input-wrapper"]}>
        <label className={styles.label} htmlFor="algo-type-select">
          Select Algorithm Type
        </label>
        <select
          id="algo-type-select"
          className={styles.select}
          name="algo-type-select"
          onChange={algorithmTypeHandler}
        >
          <option value=""> -- Please select -- </option>
          {Object.keys(algorithmsObject).map((algo, index) => {
            return (
              <option key={index} value={algo}>
                {algo}
              </option>
            );
          })}
        </select>
      </div>

      <div className={styles["input-wrapper"]}>
        <label className={styles.label} htmlFor="algo-select">
          Select Algorithm
        </label>
        <select
          id="algo-select"
          className={styles.select}
          onChange={algorithmHandler}
        >
          <option value=""> -- Please select -- </option>
          {algoCtx.algorithmType &&
            extractedAlgorithms.map((algo, index) => {
              return (
                <option key={index} value={algo}>
                  {algo}
                </option>
              );
            })}
        </select>
      </div>

      <div className={styles["input-wrapper"]}>
        <label className={styles.label} htmlFor="array-size">
          Array Size
          <span
            className={styles["array-size-desc"]}
          >{`min: ${MIN_ARRAY_SIZE}, max: ${MAX_ARRAY_SIZE}`}</span>
        </label>

        <div className={styles["array-size-input-wrapper"]}>
          <input
            id="array-size"
            className={styles["array-size"]}
            type="number"
            min={MIN_ARRAY_SIZE}
            max={MAX_ARRAY_SIZE}
            onChange={arraySizeHandler}
          />

          <span className={styles["array-size-number"]}>
            <span> Current:</span>
            <span>{`${arrayCtx.arraySize} elements`}</span>
          </span>
        </div>
      </div>
      <div className={`${styles["input-wrapper"]} ${styles["algo-speed"]}`}>
        <label className={styles.label} htmlFor="algo-select">
          Algorithm Speed
        </label>

        <input
          type="range"
          onChange={algorithmSpeedHandler}
          min={MIN_ALGORITHM_SPEED}
          max={MAX_ALGORITHM_SPEED}
        />

        <span>{`${algoCtx.algorithmSpeed} ms`}</span>
      </div>

      <Button
        className={styles["code-bar-toggle-btn"]}
        type="text"
        onClick={codeBarToggleHandler}
      >
        {sideBarsCtx.showCodeSideBar ? "Close Code Bar" : "Show Code Bar"}
      </Button>
    </div>
  );
};

export default DataFormSidebar;
