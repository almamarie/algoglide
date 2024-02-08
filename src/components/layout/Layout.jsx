import React from "react";
import styles from "./layout.module.css";
import SortSearchAlgorithmLayout from "./SortSearchAlgorithmLayout";

const Layout = (props) => {
  return (
    <div className={styles.wrapper}>
      <SortSearchAlgorithmLayout />
    </div>
  );
};

export default Layout;
