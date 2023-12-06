import { useEffect, ChangeEventHandler, FormEventHandler, MouseEventHandler, useState } from 'react';
import Layout from '../components/layout';
import axios from 'axios';
import { useAppDispatch } from '../hooks';
import { loginAction } from '../store/api-actions';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../app-routes';

export default function SignUpLoginScreen(): JSX.Element {
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;
  const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

  const [registrationToggle, setRegistrationToggle] = useState(false)
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  function update_form_btn() {
    if (registrationToggle) {
      setRegistrationToggle(false);
    } else {
      setRegistrationToggle(true);
    }
  }
  
  function submitRegistration(e:any) {
    e.preventDefault();
    client.post(
      "/api/register",
      {
        email: email,
        username: username,
        password: password
      }
    ).then(function(res) {
      client.post(
        "/api/login",
        {
          email: email,
          password: password
        }
      );
    });
  }

  function submitLogin(e:any) {
    e.preventDefault();
    client.post(
      "/api/login",
      {
        email: email,
        password: password
      }
    );
  }

  return (
    registrationToggle ? (
    <Layout>
      <article className="signup">
        <h1 className="signup__title title-reset">Регистрация</h1>
        <form onSubmit={e=>submitRegistration(e)} className="signup__form" action="#">
          <div className="signup__input-group">
            <label className="signup__label visually-hidden" htmlFor="first-name">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup__input"
              type="first-name"
              placeholder="Email"
              name="first-name"
              id="first-name"
            />
          </div>
          <div className="signup__input-group">
            <label className="signup__label visually-hidden" htmlFor="login">Логин</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup__input"
              type="password"
              placeholder="Пароль"
              name="password"
              id="password"
            />
          </div>
          <button className="signup__button btn-reset" type="submit" value="Submit">Зарегистрироваться</button>
        </form>
      </article>
    </Layout>
    )
    :(
        <Layout>
        <article className="signup">
          <h1 className="signup__title title-reset">Авторизация</h1>
          <form onSubmit={e=>submitLogin(e)} className="signup__form" action="#">
            <div className="signup__input-group">
              <label className="signup__label visually-hidden" htmlFor="login">Логин</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signup__input"
                type="password"
                placeholder="Пароль"
                name="password"
                id="password"
              />
            </div>
            <button className="signup__button btn-reset" type="submit">Войти</button>
            <button onClick={update_form_btn} className="signup__button--reverse btn-reset">Зарегистрироваться</button>
          </form>
        </article>
      </Layout>
    )
  );
}