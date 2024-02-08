import styles from "./SortSearchAlgorithmLayout.module.css";

const SortSearchAlgorithmLayout = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["data-form-sidebar"]}>
        data side bar
        <button>Toggle side bar</button>
      </div>
      <div className={styles["graph-sidebar"]}>code side bar</div>
      <div className={styles["array-sidebar"]}> array side bar</div>
    </div>
  );
};

export default SortSearchAlgorithmLayout;
