import { useState, useRef } from "react";
import styles from "./PaymentForm.module.css";
import { FiUploadCloud } from "react-icons/fi";

function PaymentForm() {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const precio = "$4500";

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const validateEmail = (value) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsEmailValid(regex.test(value));
  };

  const validatePhone = (value) => {
    const regex = /^(\+\d{1,3}\s?)?\d{1,4}\s?\d{4,5}\s?\d{4}$/;
    setIsPhoneValid(regex.test(value) && value.length >= 10);
  };

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      onFileSelect(selectedFile);
    }
  };

  const handleContainerClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      onFileSelect(droppedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const validTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "application/pdf",
      ];

      if (!validTypes.includes(file.type)) {
        alert("Solo puedes subir archivos en formato PNG, JPG o PDF.");
        setFile(null);
        return;
      }

      if (!isEmailValid) {
        alert("Ingrese un email correcto.");
        setIsEmailValid(false);
        return;
      }

      if (!isPhoneValid) {
        alert("Ingrese un numero de telefono correcto.");
        setIsPhoneValid(false);
        return;
      }

      console.log("Archivo subido y datos correctos");
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Realiza tu pago y obtén el PDF</h2>
      <div className={styles.formContainer}>
        <h3 style={{ textAlign: "center", color: "#00ee08e0" }}>
          Precio: {precio} ARS
        </h3>
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
        <div className={styles.contactoCliente}>
          <h2>1) Primer paso:</h2>
          <h3>
            Ingresa un mail y un numero de telefono donde vas a querer recibir
            la guia:
          </h3>

          <div className={styles.mailContainer}>
            <label className={styles.mailLabel}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              placeholder="usuario@gmail.com"
              className={`${styles.mailInput} ${
                isEmailValid ? styles.mailValid : styles.mailInvalid
              }`}
            />
            {!isEmailValid && (
              <p className={styles.mailErrorText}>
                Ingresa un correo válido de Gmail.
              </p>
            )}
          </div>

          <div className={styles.phoneContainer}>
            <label className={styles.phoneLabel}>Número de Teléfono:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                validatePhone(e.target.value);
              }}
              placeholder="11 1234-5678"
              className={`${styles.phoneInput} ${
                isPhoneValid ? styles.phoneValid : styles.phoneInvalid
              }`}
            />
            {!isPhoneValid && (
              <p className={styles.phoneError}>
                Formato inválido. <br /> Ej: +54 11 40851865 o 1140851865
              </p>
            )}
            <p style={{ textAlign: "center" }}>
              Si tu número no es de Argentina, recuerda incluir el código de
              país.
            </p>
          </div>
        </div>

        <div className={styles.contactoCliente}>
          <h2>2) Segundo paso:</h2>
          <h3 className={styles.text}>
            Realiza una transferencia por {precio} a la siguiente cuenta
            bancaria y subí el comprobante:
          </h3>
          <p className={styles.cbu}>Alias: rocio.moire</p>
          <p className={styles.cbu} style={{ marginBottom: "15px" }}>
            CBU: 1234 5678 9000 1111 2222
          </p>
          <p htmlFor="comprobante" className={styles.label}>
            ADJUNTA EL COMPROBANTE
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <div
                className={styles.uploadContainer}
                onClick={handleContainerClick}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <FiUploadCloud
                  style={{ fontSize: "40px", margin: "22px 0px" }}
                />
                {file ? (
                  <p className={styles.fileName}>{file.name}</p>
                ) : (
                  <>
                    <p>Arrastra y suelta el comprobante aquí</p>
                    <p>
                      o <span>Selecciona el archivo</span>
                    </p>
                  </>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleChange}
                  className={styles.hiddenInput}
                  accept="image/png, image/jpeg, image/jpg, application/pdf"
                />
              </div>
              <h3 style={{ textAlign: "center" }}>
                Una vez verifiquemos la seguridad de la compra, te enviaremos el
                PDF por mail y celular
              </h3>
              <h3 style={{ textAlign: "center", marginTop: "50px" }}>
                IMPORTANTE
              </h3>
              <h4 style={{ textAlign: "center" }}>
                Si no adjuntás el comprobante de pago, no podremos verificar la
                seguridad de la compra. <br /> Por lo tanto, no podrás recibir
                tu compra.
              </h4>
            </div>
            <div style={{ textAlign: "center" }}>
              <button type="submit" className={styles.button}>
                COMPRAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PaymentForm;
