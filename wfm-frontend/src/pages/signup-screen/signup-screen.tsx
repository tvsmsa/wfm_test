import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import axios from 'axios';

export default function SignUpScreen(): JSX.Element {
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;
  const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

  /**const [firstName, setFirstName, firstNameError, processFirstNameValidation] = useValidationInput(
    checkNameValidity,
    'Имя должно состоять только из русских букв'
  );

  const [lastName, setLastName, lastNameError, processLastNameValidation] = useValidationInput(
    checkNameValidity,
    'Фамилия должна состоять только из русских букв'
  );

  const [login, setLogin, loginError, processLoginValidation] = useValidationInput(
    checkLoginValidity,
    'Логин должен быть длинее 3 символов'
  );

  const [password, setPassword, passwordError, processPasswordValidation] = useValidationInput(
    checkPasswordValidity,
    'Пароль должен содержать латинские буквы и цифры'
  );*/
  const [currentUser, setCurrentUser] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  /**const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (processFirstNameValidation() && processLastNameValidation() &&
      processLoginValidation() && processPasswordValidation()) {
      dispatch(signupAction({
        firstName: firstName,
        lastName: lastName,
        login: login,
        password: password,
      }));
    }
  };*/
  
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
      ).then(function(res) {
        setCurrentUser(true);
      });
    });
  }

  if (currentUser)
  {
    return (
      <h1 className="signup__title title-reset">Вы зарегистрированы</h1>
    )
  }
  return (
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
          <button className="signup__button btn-reset" type="submit">Зарегистрироваться</button>
        </form>
      </article>
    </Layout>
  );
}
