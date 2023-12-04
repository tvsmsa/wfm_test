import { PropsWithChildren } from 'react';
import { AppRoutes } from '../app-routes';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { getAuthStatus } from '../store/user-process/selectors';
import { AuthStatus } from '../consts';

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  return(
    <div className="container">
      <aside className="sidebar">
        <button className="nav__burger btn-reset">
          <span className="nav__burger-line"></span>
          <span className="nav__burger-line"></span>
          <span className="nav__burger-line"></span>
        </button>
        <nav className="sidebar__nav nav">
          <ul className="nav__list list-reset">
            <li className="nav__item">
              <Link to={AppRoutes.Main.FullPath} className="nav__link">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <use xlinkHref="#wfm"></use>
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-container">
        <header className="header">
          <div className="header__logo">
            <svg width="221" height="16" viewBox="0 0 221 16" fill="none">
              <use xlinkHref="#logo"></use>
            </svg>
          </div>
          {authStatus === AuthStatus.Auth
            ?
            <Link to={AppRoutes.User.FullPath} className="header__user-link">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <use xlinkHref="#user"></use>
              </svg>
            </Link>
            : <div className='header__user-link' />}
        </header>
        { children }
      </main>
    </div>
  );
}
