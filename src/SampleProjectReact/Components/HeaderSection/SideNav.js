import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';

const SideNav = ({ open, onClose }) => {
  const handleClick = () => {
    onClose(); // Call the onClose function to close the side navigation
  };

  return (
    <div>
      <List style={{ width: open ? '250px' : 0 }}> {/* Open/close the side navigation based on the "open" prop */}
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text} onClick={handleClick}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideNav;
