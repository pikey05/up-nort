import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ImageViewer = ({ images, selectedImage, largeWindow, onViewerClose }) => {
  const theme = useTheme();
  // Set first picture to the one selected
  const [activeStep, setActiveStep] = useState(selectedImage);
  const maxSteps = images.length;
  let closePadding = 39;

  const darkMode = createTheme({
    palette: {
      primary: {
        main: '#94c973'
      },
      mode: 'dark'
    }
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  let boxSize = {
    height: 450,
    display: 'block',
    maxWidth: 765,
    overflow: 'hidden',
    width: '100%'
  };

  if (!largeWindow) {
    closePadding = 13;
    boxSize = {
      height: 255,
      display: 'block',
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%'
    };
  }

  return (
    <ThemeProvider theme={darkMode}>
      <Box sx={{ maxWidth: 765, flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid xs={6}>
            <Paper
              square
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
                bgcolor: 'background.default'
              }}
            >
              {/* <Typography color="#94c973">
                {images[activeStep].label}
              </Typography> */}
            </Paper>
          </Grid>
          <Grid xs={6}>
            <Paper
              square
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: closePadding,
                bgcolor: 'background.default'
              }}
            >
              <Button onClick={onViewerClose} size="small">
                <CloseIcon />
              </Button>
            </Paper>
          </Grid>
        </Grid>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={boxSize}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </ThemeProvider>
  );
};

export default ImageViewer;
