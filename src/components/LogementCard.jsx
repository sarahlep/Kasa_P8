import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const LogementCard = ({ logements }) => {
  // Fonction pour diviser les logements en groupes de trois
  const groupLogements = (logements, groupSize) => {
    const groupedLogements = [];
    for (let i = 0; i < logements.length; i += groupSize) {
      groupedLogements.push(logements.slice(i, i + groupSize));
    }
    return groupedLogements;
  };

  // Diviser les logements en groupes de trois
  const groupedLogements = groupLogements(logements, 3);

  return (
    <div className="logement-container">
      {groupedLogements.map((group, index) => (
        <div className="logement-group" key={index}>
          {group.map((logement) => (
            <div className="logement-card" key={logement.id}>
              <Link to={`/logement/${logement.id}`}>
                <img className="logement-img" src={logement.cover} alt={logement.title} />
              </Link>
              <h2 className="logement-text">{logement.title}</h2>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

LogementCard.propTypes = {
  logements: PropTypes.array.isRequired
};

export default LogementCard;