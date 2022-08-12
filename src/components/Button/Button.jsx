import s from './Button.module.css';

const Button = ({ title = 'no title', type = 'button', light = false }) => {
  return <button className={light ? s.light : s.btn} type={type}>{title}</button>;
};

export default Button;
