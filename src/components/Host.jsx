function Host({ host }) {
  const alt = host.name
  const fullName = host.name
  const [firstName, lastName] = fullName.split(' ') // Diviser le nom complet en prénom et nom de famille à l'aide de la méthode split.

  return (
      <div className="host">
          <div className="host_name">
              <p>{firstName}</p>
              <p>{lastName}</p>
          </div>
          <img src={host.picture} alt={alt} className="host_picture" />
      </div>
  )
}

export default Host