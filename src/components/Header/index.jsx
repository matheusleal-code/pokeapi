import styles from './index.module.scss'

function Header(props) {
  return (
    <header>
      <div className={styles.container}>
        <h1>{props.title}</h1>
      </div>
    </header>
  )
}

export default Header