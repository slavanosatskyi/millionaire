import './Button.scss';

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return <button type="button" className="button">{text}</button>;
}

export default Button;
