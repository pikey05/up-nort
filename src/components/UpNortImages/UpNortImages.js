import React from 'react';

import Card from '../UI/Card';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from './UpNortImages.module.css';
import mobileStyles from './UpNortImagesMobile.module.css';

const UpNortImages = () => {
  const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  };

  const images = importAll(
    require.context('../../assets', false, /\.(jpe?g|svg)$/)
  );

  const largeWindow = useMediaQuery('(min-width:600px)');
  let imgCols = 3;
  let scrollBoxWidth = 700;
  let scrollBoxHeight = 550;
  let rowHeight = 164;
  let imgWidth = 164;
  let imgHeight = 164;
  let imgStyles = styles.upNort

  if (!largeWindow) {
    imgCols = 2;
    scrollBoxWidth = 350;
    scrollBoxHeight = 450;
    rowHeight = 164;
    imgWidth = 182;
    imgHeight = 164;
    imgStyles = mobileStyles.upNort
  }

  return (
    <Card className={imgStyles}>
      <ImageList
        sx={{ width: scrollBoxWidth, height: scrollBoxHeight }}
        gap={6}
        cols={imgCols}
        rowHeight={rowHeight}
      >
        {Object.keys(images).map((img) => (
          <ImageListItem key={img}>
            <img
              src={`${images[img]}?w=${imgWidth}&h=${imgHeight}&fit=crop&auto=format`}
              srcSet={`${images[img]}?w=${imgWidth}&h=${imgHeight}&fit=crop&auto=format&dpr=2 2x`}
              alt={img}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Card>
  );
};

export default UpNortImages;
