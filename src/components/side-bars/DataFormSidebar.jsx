import React, { useContext } from "react";
import styles from "./DataFormSidebar.module.css";
import algorithmsObject, { extractAlgorithms } from "../../lib/algorithms";
import AlgorithmContext from "../../context/algorithm-context";
import { MAX_ALGORITHM_SPEED, MIN_ALGORITHM_SPEED } from "../../lib/constants";
import SideBarContext from "../../context/side-bar-context";
const DataFormSidebar = () => {
  const algoCtx = useContext(AlgorithmContext);
  const sideBarsCtx = useContext(SideBarContext);

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
    sideBarsCtx.toggleShowCodeSideBar();
  };

  const extractedAlgorithms = extractAlgorithms(algoCtx.algorithmType);

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
            extractedAlgorithms.map((algo, index) => {
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

        <input
          type="range"
          onChange={algorithmSpeedHandler}
          min={MIN_ALGORITHM_SPEED}
          max={MAX_ALGORITHM_SPEED}
        />
        <span>{`${algoCtx.algorithmSpeed} ms`}</span>
      </div>

      <button
        className={styles["code-bar-toggle-btn"]}
        type="text"
        onClick={codeBarToggleHandler}
      >
        {sideBarsCtx.showCodeSideBar ? "Close Code Bar" : "Show Code Bar"}
      </button>
    </form>
  );
};

export default DataFormSidebar;
