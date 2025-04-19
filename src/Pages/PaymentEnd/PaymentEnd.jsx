import styles from "./PaymentEnd.module.css";
import Footer from "../../components/Footer/Footer";
import MercadoPagoWallet from "../../components/mercado-pago-checkouts/MercadoPagoWallet";
import ContactOptions from "../../components/ContactOption/ContactOption";

function PaymentEnd() {
    return (
        <div className={styles.app}>
            <div className={styles.bg}>
                <main className={`${styles.main} container`}>
                    <h2>Paga con Mercado Pago</h2>
                    <div>
                        <MercadoPagoWallet />
                    </div>
                    <h2>Contactanos si preferis otro metodo de pago</h2>
                    <ContactOptions />
                    <a id={styles.volver} href="/comprar-primera-parte">Atras</a>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default PaymentEnd;
