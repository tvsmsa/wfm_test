import { Link } from 'react-router-dom';
import { NavLinksData } from '../consts';

type NavLinksProps = {
  navOpened: boolean;
};

export default function NavLinks({ navOpened }: NavLinksProps): JSX.Element {
  return (
    <nav className="sidebar__nav nav">
      <ul className="nav__list list-reset">
        {NavLinksData.map((navLink) => (
          <li key={navLink.Title} className="nav__item">
            <Link to={navLink.Href} className="nav__link" title={navLink.Title}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <use xlinkHref={`#${navLink.Svg}`}></use>
              </svg>
              {navOpened &&
                <span className="nav__link-text">{ navLink.Title }</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
