import '../../styles/components/card.css';
import { Link } from 'react-router-dom';

function Card(props) {
    const location = props.Location
    return (
      <figure className="card">
        <Link to={`logement/${location.id}`} >
            <img src={location.pictures[0]} alt={location.title} className="card-img"/>
            <figcaption className="card-caption">
                <span className="card-caption_text">{location.title}</span>
            </figcaption>
        </Link>
      </figure>
    );
}

export default Card;
