import React from "react";
import styles from "./layout.module.css";

const Layout = () => {
  return (
    <div>
      <div className={styles["data-form-sidebar"]}>data side bar</div>
      <div className={styles["code-sidebar"]}>code side bar</div>
      <div className={styles["array-sidebar"]}> array side bar</div>
    </div>
  );
};

export default Layout;
