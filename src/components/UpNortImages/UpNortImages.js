import React, { useState } from 'react';

import Card from '../UI/Card';
import UpNortImageList from './UpNortImageList/UpNortImageList';
import ImageViewer from './ImageViewer/ImageViewer';
import imageList from './ImportImages';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from './UpNortImages.module.css';
import mobileStyles from './UpNortImagesMobile.module.css';

const UpNortImages = () => {
  const [showCollage, setShowCollage] = useState(true);
  const [selectedImage, setSelectedImage] = useState();
  const largeWindow = useMediaQuery('(min-width:600px)');
  let imgStyles = styles.upNort;

  if (!largeWindow) {
    imgStyles = mobileStyles.upNort;
  }

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
  }

  return (
    <Card className={imgStyles}>
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
    </Card>
  );
};
export default UpNortImages;
