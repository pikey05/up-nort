// docker run --rm -itd --name up-nort --workdir=/opt/app -v $(pwd):/opt/app -p 0.0.0.0:3000:3000 -e APP_ENV=DEV --entrypoint /bin/sh node:20.9.0-alpine3.18

import React, { useState, useContext } from 'react';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import UpNortImages from './components/UpNortImages/UpNortImages';
import Logo from './components/Logo/Logo';
import SiteNavigator from './components/SiteNavigator/SiteNavigator';
import Map from './components/Map/Map'
import NavContext from './store/nav-context';

const App = () => {
  const navCtx = useContext(NavContext);

  return (
    <React.Fragment>
      <SiteNavigator />
      <Logo />
      {navCtx.currentNavItem === 'Home' && <UpNortImages />}
      {navCtx.currentNavItem === 'About' && <About />}
      {navCtx.currentNavItem === 'Map' && <Map />}
      {navCtx.currentNavItem === 'Contact' && <Contact />}
    </React.Fragment>
  );
};

export default App;
