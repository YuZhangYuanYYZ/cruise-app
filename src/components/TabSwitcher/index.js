import React, { createContext, useContext, useState } from 'react';

const TabContext = createContext({
  activeTabId: '',
  changeTab: () => {},
});

const Tab = ({ id, children }) => {
  const { changeTab } = useContext(TabContext);
  return <div onClick={() => changeTab(id)}>{children}</div>;
};

const TabPanel = ({ whenActive, children }) => {
  const { activeTabId } = useContext(TabContext);
  return activeTabId === whenActive ? <div>{children}</div> : null;
};

function TabSwitcher(props) {
  const [activeTabId, setActiveTabId] = useState('a');

  const changeTab = (newTabId) => {
    setActiveTabId(newTabId);
  };

  return (
    <TabContext.Provider
      value={{
        activeTabId: activeTabId,
        changeTab: changeTab,
      }}
    >
      {props.children}
    </TabContext.Provider>
  );
}

export default TabSwitcher;
export { Tab, TabPanel };
