import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={styles.contactList}>
      {contacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;