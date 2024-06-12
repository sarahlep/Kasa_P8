import { useParams } from 'react-router-dom';
import Apparts from '../../data/logements.json'; 
import { useState } from 'react';
import Carrousel from '../../components/Carroussel'; 
import Collapse from '../../components/Collapse';
import '../../sass/logements.scss';
import Rating from "../../components/Rating.jsx";
import Tags from "../../components/Tags.jsx";


function Logement() {
  const { id } = useParams();
  const logement = Apparts.find((logement) => logement.id === id);
  const [index, setIndex] = useState(0);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const handleNext = () => {
    setIndex((index + 1) % logement.pictures.length);
  };

  const handlePrev = () => {
    setIndex(index === 0 ? logement.pictures.length - 1 : index - 1);
  };

  return (
    <div className="logement-details">
       <h1 className="titre-logement">{logement.title}</h1>
      <Carrousel pictures={logement.pictures} handlePrev={handlePrev} handleNext={handleNext} />
   
      <div className="host">
        <img src={logement.host.picture} alt={`Photo de ${logement.host.name}`} className='host-picture'/>
        <span>{logement.host.name}</span>
      </div>
      <div className="rating">
      <Rating rate={logement.rating} /></div>
      <p>{logement.location}</p>
      <div className="details">
      <div className="tags">
    {logement.tags.map(tag => (
        <span key={tag} className="tag">{tag}</span>
    ))}
    </div>
    <Collapse title="Description" content={logement.description} />
    <Collapse title="Équipements" content={logement.equipments}>
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
</div>
      
    </div>
  );
}

export default Logement;