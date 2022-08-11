import s from './Section.module.css';
import { ReactComponent as Pic } from 'assets/Icon.svg';

function Section1() {
  return (
    <div className="container">
      <div className={s.container}>
        <div style={{ width: '50%' }}>
          <h2 className={s.title}>Light, Fast {`&`} Powerful</h2>
          <p className={s.textDescription}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus <br />{' '}
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
          <ul className={s.list}>
            <li>
              <Pic className={s.icon} />
              <h3 className={s.textListTitle}>Title Goes Here</h3>
              <p className={s.textListDescription}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.{' '}
              </p>
            </li>
            <li>
              <Pic className={s.icon} />
              <h3 className={s.textListTitle}>Title Goes Here</h3>
              <p className={s.textListDescription}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.{' '}
              </p>
            </li>
          </ul>
        </div>
        <div style={{ width: '50%' }}>
          <img
            src={require('../../assets/undraw_mobile_login_ikmv.png')}
            alt="description"
          />
        </div>
      </div>
    </div>
  );
}

export default Section1;
