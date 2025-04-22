import styles from "./CompraExitosa.module.css";
import Footer from "../../components/Footer/Footer";

function CompraExitosa() {

  const email = localStorage.getItem("email");
  const telefono = localStorage.getItem("telefono");

  return (
    <div className={styles.app}>
      <div className={styles.bg}>
        <main className={`${styles.main}`}>
          <h2>¡Gracias por tu compra!</h2>
          <h4>Una vez verificada la compra, te enviaremos tu curso y certificado a tu correo y/o teléfono dentro de las próximas 24 horas.</h4>
          <h4><strong>Email:</strong> {email}</h4>
          <h4><strong>Teléfono:</strong> {telefono}</h4>
          <a id={styles.volver} href="/">Volver al menú</a>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default CompraExitosa;
