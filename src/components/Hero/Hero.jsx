import Button from 'components/Button/Button';
import style from './hero.module.css';

export default function Hero() {
  return (
    <div className="container">
      <div className={style.heroWrap}>
        <h1 className={style.title}>
          Introduce Your Product Quickly {`&`} Effectively
        </h1>
        <p clasName="">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div style={{ display: 'flex', gap: '30px' }}>
          <Button title={'Purchase UI Kit'} />
          <Button title={'Learn More'} light={true} />
        </div>
      </div>
    </div>
  );
}
