import styles from "./ProductInfo.module.css";
import { FaCircle } from "react-icons/fa";

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
          <h4 style={{ fontSize: "17px" }}>Qué incluye este curso?</h4>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Anatomía de las uñas:</strong>
              <p>
                Entiende cómo funcionan las uñas y cómo cuidarlas adecuadamente
                para garantizar resultados duraderos y saludables.
              </p>
            </li>
            <li className={styles.listItem}>
              <strong>Manicuria rusa:</strong>
              <p>
                Aprende paso a paso cómo y por qué usar esta técnica, que se ha
                convertido en un referente en la industria por sus resultados
                impecables.
              </p>
            </li>
            <li className={styles.listItem}>
              <strong>Esmaltado semipermanente:</strong>
              <p>
                Conoce el proceso detallado de aplicación y mantenimiento para
                que tus clientes disfruten de uñas perfectas por más tiempo.
              </p>
            </li>
            <li className={styles.listItem}>
              <strong>Nail art (diseños de uñas en tendencia):</strong>
              <p>
                Accede a las últimas tendencias en diseños de uñas, ideales para
                sorprender a tus clientes y mantenerte a la vanguardia.
              </p>
            </li>
            <li className={styles.listItem}>
              <strong>Retiro seguro del producto:</strong>
              <p>
                Te enseño cómo retirar correctamente el esmaltado sin dañar las
                uñas naturales, un paso clave en la manicura profesional.
              </p>
            </li>
            <li className={styles.listItem}>
              <strong>Lista de materiales recomendados:</strong>
              <p>
                Te proporciono una lista con los mejores productos y marcas del
                mercado, con mis recomendaciones profesionales para que ahorres
                tiempo y dinero al elegir los productos adecuados para tu
                negocio.
              </p>
            </li>
          </ul>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            <p>
              Ademas, como bono adicional, recibirás un regalo sorpresa, ¡algo
              especial para ti!
            </p>
            <p>
              Y lo mejor de todo, al completar el curso recibirás un certificado
              de participación, que avalará tu formación y te permitirá comenzar
              a ofrecer tus servicios con total confianza y profesionalismo.
            </p>
            <p>
              No pierdas la oportunidad de formarte con una guía completa para
              arrancar tu propio negocio de manicura de la manera correcta.
            </p>
            <p style={{ fontSize: "18px" }}>
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
