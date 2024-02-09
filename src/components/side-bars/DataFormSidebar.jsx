import React, { useContext } from "react";
import styles from "./DataFormSidebar.module.css";
import algorithmsObject from "../../lib/algorithms";
import AlgorithmContext from "../../context/algorithm-context";
import { MAX_ALGORITHM_SPEED, MIN_ALGORITHM_SPEED } from "../../lib/constants";
const DataFormSidebar = () => {
  const algoCtx = useContext(AlgorithmContext);
  // algorithm type
  // algorithm
  // algorithm speed
  // show/hide algorithm code

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

  return (
    <form className={styles.form}>
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
            algorithmsObject[algoCtx.algorithmType].map((algo, index) => {
              return (
                <option key={index} value={algo}>
                  {algo}
                </option>
              );
            })}
        </select>
      </div>

      <div className={`${styles["input-wrapper"]} ${styles["algo-speed"]}`}>
        <label className={styles.label} htmlFor="algo-select">
          Algorithm Speed
        </label>
        {/* <span className={styles["algo-speed"]}> */}
        <input
          type="range"
          onChange={algorithmSpeedHandler}
          min={MIN_ALGORITHM_SPEED}
          max={MAX_ALGORITHM_SPEED}
        />
        <span>{`${algoCtx.algorithmSpeed} ms`}</span>
        {/* </span> */}
      </div>

      <button>Toggle side bar</button>
      {/* <button type="text" onChange={}>{algoCtx.}</button> */}
    </form>
  );
};

export default DataFormSidebar;
