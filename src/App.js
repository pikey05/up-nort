import React, { useState, useContext } from 'react';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import UpNortImages from './components/UpNortImages/UpNortImages';
import Logo from './components/Logo/Logo';
import SiteNavigator from './components/SiteNavigator/SiteNavigator';
import NavContext from './store/nav-context';

const App = () => {
  const navCtx = useContext(NavContext);

  return (
    <React.Fragment>
      <SiteNavigator />
      <Logo />
      {navCtx.currentNavItem === 'Home' && <UpNortImages />}
      {navCtx.currentNavItem === 'About' && <About />}
      {navCtx.currentNavItem === 'Contact' && <Contact />}
    </React.Fragment>
  );
};

export default App;
