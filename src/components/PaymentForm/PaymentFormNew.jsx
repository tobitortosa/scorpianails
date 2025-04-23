import styles from "./PaymentFormNew.module.css";
import { Link, useNavigate } from "react-router-dom";

function PaymentFormNew() {
  const navigate = useNavigate();
  const precio = "$" + import.meta.env.VITE_PRECIO
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Realiza tu pago y obtené el PDF</h2>
      <div className={styles.formContainer}>
        <h3 style={{ textAlign: "center" }}>
          ¿Querés mejorar tus habilidades en Manicuría?
        </h3>
        <h4 style={{ textAlign: "center" }}>
          Este PDF es ideal para quienes recién empiezan y también para quienes ya dieron sus primeros pasos y quieren seguir aprendiendo.
          Vas a encontrar técnicas, consejos y recomendaciones profesionales para perfeccionar tu trabajo y ofrecer un servicio que enamore y fidelice a tus clientas.
          <p>
            Empezá tu negocio y convertite en esa manicura que siempre soñaste ser.
          </p>
        </h4>
        <div className={styles.ofertaContainer}>
          <h3 className={styles.ofertaTitulo}>
            <span>🔥 45% OFF 🔥</span>
            <br />
            {precio} ARS
          </h3>
          <Link className={styles.comprar} to="/comprar-primera-parte">
            Comprar ahora
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PaymentFormNew;
