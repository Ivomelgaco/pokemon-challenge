import NavBar from "../../Components/NavBar";
import MainButton from "../../Components/mainButton";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <div className="bg">
      <NavBar />
      <img
        className="banner"
        src="/BannerComplete.png"
        alt="Imagem do Pikaxu"
      />
      <h1 className="title">
        <span className="bold-text">Find</span> all your
        <br /> favorite <span className="bold-text">pokemon</span>
      </h1>
      <p className="paragraph">
        You can know the type of Pokemon, its strengths,
        <br /> disadvantages and abilities.
      </p>
      <Link to={"/pokedex"}>
        <MainButton />
      </Link>
    </div>
  );
}

export default Home;
