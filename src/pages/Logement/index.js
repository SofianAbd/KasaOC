import '../../styles/pages/logement.css';
import { useParams } from "react-router-dom";
import locations from "../../logements.json"

import Carousel from "../../components/Carrousel";
import Collapse from "../../components/Collapse";
import Tags from '../../components/Tags';
import Rate from '../../components/Rate'

function Logement() {
  const { id } = useParams()
  const logement = locations.find(location => location.id === id)

  return (
    <section className="Logement">
      <Carousel images={logement.pictures} />
      <div className="Logement-introduction">
        <div className="Logement-introduction_infos">
          <h1 className="Logement-introduction_infos-title" >{logement.title}</h1>
          <span className="Logement-introduction_infos-location" >{logement.location}</span>
          <Tags tags={logement.tags}/>            
        </div>
        <div className="Logement-introduction_hostnrate">
          <div className="Logement-introduction_host">
            <span className="Logement-introduction_host-name">{logement.host.name}</span>
            <img className="Logement-introduction_host-photo" src={logement.host.picture} alt={logement.host.name} />
          </div>
          <Rate Rate={logement.rating}/>
        </div>
      </div>
      <div className="Logement-details">
        <Collapse className="Logement-details_details" Title="Description" Paragraph={logement.description}/>
        <Collapse className="Logement-details_items" Title="Équipements" Elements={logement.equipments} />
      </div>
    </section>
  );
}

export default Logement;
