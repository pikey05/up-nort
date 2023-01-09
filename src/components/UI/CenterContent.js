import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const CenterContent = ({ children, sxProps }) => {
  const paperStyles = {
    ...sxProps,
    backgroundColor: 'rgb(40, 40, 40)',
    borderRadius: '12px',
    color: '#C4A484',
    marginBottom: '5rem'
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      // style={{ minHeight: '100vh' }}
    >
      <Grid>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Paper sx={paperStyles} elevation={16}>
            {children}
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CenterContent;
