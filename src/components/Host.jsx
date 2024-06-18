function Host({ host }) {
    const [firstName, lastName] = host.name.split(' ');
  
    return (
      <div className="host">
        <img 
          src={host.picture} 
          alt={`Photo de ${host.name}`} 
          className="host-picture" 
        />
        <div className="host-name">
          <span className="host-first-name">{firstName}</span>
          <span className="host-last-name">{lastName}</span>
        </div>
      </div>
    );
  }
  
  export default Host;