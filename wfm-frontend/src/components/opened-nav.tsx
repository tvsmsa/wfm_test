import NavBurger from './nav-burger';
import NavLinks from './nav-links';

export type OpenedNavProps = {
  onBurgerClick: () => void;
};

export default function OpenedNav({ onBurgerClick: handleBurgerClick }: OpenedNavProps) : JSX.Element {
  return (
    <div className="container--opened-menu">
      <aside className="sidebar--opened">
        <div className="sidebar__header">
          <div className="sidebar__logo">
            <svg width="221" height="16" viewBox="0 0 221 16" fill="none">
              <use xlinkHref="#logo"></use>
            </svg>
          </div>
          <NavBurger onBurgerClick={handleBurgerClick} />
        </div>
        <NavLinks navOpened />
      </aside>
    </div>
  );
}
