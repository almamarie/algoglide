import React, { useContext, useRef } from "react";
import styles from "./ArraySideBar.module.css";
import Button from "../ui/button/Button";
import ArrayContext from "../../context/array-context";
import AlgorithmContext from "../../context/algorithm-context";

// TODO: Check your google drive for the winkogo pictures
const ArraySideBar = () => {
  const arrayCtx = useContext(ArrayContext);
  const algoCtx = useContext(AlgorithmContext);
  const newItemRef = useRef();
  const autoGenSortArrayHandler = () => {
    arrayCtx.autoGenerateArray();
  };

  const setSignalHandler = (signal) => {
    return () => {
      algoCtx.signalRunningAlgorithm(signal);
    };
  };

  const addItemToArrayHandler = () => {
    const value = +newItemRef.current.value;
    if (!value) return;
    arrayCtx.addItemToArray(value);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles["main-area"]}>
        {/* <header>
          <h1>Array Panel</h1>
        </header> */}

        <main className={styles.main}>
          <div className={styles["upper-part"]}>
            <Button
              className={styles["auto-gen-btn"]}
              type="text"
              onClick={autoGenSortArrayHandler}
            >
              Auto Generate
            </Button>

            <div className={styles["element-wrapper"]}>
              <button
                className={styles["element-add-button"]}
                onClick={addItemToArrayHandler}
              >
                Add to array
              </button>
              <input
                id="element-input"
                className={styles["element-input"]}
                type="number"
                ref={newItemRef}
              />
            </div>

            <div className={styles["signal-btns"]}>
              <Button
                className={styles["signal-btn"]}
                type="text"
                onClick={setSignalHandler("start")}
              >
                Start
              </Button>

              <Button
                className={styles["signal-btn"]}
                type="text"
                onClick={setSignalHandler("pause")}
              >
                Pause
              </Button>

              <Button
                className={styles["signal-btn"]}
                type="text"
                onClick={setSignalHandler("stop")}
              >
                Play
              </Button>
            </div>
          </div>
          <span className={styles["array-elements"]}>
            {arrayCtx.array.length >= 36
              ? `[${arrayCtx.array.slice(0, 35).join(",    ")}...${
                  arrayCtx.array[35]
                }]`
              : `[${arrayCtx.array.join(",    ")}]`}
          </span>
        </main>
      </div>
    </div>
  );
};

export default ArraySideBar;
