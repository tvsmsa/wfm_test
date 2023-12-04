import { FormEventHandler } from 'react';
import Layout from '../../components/layout';
import { useAppDispatch } from '../../hooks';
import { signupAction } from '../../store/api-actions';
import useValidationInput from '../../hooks/use-validation-input';
import checkNameValidity from '../../shared/check-first-name-validity';
import checkLoginValidity from '../../shared/check-email-validity';
import checkPasswordValidity from '../../shared/check-password-validity';

export default function SignUpScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const [firstName, setFirstName, firstNameError, processFirstNameValidation] = useValidationInput(
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
  );

  const handleSubmit: FormEventHandler = (e) => {
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
  };

  return (
    <Layout>
      <article className="signup">
        <h1 className="signup__title title-reset">Регистрация</h1>
        <form onSubmit={handleSubmit} className="signup__form" action="#">
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
              value={login}
              onChange={(e) => setLogin(e.target.value)}
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
          {(firstNameError || lastNameError || loginError || passwordError) &&
          <div className='signup__error-message'>
            <p>{ firstNameError || lastNameError || loginError || passwordError }</p>
          </div>}
          <button className="signup__button btn-reset" type="submit">Зарегистрироваться</button>
        </form>
      </article>
    </Layout>
  );
}
