// Set the context for the navigation bar
import React, { useState } from 'react';

const NavContext = React.createContext({
  currentNavItem: 'Home',
  onSelectNavItem: () => {}
});

export const NavContextProvider = ({ children }) => {
  const [currentNavItem, setCurrentNavItem] = useState('Home');

  const setCurrentNavItemHandler = (selectedItem) => {
    if (selectedItem === currentNavItem) {
      console.log(`${selectedItem} is already the selected nav item!`);
      return;
    }
    setCurrentNavItem(selectedItem)
  };

  return (
    <NavContext.Provider
      value={{
        currentNavItem,
        onSelectNavItem: setCurrentNavItemHandler
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
