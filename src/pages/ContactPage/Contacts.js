import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import {
  selectContacts,
  getError,
  getIsLoading,
} from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import css from './Contacts.module.css';

export default function Contacts() {
  const listOfContacts = useSelector(selectContacts);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.box}>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </div>
<div>{loading && !error ? (
        <p>Loading...</p>
      ) : (
        <>
          {listOfContacts && listOfContacts.length > 0 ? (
            <>
                <h2 className={css.title}>Contacts</h2>
              <Filter />
              <ContactList />
            </>
          ) : (
            <p>Your contact list is empty</p>
          )}
        </>
      )}</div>
      
    </div>
  );
}
