import s from './Footer.module.css';
import Logo from '../Logo/Logo';
import Button from 'components/Button/Button';
import Navigation from 'components/Navigation/Navigation';
import { ReactComponent as Facebook } from 'pics/facebook.svg';
import { ReactComponent as Linkedin } from 'pics/linkedin.svg';
import { ReactComponent as Twitter } from 'pics/twitter.svg';
import { ReactComponent as Youtube } from 'pics/youtube.svg';
import { ReactComponent as Instagram } from 'pics/Instagram.svg';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.container}>
          <p>©2020 Yourcompany</p>
          <Logo />
          <Button title="Purchase now" />
        </div>
        <div className={s.socialList}>
          <Navigation />
          <ul className={s.social}>
            <li>
              <a href="">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="">
                <Youtube />
              </a>
            </li>
            <li>
              <a href="">
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
