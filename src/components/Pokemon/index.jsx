import { useEffect, useState } from 'react'
import api from '../../services/api'
import Card from '../Card'
import styles from './index.module.scss'

function Pokemon(props) {

  const [pokemon, setPokemon] = useState({})
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    function refresh() {
      api.get("" + props.name)
        .then(resp => setPokemon(resp.data))
        .then(() => setIsLoad(true))
    }
    refresh()
  }, [props])

  const renderPokemonCard = () => {
    return (
      <Card
        name={pokemon.name}
        img={pokemon.sprites.front_default}
        hp={pokemon.stats[0].base_stat}
        atk={pokemon.stats[1].base_stat}
        def={pokemon.stats[2].base_stat}
        sAtk={pokemon.stats[3].base_stat}
        sDef={pokemon.stats[4].base_stat}
        spd={pokemon.stats[5].base_stat}
      />
    )
  }


  return (
    <div className={styles.container}>
      {isLoad ? renderPokemonCard() : ""}
    </div>
  )
}

export default Pokemon