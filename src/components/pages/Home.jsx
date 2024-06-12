// src/components/pages/Home.jsx
import React from 'react';
import Banner from '../../components/Banner';
import LogementCard from '../../components/LogementCard';
import banner from '../../assets/images/banner.png';
import logements from '../../data/logements.json';

function Home() {
  return (
    <div className="body_home">
      <Banner
        image={banner}
        alt="Paysage - mer et rochers"
        text="Chez vous, partout et ailleurs"
        withShadowAndDarken={true}
      />
      <LogementCard logements={logements} />
    </div>
  );
}

export default Home;