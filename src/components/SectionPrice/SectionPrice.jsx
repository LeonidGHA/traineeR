import s from './SectionPrice.module.css';

import Button from 'components/Button/Button';

function SectionPrice() {
  return (
    <div className="container">
      <div className={s.container}>
        <h2 className={`title ${s.title}`}>A Price To Suit Everyone</h2>
        <p className={`textDescription ${s.textDescription}`}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </p>
        <p className={s.price}>$40</p>
        <p className={s.priceDescription}>UI Design Kit</p>
        <p className={s.btnDescription}> See, One price. Simple.</p>
        <Button title="Purchase Now :)" />
      </div>
    </div>
  );
}

export default SectionPrice;
