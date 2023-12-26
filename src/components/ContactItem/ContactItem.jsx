import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './ContactItem.module.css';

const ContactItem = ({ name, id, phone }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      {name + ': ' + phone}
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
