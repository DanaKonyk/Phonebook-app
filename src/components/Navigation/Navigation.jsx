import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <div className={css.wrap}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/contacts" className={css.link}>
              Contacts
            </NavLink>
          )}
        </div>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};
