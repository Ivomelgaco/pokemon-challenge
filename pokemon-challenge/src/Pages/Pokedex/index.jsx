import NavBar from "../../Components/NavBar";
import "./style.css";
import Card from "../../Components/Card";

function Pokedex() {
  return (
    <div>
      <div className="pokedex-container">
        <NavBar />
        <h1 className="title-top">
          <span className="bold-text">Pokemons</span> choose your favorite
        </h1>
        <input
          style={{
            width: "63%",
            height: "36px",
            borderStyle: "none",
            backgroundColor: "#f2f2f2",
            marginTop: "70px",
            borderRadius: "15px",
            justifyContent: "center",
          }}
          type="text"
          placeholder="Pesquisar Pokémon"
        />
        <div className="box-cards">
          <div className="line1">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="line2">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="line3">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="line4">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
