import Header from "./components/Header/Header.jsx";
import ProductInfo from "./components/ProductInfo/ProductInfo.jsx";
import ContactOptions from "./components/ContactOption/ContactOption.jsx";
import PaymentForm from "./components/PaymentForm/PaymentForm.jsx";
import Footer from "./components/Footer/Footer.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.bg}>
        <Header />
        <main className={`${styles.main} container`}>
          <ProductInfo />
          <ContactOptions />
          <PaymentForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
