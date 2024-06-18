import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Rating({ rate }) {
  const stars = Array(5).fill(0).map((_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      className={index < rate ? 'star filled' : 'star'}
    />
  ));

  return (
    <div className="rating">
      {stars}
    </div>
  );
}

export default Rating;