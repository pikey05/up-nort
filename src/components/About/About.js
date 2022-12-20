import React from 'react';

import Card from '../UI/Card';
import styles from './About.module.css';

const About = () => {
  return (
    <Card className={styles.about}>
      <p>
        This Beautiful year round short term vacation rental is located just
        North of Eagle River, WI. Summer weekly rentals and 3 day minimum the
        rest of the year. The house will sleep 10 with 3 kings, one queen and a
        pull out couch. Large kitchen for prep and dining. Comfy family space.
        Boat, fish or snowmobile on North Twin lake. Walking, bike and ATV
        trails close by. Follow us on our Facebook page "Up Nort' Retreat".
      </p>
    </Card>
  );
};

export default About;
