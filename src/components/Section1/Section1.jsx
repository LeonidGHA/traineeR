import s from './Section1.module.css';
import { ReactComponent as Pic } from 'pics/Icon.svg';

const Section1 = () => {
  return (
    <div className="container">
      <div className={s.containerSection1} style={{ width: '50%' }}>
        <div>
        <h2 className={s.title}>Light, Fast & Powerful</h2>
        <p className={s.txt}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>

        <ul className={s.list}>
          <li>
            <Pic className={s.icon} />
            <h3 className={s.titleItem}>Title Goes Here</h3>
            <p className={s.descItem}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </li>

          <li>
            <Pic className={s.icon} />
            <h3 className={s.titleItem}>Title Goes Here</h3>
            <p className={s.descItem}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </li>
        </ul>
        </div>

        <div style={{ width: '50%' }}>
          <img src={require('../../pics/img-sect.png')} alt="Big picture" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
