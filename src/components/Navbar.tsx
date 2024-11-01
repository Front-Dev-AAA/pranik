
import { Link } from 'react-router-dom';
import './Navbar.css';
import useAuth from './useAuth';

export default function Navbar() {
  // хук авторизации
  const { isAuthenticated } = useAuth();
  return (
    <>
      <nav>
         <Link to="/admin" className={isAuthenticated ? 'myLink__false' : 'myLink__true'}>Открыть базу ... </Link>
        {isAuthenticated ? <Link className='myLink__true' to="/logout">Выйти из режима авторизации</Link> : false}
      </nav>
    </>

  )
}
