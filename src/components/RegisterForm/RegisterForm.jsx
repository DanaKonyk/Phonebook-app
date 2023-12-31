import { useDispatch } from 'react-redux';
import { register } from '../../redux/authorization/operations';
import css from './RegisterForm.module.css';
import { Notify } from 'notiflix';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(`${originalPromiseResult.user.name} welcome!`);
      })
      .catch(() => {
        Notify.failure('Sorry, something went wrong');
      });
    form.reset();
  };
  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input className={css.input} type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <input className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input className={css.input} type="password" name="password" />
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
