import styles from './index.module.scss'

function Card(props) {

  return (
    <div className={styles.flipContainer}>
      <div className={styles.flipper}>
        <div className={styles.front}>
          <img src={props.img} alt={props.name} />
          <div className={styles.curve}>
            <p>{props.name}</p>
          </div>
        </div>
        <div className={styles.back}>
          <p>{props.name}</p>
          <img src={props.img} alt={props.name} />
          <div className={styles.stats}>
            <p>Estatísticas</p>
            <div className={styles.progressStats} style={{ '--width': `${props.hp}%` }}>
              <span>HP</span>
              <div className={styles.progressBar}>
              </div>
              <span>{props.hp}</span>
            </div>
            <div className={styles.progressStats} style={{ '--width': `${props.atk}%` }}>
              <span>ATK</span>
              <div className={styles.progressBar}>
              </div>
              <span>{props.atk}</span>
            </div>
            <div className={styles.progressStats} style={{ '--width': `${props.def}%` }}>
              <span>DEF</span>
              <div className={styles.progressBar}>
              </div>
              <span>{props.def}</span>
            </div>
            <div className={styles.progressStats} style={{ '--width': `${props.sAtk}%` }}>
              <span>S.ATK</span>
              <div className={styles.progressBar}>
              </div>
              <span>{props.sAtk}</span>
            </div>
            <div className={styles.progressStats} style={{ '--width': `${props.sDef}%` }}>
              <span>S.DEF</span>
              <div className={styles.progressBar}>
              </div>
              <span>{props.sDef}</span>
            </div>
            <div className={styles.progressStats} style={{ '--width': `${props.spd}%` }}>
              <span>SPD</span>
              <div className={styles.progressBar}>
              </div>
              <span>{props.spd}</span>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Card