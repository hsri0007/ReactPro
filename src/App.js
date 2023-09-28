import "./App.css";
import { useEffect, useState } from "react";

const data = ["chiru", "balayya", "nagarjuna"];

const fetchPokemon = (pokemon) => {
  const find = data.find((w) => w === pokemon);
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (find) {
        res(find);
      } else {
        rej("");
      }
    }, 1000);
  });
};

function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    setPokemon(null);
    if (!pokemonName) {
      return;
    }

    fetchPokemon(pokemonName)
      .then((ee) => {
        setPokemon(ee);
      })
      .catch(() => {
        setPokemon("");
      });
  }, [pokemonName]);

  if (!pokemonName) {
    return "Submit a pokemon";
  }

  if (pokemon === "") {
    return "No Pokemon founds";
  }

  if (!pokemon) {
    return "loading...";
  }

  return (
    <div className="App">
      <div
        style={{ border: "2px solid black", height: "30vh", marginTop: "10px" }}
      >
        {pokemon}
      </div>
    </div>
  );
}

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [name, setName] = useState("");

  console.log(typeof (<PokemonInfo />));
  console.log(typeof fetchPokemon);
  return (
    <>
      <div>
        {data?.map((w) => {
          return (
            <div
              onClick={() => {
                setPokemonName(w);
              }}
            >
              {w}
            </div>
          );
        })}
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button
          onClick={() => {
            setPokemonName(name);
          }}
        >
          submit
        </button>
      </div>
      <PokemonInfo pokemonName={pokemonName} />
    </>
  );
}

export default App;