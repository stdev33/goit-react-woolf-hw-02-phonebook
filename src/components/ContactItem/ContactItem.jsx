import React from 'react';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  return (
    <li className={css.contactItem}>
      <p className={css.contactText}>
        {name}: {number}
      </p>
    </li>
  );
};

export default ContactItem;
