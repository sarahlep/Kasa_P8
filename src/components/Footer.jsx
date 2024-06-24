import React from 'react';
import logo_footer from '/src/assets/images/footer.png'; // Utilisation d'un chemin absolu


function Footer() {
  return (
      <div className="footer_background">
          <img src={logo_footer} alt="KASA logo" className="footer_logo" />
          <p className="footer_text">© 2020 Kasa. All rights reserved</p>
      </div>
  )
}

export default Footer