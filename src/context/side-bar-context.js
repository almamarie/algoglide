import React, { useState } from "react";

const SideBarContext = React.createContext({
  showCodeSideBar: true,
  showDataFormSideBar: true,
  toggleShowCodeSideBar: () => {},
  toggleShowDataFormSideBar: () => {},
});

export const SideBarContextProvider = (props) => {
  const [showCodeSideBar, setShowCodeSideBar] = useState(true);
  const [showDataFormSideBar, setShowDataFormSideBar] = useState(true);

  const toggleShowCodeSideBar = () => {
    setShowCodeSideBar((prev) => !prev);
  };

  const toggleShowDataFormSideBar = () => {
    setShowDataFormSideBar((prev) => !prev);
  };

  return (
    <SideBarContext.Provider
      value={{
        showCodeSideBar,
        showDataFormSideBar,
        toggleShowCodeSideBar,
        toggleShowDataFormSideBar,
      }}
    >
      {props.children}
    </SideBarContext.Provider>
  );
};

export default SideBarContext;
