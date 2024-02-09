import React, { useContext, useState } from "react";
import styles from "./CodeSideBar.module.css";
import AlgorithmContext from "../../context/algorithm-context";
import { getAlgorithmCodes } from "../../lib/algorithms";
import SideBarContext from "../../context/side-bar-context";

const CodeSideBar = () => {
  const algoCtx = useContext(AlgorithmContext);
  const sideBarsCtx = useContext(SideBarContext);

  const codes = getAlgorithmCodes(algoCtx.algorithmType, algoCtx.algorithm);

  const [currentLang, setCurrentLang] = useState(
    !codes ? null : Object.values(codes)[0]
  );

  const changeCurrentLang = (lang) => {
    return () => {
      return setCurrentLang(lang);
    };
  };

  const closeBarHandler = () => {
    sideBarsCtx.toggleShowCodeSideBar();
  };

  // RESEARCH: How to display codes using html
  // RESEARCH: How codes are displayed on websites

  return (
    <div className={styles.wrapper}>
      <span className={styles["close-button"]} onClick={closeBarHandler}>
        x
      </span>
      {codes ? (
        <div className={styles.main}>
          <nav>
            <ul className={styles["language-ul"]}>
              {Object.keys(codes).map((language, index) => {
                return (
                  <li key={index} onClick={changeCurrentLang(language)}>
                    {language}
                  </li>
                );
              })}
            </ul>
          </nav>

          <code>{codes[currentLang]}</code>
        </div>
      ) : (
        <div className={styles["no-algo-selected-wrapper"]}>
          <span className={styles["no-algo-selected"]}>
            Please select an algorithm to see it's codes here
          </span>
        </div>
      )}
    </div>
  );
};

export default CodeSideBar;
