function Card({ name, description, link }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      )}
    </div>
  );
}

export default Card;
