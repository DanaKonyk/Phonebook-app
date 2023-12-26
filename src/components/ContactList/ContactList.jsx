import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return contacts.length > 0 ? (
    <ul className={css.list}>
      {contacts.map(({ name, id, number }) => (
        <ContactItem key={id} name={name} id={id} phone={number} />
      ))}
    </ul>
  ) : (
    <p>No contact exists</p>
  );
};

export default ContactList;
