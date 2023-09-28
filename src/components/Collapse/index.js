import '../../styles/components/collapse.css';
import arrow from "../../assets/imgs/arrow.png";
import React, { useState } from 'react';

function Collapse(props) {
    const [open, setOpen] = useState(false);
    const title = props.Title;
    const paragraph = props.Paragraph;
    let Elements = [];
    
    if(title === 'Équipements') {
      const elements = props.Elements

      Elements = elements.map((element, index) => (
          <li className="element" key={index}>{element}</li>
      ));
    }
    

    const handleClick = () => {
      setOpen(!open);
    };
    
    return (
        <div className="collapse">
          <button className="collapse-button" onClick={handleClick}>
            <span className="collapse-button_text">{title}</span>
            <img className={`collapse-button_arrow ${open ? 'open' : ''}`} src={arrow} alt="flèche d'ouverture/fermeture" />
          </button>
          {open ? (
            <div className="collapse-content">
              <div className="collapse-content_text">
                {title === 'Équipements' ? (
                  <ul className="elements">{Elements}</ul>
                ) : (
                  <p className="paragraph">{paragraph}</p>
                )}
              </div>
            </div>
          ) : null}
        </div>      
    );
}

export default Collapse;
