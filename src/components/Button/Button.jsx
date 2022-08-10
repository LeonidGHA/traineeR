import style from './Button.module.css';

function Button({ title = 'not tittle', type = 'button', light = false }) {
  return (
    <button className={light ? style.light : style.btn} type={type}>
      {title}
    </button>
  );
}

export default Button;
