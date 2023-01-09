import React from 'react';

import CenterContent from '../UI/CenterContent';
import useMediaQuery from '@mui/material/useMediaQuery';

const About = () => {
  const largeScreen = useMediaQuery('(min-width:600px)');
  let styleProps = {
    maxWidth: '500px',
    paddingLeft: '20px',
    paddingRight: '20px'
  };

  if (!largeScreen) {
    styleProps = {
      maxWidth: '300px',
      paddingLeft: '20px',
      paddingRight: '20px'
    };
  }

  return (
    <CenterContent sxProps={styleProps}>
      <p>
        This beautiful year-round, short-term vacation rental is located just
        north of Eagle River, WI with dock access to North Twin Lake. The home
        sleeps 10 with three kings, one queen, and a pull-out couch. It features
        a large, gourmet kitchen for preparation, dining, and entertaining. The
        family room provides a cozy, comfortable gathering space with
        picturesque views. The home is ideally located for a range of
        recreational activities. North Twin Lake offers a variety of winter and
        summer activies, including boating, swimming, fishing, and snowmobiling.
        Walking, bike, and ATV trails are close by for additional recreational
        options. Rental time is weekly in the summer and a three day minimum the
        remainder of the year. Follow us on our Facebook page "Up Nort'
        Retreat".
      </p>
    </CenterContent>
  );
};

export default About;
