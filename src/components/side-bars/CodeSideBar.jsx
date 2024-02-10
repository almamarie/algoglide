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
    !codes ? null : Object.keys(codes)[0]
  );
  const [codeCopied, setCodeCopied] = useState(false);

  const changeCurrentLang = (lang) => {
    return () => {
      setCurrentLang(lang);
      return setCurrentLang(lang);
    };
  };

  const closeBarHandler = () => {
    sideBarsCtx.toggleShowCodeSideBar();
  };

  const copyCodeToClipboard = () => {
    setCodeCopied(true);
    navigator.clipboard.writeText(codes[currentLang]);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles["close-button"]} onClick={closeBarHandler}>
        x
      </span>

      {codes ? (
        <main className={styles.main}>
          <span className={styles["copy-button"]} onClick={copyCodeToClipboard}>
            {codeCopied ? "copied" : "copy"}
          </span>
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

          <pre>
            <code className={styles.code}>{codes[currentLang]}</code>
          </pre>
        </main>
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
