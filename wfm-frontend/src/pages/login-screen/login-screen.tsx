import Layout from '../../components/layout';
import { ChangeEventHandler, FormEventHandler, MouseEventHandler, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../app-routes';

// export type LoginScreenProps = {};

export default function LoginScreen(): JSX.Element {
  const navigate = useNavigate();
  const dispath = useAppDispatch();

  const [formData, setFormData] = useState({ login: '', password: '' });
  const hanldeInputChange: ChangeEventHandler<HTMLInputElement> = (e) => setFormData((prev) => ({
    [e.target.name]: e.target.value,
    ...prev
  }));

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (formData.login.length && formData.password.length) {
      dispath(loginAction(formData));
    }
  };

  const handleSignupButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    navigate(AppRoutes.SignUp.FullPath);
  };

  return (
    <Layout>
      <article className="signup">
        <h1 className="signup__title title-reset">Авторизация</h1>
        <form onSubmit={handleSubmit} className="signup__form" action="#">
          <div className="signup__input-group">
            <label className="signup__label visually-hidden" htmlFor="login">Логин</label>
            <input
              value={formData.login}
              onChange={hanldeInputChange}
              className="signup__input"
              type="login"
              placeholder="Логин"
              name="login"
              id="login"
            />
          </div>
          <div className="signup__input-group">
            <label className="signup__label visually-hidden" htmlFor="password">Пароль</label>
            <input
              value={formData.password}
              onChange={hanldeInputChange}
              className="signup__input"
              type="password"
              placeholder="Пароль"
              name="password"
              id="password"
            />
          </div>
          <button className="signup__button btn-reset" type="submit">Войти</button>
          <button onClick={handleSignupButtonClick} className="signup__button--reverse btn-reset">Зарегистрироваться</button>
        </form>
      </article>
    </Layout>
  );
}
