import React from 'react';

import CenterContent from '../UI/CenterContent';
import useMediaQuery from '@mui/material/useMediaQuery';

const Map = () => {
  const largeScreen = useMediaQuery('(min-width:600px)');
  const styleProps = {
    padding: '12px',
    broderRadius: '12px'
  };
  let frameWidth = '800'
  let frameHeight = '600'

  if (!largeScreen) {
    frameWidth = '350'
    frameHeight = '250'
  }

  return (
    <CenterContent sxProps={styleProps}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.1600428371926!2d-89.11806158423576!3d46.047905902325176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d543cc95ebf9023%3A0xe11fce467909eb39!2s2744%20State%20Rd%2017%2C%20Phelps%2C%20WI%2054554!5e0!3m2!1sen!2sus!4v1673299741813!5m2!1sen!2sus"
        width={frameWidth}
        height={frameHeight}
        style={{ border: 0, borderRadius: '12px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </CenterContent>
  );
};

export default Map;
