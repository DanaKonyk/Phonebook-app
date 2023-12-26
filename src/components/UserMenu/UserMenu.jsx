import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/authorization/operations';
import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.box}>
      <p className={css.text}>Welcome, </p>
      <p className={css.text}>{user.name}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
