import Layout from '../../components/layout';

// export type LoginScreenProps = {};

export default function LoginScreen(): JSX.Element {
  return (
    <Layout>
      <article className="signup">
        <h1 className="signup__title title-reset">Авторизация</h1>
        <form className="signup__form" action="#">
          <div className="signup__input-group">
            <label className="signup__label visually-hidden" htmlFor="login">Логин</label>
            <input className="signup__input" type="login" placeholder="Логин" name="login" id="login" />
          </div>
          <div className="signup__input-group">
            <label className="signup__label visually-hidden" htmlFor="password">Пароль</label>
            <input className="signup__input" type="password" placeholder="Пароль" name="password" id="password" />
          </div>
          <button className="signup__button btn-reset" type="submit">Войти</button>
          <button className="signup__button--reverse btn-reset" type="submit">Зарегистрироваться</button>
        </form>
      </article>
    </Layout>
  );
}
