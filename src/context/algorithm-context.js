import React, { useState } from "react";
import algorithmsObject from "../lib/algorithms";

const defaultAlgorithmSpeed = 1000;
const signals = ["start", "stop", "pause"];
const algorithmTypes = Object.keys(algorithmsObject);

const AlgorithmContext = React.createContext({
  algorithmSpeed: defaultAlgorithmSpeed,
  algorithmType: null,
  algorithm: null,
  runningAlgorithmSignal: "stop",

  setAlgorithmSpeed: () => {},
  changeAlgorithmType: () => {},
  changeAlgorithm: () => {},
  signalRunningAlgorithm: () => {},
});

export const AlgorithmContextProvider = (props) => {
  const [algorithmSpeed, setAlgorithmSpeed] = useState(defaultAlgorithmSpeed);
  const [algorithmType, setAlgorithmType] = useState(null);
  const [algorithm, setAlgorithm] = useState(null);
  const [runningAlgorithmSignal, setRunningAlgorithmSignal] = useState("stop");

  const changeAlgorithmSpeed = (speed) => {
    if (speed < 1 || speed > 10000) return;
    setAlgorithmSpeed(speed);
  };

  const changeAlgorithmType = (algorithm) => {
    if (!algorithmTypes[algorithm]) return;
    setAlgorithmType(algorithm);
  };

  const changeAlgorithm = (algorithm) => {
    const algorithmExists = algorithmsObject[algorithmType].find(algorithm);
    if (!algorithmExists) return;

    setAlgorithm(algorithm);
  };

  const signalRunningAlgorithm = (signal) => {
    if (!signals.find(signal)) return;
    setRunningAlgorithmSignal(signal);
  };

  return (
    <AlgorithmContext.Provider
      value={{
        algorithmSpeed,
        algorithmType,
        algorithm,
        runningAlgorithmSignal,
        setAlgorithmSpeed: changeAlgorithmSpeed,
        changeAlgorithmType,
        changeAlgorithm,
        signalRunningAlgorithm,
      }}
    >
      {props.children}
    </AlgorithmContext.Provider>
  );
};

export default AlgorithmContext;
