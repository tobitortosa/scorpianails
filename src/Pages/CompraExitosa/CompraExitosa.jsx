import styles from "./CompraExitosa.module.css";
import Footer from "../../components/Footer/Footer";

function CompraExitosa() {

  const email = localStorage.getItem("email");
  const telefono = localStorage.getItem("telefono");

  return (
    <div className={styles.app}>
      <div className={styles.bg}>
        <main className={`${styles.main}`}>
          <h2>Gracias por tu compra!</h2>
          <h4>Una vez comprobada la compra, recibiras tu curso y certificado en tu correo y/o telefono</h4>
          <h4>Email: {email}</h4>
          <h4>Telefono: {telefono}</h4>
          <a id={styles.volver} href="/">Menu</a>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default CompraExitosa;
