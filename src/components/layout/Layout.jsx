import React, { useContext } from "react";
import styles from "./layout.module.css";
import SortSearchAlgorithmLayout from "./SortSearchAlgorithmLayout";
import GraphAlgorithmLayout from "./GraphAlgorithmLayout";
import AlgorithmContext from "../../context/algorithm-context";

const Layout = (props) => {
  const algorithmCtx = useContext(AlgorithmContext);

  return (
    <div className={styles.wrapper}>
      {(algorithmCtx.algorithmType === "sorting algorithms" ||
        algorithmCtx.algorithmType === "searching algorithms" ||
        !algorithmCtx.algorithmType) && <SortSearchAlgorithmLayout />}

      {algorithmCtx.algorithmType === "graph algorithms" && (
        <GraphAlgorithmLayout />
      )}
    </div>
  );
};

export default Layout;
