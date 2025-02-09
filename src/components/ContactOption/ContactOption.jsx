import styles from "./ContactOption.module.css"

function ContactOptions() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>¿Tienes preguntas? Contáctanos</h2>
      <div className={styles.buttonContainer}>
        <a href="https://wa.me/541150625474" target="_blank" rel="noopener noreferrer" className={styles.button}>
          <p>Contactar por WhatsApp</p> 
          <img id={styles.icon} src="wpp.png"/>
        </a>
        <a href="mailto:roabril.moire@gmail.com" className={styles.button}>
          <p>Enviar un correo electrónico</p>
          <img id={styles.icon} src="gmail.png"/>
        </a>
      </div>
    </section>
  )
}

export default ContactOptions

