import './Header.css';

type HeaderProps = {
  message: string;
};

export default function Header({ message }: HeaderProps) {
  return <h1 className='header'>{message}</h1>;
}
