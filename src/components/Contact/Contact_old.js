import React, { useState } from 'react';

import Card from '../UI/Card';
import ContactItem from './ContactItem';
import { BsHouseDoor, BsTelephone, BsEnvelope, BsLink } from 'react-icons/bs';
import { imageStyle } from './ContactData';
import { IconContext } from 'react-icons';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from './Contact.module.css';

const Contact = () => {
  const [openAddress, setOpenAddress] = useState(false);
  const [openTelephone, setOpenTelephone] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openRental, setOpenRental] = useState(false);
  const largeWindow = useMediaQuery('(min-width:600px)');

  let mapWidth = "530"

  if (!largeWindow) {
    mapWidth = "250"
  }

  const contactData = [
    {
      image: <BsHouseDoor onClick={() => setOpenAddress(true)} />,
      href: 'https://goo.gl/maps/wyACQeG99EAzdNsK6',
      data: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.160228442116!2d-89.1158729!3d46.0479022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d543cc95ebf9023%3A0xe11fce467909eb39!2s2744%20State%20Rd%2017%2C%20Phelps%2C%20WI%2054554!5e0!3m2!1sen!2sus!4v1671651166957!5m2!1sen!2sus"
          width={mapWidth}
          height="350"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ),
      blank: true,
      title: 'Address',
      open: openAddress,
      setOpen: setOpenAddress,
      id: 1
    },
    {
      image: <BsTelephone onClick={() => setOpenTelephone(true)} />,
      href: 'tel:715-891-7286',
      data: '(715) 891-7286',
      blank: false,
      title: 'Telephone',
      open: openTelephone,
      setOpen: setOpenTelephone,
      id: 2
    },
    {
      image: <BsEnvelope onClick={() => setOpenEmail(true)} />,
      href: 'mailto:info@stepawayvacationrentals.com',
      data: 'info@stepawayvacationrentals.com',
      blank: false,
      title: 'Email',
      open: openEmail,
      setOpen: setOpenEmail,
      id: 3
    },
    {
      image: <BsLink onClick={() => setOpenRental(true)} />,
      href: 'https://www.stepawayvacationrentals.com/properties/up-nort-retreat',
      data: 'https://www.stepawayvacationrentals.com/properties/up-nort-retreat',
      blank: true,
      title: 'Rental Link',
      open: openRental,
      setOpen: setOpenRental,
      id: 4
    }
  ];

  return (
    <Card className={styles.contact}>
      {contactData.map((contact) => {
        return (
          <IconContext.Provider value={imageStyle} key={contact.id}>
            <span>
              <ContactItem
                image={contact.image}
                contactHref={contact.href}
                data={contact.data}
                blank={contact.blank}
                title={contact.title}
                open={contact.open}
                onDialogAction={contact.setOpen}
              />
            </span>
          </IconContext.Provider>
        );
      })}
    </Card>
  );
};

export default Contact;
