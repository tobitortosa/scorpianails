import styles from "./ProductInfo.module.css"

function ProductInfo() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title} style={{fontSize: "25px"}}>Curso de Pedicura Profesional</h1>
      <h3 className={styles.title}>Domina el arte de la pedicura profesional</h3>
      <div className={styles.content}>
        <div>
          <p className={styles.description}>
            Eleva tu carrera con nuestro curso exclusivo en PDF. Descubre técnicas avanzadas, secretos de expertos y
            estrategias para lanzar tu propio negocio exitoso en el apasionante mundo de la pedicura.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.listItemIcon}>►</span> Técnicas paso a paso detalladas
            </li>
            <li className={styles.listItem}>
              <span className={styles.listItemIcon}>►</span> Selección y uso de herramientas profesionales
            </li>
            <li className={styles.listItem}>
              <span className={styles.listItemIcon}>►</span> Cuidados especializados para pies
            </li>
            <li className={styles.listItem}>
              <span className={styles.listItemIcon}>►</span> Guía para establecer tu negocio
            </li>
          </ul>
        </div>
        <div className={styles.imageGrid}>
          <img src="2.jpeg" alt="Herramientas de pedicura" className={styles.image} />
          <img src="4.jpeg" alt="Diseño de uñas" className={styles.image} />
          <img src="3.jpeg" alt="Spa de pies" className={styles.image} />
          <img src="1.jpeg" alt="Pedicura elegante" className={styles.image} />
        </div>
      </div>
    </section>
  )
}

export default ProductInfo

