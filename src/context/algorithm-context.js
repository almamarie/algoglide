import React, { useState } from "react";
import algorithmsObject from "../lib/algorithms";
import {
  DEFAULT_ALGORITHM_SPEED,
  MAX_ALGORITHM_SPEED,
  MIN_ALGORITHM_SPEED,
} from "../lib/constants";

const signals = ["start", "stop", "pause"];

const AlgorithmContext = React.createContext({
  algorithmSpeed: DEFAULT_ALGORITHM_SPEED,
  algorithmType: null,
  algorithm: null,
  runningAlgorithmSignal: "stop",

  setAlgorithmSpeed: () => {},
  changeAlgorithmType: () => {},
  changeAlgorithm: () => {},
  signalRunningAlgorithm: () => {},
});

export const AlgorithmContextProvider = (props) => {
  const [algorithmSpeed, setAlgorithmSpeed] = useState(DEFAULT_ALGORITHM_SPEED);
  const [algorithmType, setAlgorithmType] = useState(null);
  const [algorithm, setAlgorithm] = useState(null);
  const [runningAlgorithmSignal, setRunningAlgorithmSignal] = useState("stop");

  const changeAlgorithmSpeed = (speed) => {
    if (speed < MIN_ALGORITHM_SPEED || speed > MAX_ALGORITHM_SPEED) return;
    setAlgorithmSpeed(speed);
  };

  const changeAlgorithmType = (algorithm) => {
    if (!algorithmsObject[algorithm]) return;
    setAlgorithmType(algorithm);
  };

  const changeAlgorithm = (algorithm) => {
    const algorithmExists = algorithmsObject[algorithmType].find(
      (algo) => Object.keys(algo)[0] === algorithm
    );
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
