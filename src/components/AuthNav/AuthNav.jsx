import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.container}>
      <ul className={css.box}>
        <li className={css.item}>
          <NavLink to="/register" className={css.link}>
            Register
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/login" className={css.link}>
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
