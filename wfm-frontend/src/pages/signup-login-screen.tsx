import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import axios from 'axios';

export default function SignUpLoginScreen(): JSX.Element {
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;
  const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

  const [currentUser, setCurrentUser] = useState(false);
  const [registrationToggle, setRegistrationToggle] = useState(false)
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('');
  const currentFirstName = ''

  function update_form_btn() {
    if (registrationToggle) {
      setRegistrationToggle(false);
    } else {
      setRegistrationToggle(true);
    }
  }
  
  useEffect(() => {
    client.get("/api/user")
    .then(function(res) {
      setCurrentUser(true);
    })
    .catch(function(error) {
      setCurrentUser(false);
    });
  }, []);

  axios.get('http://localhost:3000/attempt', {
  params: {
    quiz_id: 6
  }
}).then((res) => {
   // handle success
   console.log(res);
  });

  function submitRegistration(e:any) {
    e.preventDefault();
    client.post(
      "/api/register",
      {
        username: username,
        first_name: firstName,
        last_name: lastName,
        password: password
      }
    ).then(function(res) {
      client.post(
        "/api/login",
        {
          username: username,
          password: password
        }
      ).then (function(res) {
        setCurrentUser(true);
      });;
    });
  }

  function submitLogin(e:any) {
    e.preventDefault();
    client.post(
      "/api/login",
      {
        username: username,
        password: password
      }
    ).then(function(res) {
      setCurrentUser(true);
    });;
  }

  function submitLogout(e:any) {
    e.preventDefault();
    client.post(
      "/api/logout",
      {withCredentials: true}
    ).then(function(res) {
      setCurrentUser(false);
    });
  }

  if (currentUser)  return(
    <Layout>
    <article className="user">
      <div className="user__info">
        <div className="user__image">
          <svg width="270" height="270" viewBox="0 0 270 270" fill="none">
            <rect width="270" height="270" rx="40" fill="#5B5E5F" />
            <use xlinkHref="#user"></use>
          </svg>
        </div>
        <div className="user__data">
          <div className="user__fisrt-name">{firstName}</div>
          <div className="user__last-name">{lastName}</div>
        </div>
      </div>
      <form onSubmit={submitLogout}>
      <button className="user__signout-btn btn-reset" type='submit'>Выйти</button>
      </form>
    </article>
  </Layout>
  )
  return (
    registrationToggle ? (
    <Layout>
      <article className="signup">
        <h1 className="signup__title title-reset">Регистрация</h1>
        <form onSubmit={e=>submitRegistration(e)} className="signup__form" action="#">
          <div className="signup__input-group">
            <label className="signup__label visually-hidden" htmlFor="first-name">Имя</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="signup__input"
              type="first-name"
              placeholder="Имя"
              name="first-name"
              id="first-name"
            />
          </div>
          <div className="signup__input-group">
            <label className="signup__label visually-hidden" htmlFor="last-name">Фамилия</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="signup__input"
              type="last-name"
              placeholder="Фамилия"
              name="last-name"
              id="last-name"
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