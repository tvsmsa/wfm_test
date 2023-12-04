import Layout from '../../components/layout';

// export type SignUpScreenProps = {};

export default function SignUpScreen(): JSX.Element {
  return (
    <Layout>
      <article className="signup">
        <h1 className="signup__title title-reset">Регистрация</h1>
        <form className="signup__form" action="#">
          <div className="signup__input-group">
            <label className="signup__label visually-hidden" htmlFor="first-name">Имя</label>
            <input className="signup__input" type="first-name" placeholder="Имя" name="first-name" id="first-name"/>
          </div>
          <div className="signup__input-group">
            <label className="signup__label visually-hidden" htmlFor="last-name">Фамилия</label>
            <input className="signup__input" type="last-name" placeholder="Фамилия" name="last-name" id="last-name" />
          </div>
          <div className="signup__input-group">
            <label className="signup__label visually-hidden" htmlFor="login">Логин</label>
            <input className="signup__input" type="login" placeholder="Логин" name="login" id="login" />
          </div>
          <div className="signup__input-group">
            <label className="signup__label visually-hidden" htmlFor="password">Пароль</label>
            <input className="signup__input" type="password" placeholder="Пароль" name="password" id="password" />
          </div>
          <button className="signup__button btn-reset" type="submit">Зарегистрироваться</button>
        </form>
      </article>
    </Layout>
  );
}
