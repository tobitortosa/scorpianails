import InfoCard from "../infoCard/InfoCard";
import styles from "./ProductInfo.module.css";
import { FaGift } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

function ProductInfo() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title} style={{ fontSize: "27px" }}>
        CURSO DE MANICURÍA PROFESIONAL
      </h1>

      <h3 className={styles.title} style={{ fontStyle: "italic" }}>
        Tu puerta de entrada al mundo de las uñas
      </h3>
      <div className={styles.content}>
        <div>
          <p className={styles.description}>
            Te apasionan las uñas y quieres convertir esa pasión en un negocio
            exitoso? Este curso de manicuría profesional está diseñado
            especialmente para aquellas personas que desean iniciarse en el
            fascinante mundo de la manicura. Con un PDF exclusivo y detallado,
            te ofrezco todos los conocimientos que necesitas para comenzar con
            confianza y ofrecer servicios de alta calidad.
          </p>
          <h4 style={{ fontSize: "20px", textAlign: "center" }}>
            Qué incluye este curso?
          </h4>

          <ul className={styles.list}>
            <InfoCard
              title="Anatomía de las uñas:"
              description="Entiende cómo funcionan las uñas y cómo cuidarlas adecuadamente
                para garantizar resultados duraderos y saludables."
              img="1.jpg"
            />
            <InfoCard
              title="Manicuria rusa:"
              description="Aprende paso a paso cómo y por qué usar esta técnica, que se ha
                convertido en un referente en la industria por sus resultados
                impecables."
              img="7.jpg"
            />
            <InfoCard
              title="Esmaltado semipermanente:"
              description="Conoce el proceso detallado de aplicación y mantenimiento para
                que tus clientes disfruten de uñas perfectas por más tiempo."
              img="3.jpeg"
            />
            <InfoCard
              title="Nail art (Tendencias):"
              description="Accede a las últimas tendencias en diseños de uñas, ideales para
                sorprender a tus clientes y mantenerte a la vanguardia."
              img="4.jpeg"
            />
            <InfoCard
              title="Retiro seguro del producto:"
              description="Te enseño cómo retirar correctamente el esmaltado sin dañar las
                uñas naturales, un paso clave en la manicura profesional."
              img="5.jpg"
            />
            <InfoCard
              title="Materiales recomendados:"
              description="Te proporciono una lista con los mejores productos y marcas del
                mercado, con mis recomendaciones profesionales para que ahorres
                tiempo y dinero al elegir los productos adecuados para tu
                negocio."
              img="8.jpg"
            />
          </ul>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            <FaGift style={{fontSize: "35px" }}/>
            <p style={{ marginBottom: "25px" }}>
              Ademas, como bono adicional, recibirás un regalo sorpresa, ¡algo
              especial para ti!
            </p>
            <AiFillSafetyCertificate style={{fontSize: "35px" }}/>
            <p>
              Y lo mejor de todo, al completar el curso recibirás un certificado
              de participación, que avalará tu formación y te permitirá comenzar
              a ofrecer tus servicios con total confianza y profesionalismo.
            </p>
            <p style={{ fontSize: "20px" }}>
              ¡Da el primer paso hacia tu éxito!
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
