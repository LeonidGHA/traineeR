import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo';
import Button from 'components/Button/Button';

import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Navigation />
      <Logo />
      <Button title='Buy Now'/>
    </header>
  );
};

export default Header;
