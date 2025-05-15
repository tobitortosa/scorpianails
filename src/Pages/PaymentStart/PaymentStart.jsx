import styles from "./PaymentStart.module.css";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PaymentStart() {
  const [nombreCompleto, setNombreCompleto] = useState(
    localStorage.getItem("nombreCompleto") || ""
  );
  const [isNombreCompletoValid, setIsNombreCompletoValid] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [email2, setEmail2] = useState(localStorage.getItem("email") || "");
  const [isEmail2Valid, setIsEmail2Valid] = useState(false);
  const [phone, setPhone] = useState(localStorage.getItem("telefono") || "");
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  useEffect(() => {
    setIsNombreCompletoValid(nombreCompleto);
    validateEmail(email);
    validateEmail2(email);
    validatePhone(phone);
  }, []);

  function validateNombreCompleto(value) {
    setIsNombreCompletoValid(value.length > 0);
  }

  function validateEmail(value) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsEmailValid(regex.test(value));
    setIsEmail2Valid(value === email2);
  }

  function validateEmail2(value) {
    setIsEmail2Valid(email === value);
  }

  function validatePhone(value) {
    const regex = /^(\+\d{1,3}\s?)?\d{1,4}\s?\d{4,5}\s?\d{4}$/;
    setIsPhoneValid(regex.test(value) && value.length >= 10);
  }

  function handleSubmit() {
    localStorage.clear();
    localStorage.setItem("email", email);
    localStorage.setItem("telefono", phone);
    localStorage.setItem("nombreCompleto", nombreCompleto);
  }

  return (
    <div className={styles.app}>
      <div className={styles.bg}>
        <main className={`${styles.main} container`}>
          <div className={styles.container}>
            <div className={styles.contactoCliente}>
              <h2 style={{ fontSize: "20px", marginTop: "15%" }}>
                Primer paso:
              </h2>
              <h3 style={{ fontSize: "16px" }}>
                Ingresa tu nombre, mail y un numero de telefono donde vas a
                querer recibir el curso
              </h3>

              <div className={styles.mailContainer}>
                <label className={styles.mailLabel}>Nombre completo</label>
                <input
                  type="text"
                  value={nombreCompleto}
                  onChange={(e) => {
                    setNombreCompleto(e.target.value);
                    validateNombreCompleto(e.target.value);
                  }}
                  placeholder="Nombre completo"
                  className={`${styles.mailInput}`}
                />
                {!isNombreCompletoValid && (
                  <p className={styles.mailErrorText}>
                    Ingresa tu nombre completo.
                  </p>
                )}
              </div>

              <div
                style={{ marginTop: "20px" }}
                className={styles.mailContainer}
              >
                <label className={styles.mailLabel}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                  placeholder="ejemplo@email.com"
                  className={`${styles.mailInput} ${
                    isEmailValid ? styles.mailValid : styles.mailInvalid
                  }`}
                />
                {!isEmailValid && (
                  <p className={styles.mailErrorText}>
                    Ingresa un correo válido.
                  </p>
                )}
              </div>

              <div
                style={{ marginTop: "20px" }}
                className={styles.mailContainer}
              >
                <label className={styles.mailLabel}>Reingresar Email</label>
                <input
                  type="email"
                  value={email2}
                  onChange={(e) => {
                    setEmail2(e.target.value);
                    validateEmail2(e.target.value);
                  }}
                  className={`${styles.mailInput} ${
                    isEmail2Valid ? styles.mailValid : styles.mailInvalid
                  }`}
                />
                {!isEmail2Valid && (
                  <p className={styles.mailErrorText}>
                    El email reingresado no coincide.
                  </p>
                )}
              </div>

              <div className={styles.phoneContainer}>
                <label className={styles.phoneLabel}>Número de Teléfono</label>
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
                    Formato inválido. <br /> Ej: +54 11 12345678 o 11 12345678
                  </p>
                )}
                <p style={{ textAlign: "center" }}>
                  Si tu número no es de Argentina, recuerda incluir el código de
                  país.
                </p>
              </div>
            </div>
            <div>
              {isEmailValid &&
              isEmail2Valid &&
              isPhoneValid &&
              isNombreCompletoValid ? (
                <Link
                  to="/comprar-segunda-parte"
                  onClick={handleSubmit}
                  className={styles.comprar}
                >
                  Continuar al pago
                </Link>
              ) : (
                <Link className={styles.comprarDeshabilitado}>
                  Continuar al pago
                </Link>
              )}
            </div>
          </div>
          <a id={styles.volver} href="/">
            Menu
          </a>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default PaymentStart;
