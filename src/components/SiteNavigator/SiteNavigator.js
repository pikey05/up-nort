import React, { useState, useContext } from 'react';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { IconContext } from 'react-icons';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  MdOutlineHome,
  MdInfoOutline,
  MdOutlineContactPage,
  MdMap
} from 'react-icons/md';
import NavContext from '../../store/nav-context';

const SiteNavigator = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navCtx = useContext(NavContext);

  const actions = [
    { icon: <MdOutlineHome />, name: 'Home' },
    { icon: <MdInfoOutline />, name: 'About' },
    { icon: <MdMap />, name: 'Map' },
    { icon: <MdOutlineContactPage />, name: 'Contact' }
  ];

  const theme = createTheme({
    palette: {
      primary: {
        main: '#917e60'
      },
      secondary: {
        main: '#2e3846'
      },
      mode: 'dark'
    }
  });

  return (
    <IconContext.Provider value={{ size: 20 }}>
      <ThemeProvider theme={theme}>
        <SpeedDial
          ariaLabel="site navigation"
          sx={{ position: 'absolute', top: 16, left: 16 }}
          FabProps={{
            sx: {
              bgcolor: 'primary',
              color: '#2e3846'
            }
          }}
          direction="right"
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              FabProps={{
                sx: {
                  bgcolor: 'rgb(40, 40, 40)',
                  color: '#917e60'
                }
              }}
              onClick={() => {
                navCtx.onSelectNavItem(action.name);
                handleClose();
              }}
            />
          ))}
        </SpeedDial>
      </ThemeProvider>
    </IconContext.Provider>
  );
};

export default SiteNavigator;
