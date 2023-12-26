import css from './Home.module.css'

export default function Home() {
  return (
    <div className={css.box}>
      <h1 className={css.title}>
        Welcome!
      </h1>
      <p className={css.text}>Here you can create your personal phonebook.</p>
      <p className={css.text}>Feel free to register and start.</p>
    </div>
  );
}