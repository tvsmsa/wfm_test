type NavBurgerProps = {
  onBurgerClick: () => void;
};

export default function NavBurger({ onBurgerClick: handleBurgerClick }: NavBurgerProps): JSX.Element {
  return (
    <button onClick={handleBurgerClick} className="nav__burger btn-reset">
      <span className="nav__burger-line"></span>
      <span className="nav__burger-line"></span>
      <span className="nav__burger-line"></span>
    </button>
  );
}
