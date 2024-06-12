import React, { useState } from "react";
import arrow from '/src/assets/images/fleche.png';
import '../sass/collapse.scss';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const switchCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse_all">
      <div className="collapse_item">
        <div className="collapse">
          <h3 className="collapse_title">{title}</h3>
          <img
            src={arrow}
            alt="Flèche pour ouvrir ou fermer le contenu"
            className={`arrow ${isOpen ? "rotate" : ""}`}
            onClick={switchCollapse}
          />
        </div>
      </div>

      <div className={`collapse_content_div ${isOpen ? "expand" : "collapsed"}`}>
        {Array.isArray(content) ? (
          <ul className="collapse_list">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="collapse_content">{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;