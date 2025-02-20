import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Dance Studio</div>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/schedule">Расписание</Link>
        <Link to="/trainers">Тренеры</Link>
        <Link to="/gallery">Галерея</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
    </header>
  );
};

export default Header;
