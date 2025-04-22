import styles from "./PaymentStart.module.css";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import MercadoPagoWallet from "../../components/mercado-pago-checkouts/MercadoPagoWallet";
import { GiScorpion } from "react-icons/gi";

function PaymentStart() {
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [phone, setPhone] = useState("");
    const [isPhoneValid, setIsPhoneValid] = useState(false);

    const validateEmail = (value) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setIsEmailValid(regex.test(value));
    };

    const validatePhone = (value) => {
        const regex = /^(\+\d{1,3}\s?)?\d{1,4}\s?\d{4,5}\s?\d{4}$/;
        setIsPhoneValid(regex.test(value) && value.length >= 10);
    };

    const handleSubmit = () => {
        localStorage.clear();
        localStorage.setItem("email", email);
        localStorage.setItem("telefono", phone);
    }

    return (
        <div className={styles.app}>
            <div className={styles.bg}>
                <main className={`${styles.main} container`}>
                    <div className={styles.container}>

                        <div className={styles.contactoCliente}>
                            <h2 style={{ fontSize: "20px" }}>Primer paso:</h2>
                            <h3 style={{ fontSize: "16px" }}>
                                Ingresa un mail y un numero de telefono donde vas a querer recibir
                                la guia
                            </h3>

                            <div className={styles.mailContainer}>
                                <label className={styles.mailLabel}>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        validateEmail(e.target.value);
                                    }}
                                    placeholder="ejemplo@email.com"
                                    className={`${styles.mailInput} ${isEmailValid ? styles.mailValid : styles.mailInvalid
                                    }`}
                                />
                                {!isEmailValid && (
                                    <p className={styles.mailErrorText}>
                                        Ingresa un correo válido.
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
                                    className={`${styles.phoneInput} ${isPhoneValid ? styles.phoneValid : styles.phoneInvalid
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
                            {(isEmailValid && isPhoneValid) ?
                                <Link to="/comprar-segunda-parte" onClick={handleSubmit} className={styles.comprar}>Continuar al pago</Link> :
                                <Link className={styles.comprarDeshabilitado}>Continuar al pago</Link>
                            }

                        </div>
                    </div>
                    <a id={styles.volver} href="/">Menu</a>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default PaymentStart;
