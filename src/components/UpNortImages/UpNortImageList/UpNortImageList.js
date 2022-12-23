import React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const UpNortImageList = ({ largeWindow, images, onImageClick }) => {
  let imgCols = 3;
  let scrollBoxWidth = 700;
  let scrollBoxHeight = 550;
  let rowHeight = 164;

  if (!largeWindow) {
    imgCols = 2;
    scrollBoxWidth = 350;
    scrollBoxHeight = 450;
    rowHeight = 164;
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
            src={img.imgPath}
            srcSet={img.imgPath}
            alt={img.label}
            loading="lazy"
            style={{ cursor: "pointer" }}
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
