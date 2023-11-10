import "./style.css";

// eslint-disable-next-line react/prop-types
function Card({ name, imageUrl, type }) {
  return (
    <div className="card-container">
      <div className="box-left">
        {/* Adicione uma imagem do Pokémon */}
        <img src={imageUrl} alt={name} />
      </div>
      <div className="box-right">
        {/* Adicione o nome e o tipo do Pokémon */}
        <h3>{name}</h3>
        <p>Type: {type}</p>
      </div>
    </div>
  );
}

export default Card;
