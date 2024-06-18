import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import arrow from '/src/assets/images/fleche.png';


const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const switchCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : "0px";
      contentRef.current.style.padding = isOpen ? "10px 20px" : "0 20px";
    }
  }, [isOpen]);

  return (
    <div className="collapse_all">
      <div className="collapse_item">
        <div className="collapse" onClick={switchCollapse}>
          <h3 className="collapse_title">{title}</h3>
          <img
            src={arrow}
            alt="Flèche pour ouvrir ou fermer le contenu"
            className={`arrow ${isOpen ? "rotate" : ""}`}
          />
        </div>
      </div>

      <div
        ref={contentRef}
        className={`collapse_content_div ${isOpen ? "expand" : "collapsed"}`}
      >
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

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default Collapse;

