import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.contact}>
      <span>{contact.name}: {contact.number}</span>
      <button className={styles.deleteButton} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;