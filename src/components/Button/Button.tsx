
import styles from './Button.module.css';
interface Props {
  children: string;
  color?:
    | "primary"
    | "sencondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick: () => void;
}
const Button = ({ children, color = "success", onClick }: Props) => {
  return (
    <button onClick={onClick} className={[styles.btn, styles['btn-'+ color]].join(' ')}>
      {children}
    </button>
  );
};

export default Button;
