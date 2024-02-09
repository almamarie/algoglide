import DataFormSidebar from "../side-bars/DataFormSidebar";
import styles from "./SortSearchAlgorithmLayout.module.css";

const SortSearchAlgorithmLayout = (props) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles["data-form-sidebar"]}>
        <DataFormSidebar />
      </section>
      <section className={styles["graph-sidebar"]}>graph side bar</section>
      <section className={styles["array-sidebar"]}> array side bar</section>
    </div>
  );
};

export default SortSearchAlgorithmLayout;
