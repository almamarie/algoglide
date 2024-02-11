import { useContext } from "react";
import BubbleSort from "../algorithms/bubble-sort/BubbleSort";
import ArraySideBar from "../side-bars/ArraySideBar";
import DataFormSidebar from "../side-bars/DataFormSidebar";
import styles from "./SortSearchAlgorithmLayout.module.css";
import AlgorithmContext from "../../context/algorithm-context";

const SortSearchAlgorithmLayout = (props) => {
  const algoCtx = useContext(AlgorithmContext);

  console.log("Algorithm: ", algoCtx.algorithm);
  const algorithmsJsx = {
    "bubble sort": <BubbleSort />,
  };
  return (
    <div className={styles.wrapper}>
      <section className={styles["data-form-sidebar"]}>
        <DataFormSidebar />
      </section>
      <section className={styles["graph-sidebar"]}>
        {algorithmsJsx[algoCtx.algorithm]}
      </section>
      <section className={styles["array-sidebar"]}>
        <ArraySideBar />
      </section>
    </div>
  );
};

export default SortSearchAlgorithmLayout;
