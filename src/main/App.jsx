import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Pokemon from '../components/Pokemon';
import api from '../services/api';
import styles from './styles.module.scss'

function App() {

  const [pokemons, setPokemons] = useState([])
  const [more, setMore] = useState(20)
  const [isMore, setIsMore] = useState(true)

  useEffect(() => {
    function refresh() {
      api.get("?offset=0&limit=" + more).then(resp => setPokemons(resp.data.results))
    }
    refresh()
  }, [more])

  function loadMore() {
    if (more > 1120) {
      setIsMore(false)
    } else {
      setMore(more + 40)
    }
  }

  const loadPokemons = () => {
    return pokemons.map(pokemon => {
      return <Pokemon key={pokemon.name} name={pokemon.name} />
    })
  }

  return (
    <div className={styles.container}>
      <Header title="PokéApi" />

      <main>
        <section id={styles.pokemonsList}>
          <div className={styles.list}>
            {loadPokemons()}
          </div>
        </section>
        <div className={styles.more}>
          {isMore ? <button onClick={() => loadMore()}>Carregar Mais</button> : ""}
        </div>
      </main>
    </div>
  );
}

export default App;
