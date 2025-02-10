import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContent} container`}>
        <img src="./headerIcon.png" alt="Logo de Elegance Pedicure" className={styles.logo} />
        <h1 className={styles.title}>Scorpianails</h1>
      </div>
    </header>
  )
} 

export default Header

