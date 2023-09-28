import '../../styles/pages/notfound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="NotFound" >
        <h1 className="NotFound_title">404</h1>
        <span className="NotFound_text">Oups! La page que vous demandez n'existe pas.</span>
        <Link to="/" className="NotFound_link" >Retourner sur la page d’accueil</Link>
    </section>
  );
}

export default NotFound;

