import React, { useState } from 'react';

import UpNortImageList from './UpNortImageList/UpNortImageList';
import ImageViewer from './ImageViewer/ImageViewer';
import imageList from './ImportImages';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const UpNortImages = () => {
  const [showCollage, setShowCollage] = useState(true);
  const [selectedImage, setSelectedImage] = useState();
  const largeWindow = useMediaQuery('(min-width:600px)');
  let paperStyles = {
    backgroundColor: 'rgb(40, 40, 40)',
    paddingLeft: '13px',
    paddingRight: '13px'
  };

  // Import images dynamically if we choose to do so
  // const importAll = (r) => {
  //   let images = {};
  //   r.keys().forEach((item, index) => {
  //     images[item.replace('./', '')] = r(item);
  //   });
  //   return images;
  // };

  // const images = importAll(
  //   require.context('../../assets', false, /\.(jpe?g|svg)$/)
  // );

  const imageClickHandler = (image) => {
    setSelectedImage(image);
    setShowCollage(false);
  };

  const closeViewerHandler = () => {
    setShowCollage(true);
  };

  if (!showCollage) {
    paperStyles = {
      backgroundColor: 'rgb(40, 40, 40)',
      padding: '13px'
    };
  }

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
          <Paper sx={paperStyles} elevation={3}>
            {showCollage && (
              <UpNortImageList
                largeWindow={largeWindow}
                images={imageList}
                onImageClick={imageClickHandler}
              />
            )}
            {!showCollage && (
              <ImageViewer
                images={imageList}
                selectedImage={selectedImage}
                largeWindow={largeWindow}
                onViewerClose={closeViewerHandler}
              />
            )}
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};
export default UpNortImages;
