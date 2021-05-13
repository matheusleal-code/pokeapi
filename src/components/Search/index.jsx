import styles from './index.module.scss'

import { IoMdSearch } from 'react-icons/io'

function Search(props) {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.searchForm}>
          <div className={styles.searchGroup}>
            <label htmlFor="search" className={styles.srOnly}>Pesquisar</label>
            <input value={props.search} type="text" onChange={(e) => props.setSearch(e.target.value)} placeholder="Dígite o nome do Pokémon" />
            <button><IoMdSearch className={styles.icon} /></button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Search