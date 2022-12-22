import React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const UpNortImageList = ({ largeWindow, images, onImageClick }) => {
  let imgCols = 3;
  let scrollBoxWidth = 700;
  let scrollBoxHeight = 550;
  let rowHeight = 164;
  let imgWidth = 164;
  let imgHeight = 164;

  if (!largeWindow) {
    imgCols = 2;
    scrollBoxWidth = 350;
    scrollBoxHeight = 450;
    rowHeight = 164;
    imgWidth = 182;
    imgHeight = 164;
  }

  return (
    <ImageList
      sx={{ width: scrollBoxWidth, height: scrollBoxHeight }}
      gap={6}
      cols={imgCols}
      rowHeight={rowHeight}
    >
      {images.map((img, index) => (
        <ImageListItem key={img.label}>
          <img
            src={`${img.imgPath}?w=${imgWidth}&h=${imgHeight}&fit=crop&auto=format`}
            srcSet={`${img.imgPath}?w=${imgWidth}&h=${imgHeight}&fit=crop&auto=format&dpr=2 2x`}
            alt={img.label}
            loading="lazy"
            onClick={() => {
              onImageClick(index);
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default UpNortImageList;
