import InfoCard from "../infoCard/InfoCard";
import styles from "./ProductInfo.module.css";
import { FaGift } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiSolidConversation } from "react-icons/bi";
import { BiConversation } from "react-icons/bi";
import { PiGift } from "react-icons/pi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

function ProductInfo() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title} style={{ fontSize: "27px" }}>
        CURSO DE MANICURÍA PROFESIONAL
      </h1>

      <h3 className={styles.title} style={{ fontStyle: "italic" }}>
        La puerta de entrada al mundo de las uñas
      </h3>
      <div className={styles.content}>
        <div>
          <p className={styles.description}>
            ¿Te apasionan las uñas y querés transformar esa pasión en una verdadera fuente de ingresos?
            Este curso está diseñado especialmente para quienes desean comenzar en el mundo de la manicura profesional con seguridad, claridad y confianza.
          </p>
          <h4 style={{ fontSize: "20px", textAlign: "center" }}>
            ¿Qué vas a encontrar en este curso?
          </h4>
          <p className={styles.description}>
            Contás con un PDF exclusivo y súper completo que incluye toda la información que necesitás para iniciarte y ofrecer servicios de calidad desde el primer día:
          </p>
          <ul className={styles.list}>
            <InfoCard
              title="Anatomía de las uñas"
              description="Aprendé cómo están compuestas las uñas, cómo cuidarlas correctamente y por qué esto es clave para lograr resultados duraderos y saludables."
              img="1.jpg"
            />
            <InfoCard
              title="Limpieza y desinfección"
              description="Protegé la salud de tus clientas (y la tuya) con prácticas sencillas, efectivas y económicas."
              img="7.jpg"
            />
            <InfoCard
              title="Manicura rusa"
              description="Conocé el paso a paso de esta técnica que revolucionó la industria por su precisión y acabado impecable."
              img="3.jpeg"
            />
            <InfoCard
              title="Desprendimientos"
              description="Aprendé a identificar errores, cómo solucionarlos y convertirlos en oportunidades para seguir creciendo profesionalmente."
              img="4.jpeg"
            />
            <InfoCard
              title="Esmaltado semipermanente"
              description="Dominá esta técnica para que tus clientas disfruten de uñas perfectas por más tiempo."
              img="5.jpg"
            />
            <InfoCard
              title="Nail Art (Tendencias)"
              description="Inspirate con los diseños que están marcando tendencia y ofrecé un servicio siempre actualizado."
              img="3.jpeg"
            />
            <InfoCard
              title="Retiro seguro del producto"
              description="Descubrí cómo retirar el esmaltado de forma correcta, cuidando la uña natural y evitando daños."
              img="1.jpg"
            />
            <InfoCard
              title="Materiales recomendados"
              description="Te comparto una lista de productos y marcas que uso y recomiendo para que puedas armar tu kit de trabajo sin gastar de más."
              img="7.jpg"
            />
          </ul>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            <PiGift style={{ fontSize: "40px" }} />
            <p style={{ marginBottom: "25px" }}>
              Un regalo sorpresa, pensado especialmente para tu futuro como manicura.
            </p>
            <BiConversation style={{ fontSize: "40px" }} />
            <p style={{ marginBottom: "25px" }}>
              Un mes de consultoría por WhatsApp para que me preguntes cualquier duda que te surja durante tu aprendizaje.
            </p>
            <AiOutlineSafetyCertificate style={{ fontSize: "40px" }} />
            <p>
              Ademas, obtendras tu certificado de participación, que avala tu formación y te respalda al momento de ofrecer tus servicios con seguridad y profesionalismo.
            </p>
            <p style={{ fontSize: "22px" }}>
              ¡Da el primer paso hacia tu independencia económica!
            </p>
          </div>
        </div>
        <div className={styles.imageGrid}>
          <img src="1.jpg" className={styles.image} />
          <img src="2.jpeg" className={styles.image} />
          <img src="3.jpeg" className={styles.image} />
          <img src="4.jpeg" className={styles.image} />
          <img src="5.jpg" className={styles.image} />
          <img src="6.jpg" className={styles.image} />
          <img src="7.jpg" className={styles.image} />
          <img src="8.jpg" className={styles.image} />
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
