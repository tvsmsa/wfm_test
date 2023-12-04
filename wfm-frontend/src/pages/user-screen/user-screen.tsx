import Layout from '../../components/layout';
import { AuthStatus } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAuthStatus } from '../../store/user-process/selectors';

export default function UserScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector(getAuthStatus);

  const hanldeLogoutButtonClick = () => {
    dispatch(logoutAction());
  };

  return (
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
            <div className="user__fisrt-name">Имя</div>
            <div className="user__last-name">Фамилия</div>
          </div>
        </div>
        {authStatus === AuthStatus.Auth ??
        <button onClick={hanldeLogoutButtonClick} className="user__signout-btn btn-reset">Выйти</button>}
      </article>
    </Layout>
  );
}
