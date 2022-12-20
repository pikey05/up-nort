import React, { useState } from 'react';

import Card from '../UI/Card';
import ContactItem from './ContactItem';
import { BsHouseDoor, BsTelephone, BsEnvelope, BsLink } from 'react-icons/bs';
import { imageStyle } from './ContactData';
import { IconContext } from 'react-icons';
import styles from './Contact.module.css';

const Contact = () => {
  const [openAddress, setOpenAddress] = useState(false);
  const [openTelephone, setOpenTelephone] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openRental, setOpenRental] = useState(false);

  const contactData = [
    {
      image: <BsHouseDoor onClick={() => setOpenAddress(true)} />,
      href: 'https://goo.gl/maps/wyACQeG99EAzdNsK6',
      data: '2744 Hwy 17, Phelps, WI, United States, 54554',
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
