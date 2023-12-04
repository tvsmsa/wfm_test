import { PropsWithChildren, useState } from 'react';
import { AppRoutes } from '../app-routes';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { getAuthStatus } from '../store/user-process/selectors';
import { AuthStatus } from '../consts';
import OpenedNav from './opened-nav';
import NavBurger from './nav-burger';
import NavLinks from './nav-links';

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps): JSX.Element {
  const [isNavOpened, setNavOpened] = useState(false);
  const handleBurgerClick = () => setNavOpened((prev) => !prev);

  const authStatus = useAppSelector(getAuthStatus);

  return(
    <div className="container">
      {isNavOpened &&
        <OpenedNav onBurgerClick={handleBurgerClick} />}
      <aside className="sidebar">
        <NavBurger onBurgerClick={handleBurgerClick} />
        <NavLinks navOpened={false} />
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
