import { Link } from 'react-router-dom';
import './header.css';

export function Header() {

  


  return (
    <div className="header">
      <Link className="logo" to="/">Flag Quizz</Link>
      <div className="header-right">
        <Link className="active" to="/"  >Home</Link>
        <Link to="/contact" className='contact'>Contact</Link>
        <Link to="/about" className='about'>About</Link>
      </div>
    </div>
  );
}
