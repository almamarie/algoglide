import React, { useContext } from "react";
import styles from "./layout.module.css";
import SortSearchAlgorithmLayout from "./SortSearchAlgorithmLayout";
import GraphAlgorithmLayout from "./GraphAlgorithmLayout";
import AlgorithmContext from "../../context/algorithm-context";
import CodeSideBar from "../side-bars/CodeSideBar";
import SideBarContext from "../../context/side-bar-context";

const Layout = (props) => {
  const algorithmCtx = useContext(AlgorithmContext);
  const sideBarsCtx = useContext(SideBarContext);

  return (
    <div className={styles.wrapper}>
      {(algorithmCtx.algorithmType === "sorting algorithms" ||
        algorithmCtx.algorithmType === "searching algorithms" ||
        !algorithmCtx.algorithmType) && <SortSearchAlgorithmLayout />}

      {algorithmCtx.algorithmType === "graph algorithms" && (
        <GraphAlgorithmLayout />
      )}

      {sideBarsCtx.showCodeSideBar && <CodeSideBar />}
    </div>
  );
};

export default Layout;
