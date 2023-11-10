import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../Components/NavBar";
import Card from "../../Components/Card";
import "./style.css";

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokemonList(response.data.results);
      } catch (error) {
        console.error("Error fetching Pokemon list:", error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
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
          marginTop: "35px", // Reduzi o marginTop
          borderRadius: "15px",
          justifyContent: "center",
        }}
        type="text"
        placeholder="Pesquisar Pokémon"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Pokedex;
/*<div className="box-cards">
        {pokemonList
          .filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((pokemon) => (
            <Card key={pokemon.name} name={pokemon.name} />
          ))}
      </div>*/
