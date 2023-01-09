import React, { useState } from 'react';

import UpNortImageList from './UpNortImageList/UpNortImageList';
import ImageViewer from './ImageViewer/ImageViewer';
import imageList from './ImportImages';
import CenterContent from '../UI/CenterContent';
import useMediaQuery from '@mui/material/useMediaQuery';

const UpNortImages = () => {
  const [showCollage, setShowCollage] = useState(true);
  const [selectedImage, setSelectedImage] = useState();
  const largeWindow = useMediaQuery('(min-width:600px)');
  let paperStyles = {
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
      padding: '13px'
    };
  }
  return (
    <CenterContent sxProps={paperStyles}>
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
    </CenterContent>
  );
};
export default UpNortImages;
