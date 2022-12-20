import React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';

const ContactItem = ({
  image,
  contactHref,
  data,
  blank,
  title,
  open,
  onDialogAction
}) => {
  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });

  return (
    <React.Fragment>
      {image}
      <Dialog
        open={open}
        // TransitionComponent={Transition}
        // keepMounted
        onClose={() => onDialogAction(false)}
        PaperProps={{
          style: {
            backgroundColor: '#333333',
            color: '#C4A484',
            padding: '2rem',
            overflowWrap: 'break-word'
          }
        }}
      >
        <DialogContentText>
          {blank ? (
            <a href={contactHref} target="_blank">
              {data}
            </a>
          ) : (
            <a href={contactHref}>{data}</a>
          )}
        </DialogContentText>
      </Dialog>
    </React.Fragment>
  );
};

export default ContactItem;
