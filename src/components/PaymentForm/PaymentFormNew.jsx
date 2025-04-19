import styles from "./PaymentFormNew.module.css";
import { Link, useNavigate } from "react-router-dom";

function PaymentFormNew() {
  const navigate = useNavigate();
  const precio = "$" + import.meta.env.VITE_PRECIO
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Realiza tu pago y obtén el PDF</h2>
      <div className={styles.formContainer}>
        <h3 style={{ textAlign: "center" }}>
          Querés mejorar tus habilidades en Manicuría?
        </h3>
        <h4 style={{ textAlign: "center" }}>
          En este pdf exclusivo vas a encontrar técnicas y consejos
          profesionales para llevar tus habilidades a otro nivel. Ideal para
          quienes recien empiezan. Aprende paso a paso como ofrecer un servicio
          impecable y duradero para traerlos devuelta contigo.
          <p>
            No esperes más para convertirte en esa Manicura que tanto soñaste
            ser!
          </p>
        </h4>
        <h3 style={{ textAlign: "center", color: "#00ee08e0", marginBottom: "40px"}}>
          Precio: {precio} ARS
        </h3>
        <div style={{ textAlign: "center" }}>
            <Link className={styles.comprar} to="/comprar-primera-parte">
            COMPRAR
            </Link>
        </div>
      </div>
    </section>
  );
}

export default PaymentFormNew;
