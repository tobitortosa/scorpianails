import { useState, useRef } from "react";
import styles from "./PaymentForm.module.css";
import { FiUploadCloud } from "react-icons/fi";

function PaymentForm() {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

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
      const formData = new FormData();
      formData.append("comprobante", file);

      console.log("Comprobante recibido:", file.name);
      alert("Comprobante recibido. El PDF se enviará pronto.");
    } else {
      alert("Por favor, sube un comprobante de pago.");
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Realiza tu pago y obtén el PDF</h2>
      <div className={styles.formContainer}>
        <h3 style={{ textAlign: "center" }}>
          Querés mejorar tus habilidades en Manicuría?
        </h3>
        <h4>
          En este pdf exclusivo vas a encontrar técnicas y consejos
          profesionales para llevar tus habilidades a otro nivel. Ideal para
          quienes quieran recién empiezan. Aprende paso a paso como ofrecer un
          servicio impecable y duradero para traerlos devuelta contigo. No
          esperes más para convertirte en esa Manicura que tanto soñaste ser!
        </h4>
        <div className={styles.contactoCliente}>
          <h2>Primer paso:</h2>
          <h3>
            Ingresa un mail y un numero de telefono donde vas a querer recibir
            la guia:
          </h3>

          <label>Email:</label>
          <input type="text" placeholder="@gmail.com" />

          <label>Numero de teléfono:</label>
          <input type="text" placeholder="+54 11 1234-5678" />
        </div>

        <div className={styles.contactoCliente}>
          <h2>Segundo paso:</h2>
          <h3 className={styles.text}>
            Realiza una transferencia a la siguiente cuenta bancaria y subí el
            comprobante:
          </h3>
          <p className={styles.cbu}>Alias: rocio.moire</p>
          <p className={styles.cbu} style={{ marginBottom: "15px" }}>
            CBU: 1234 5678 9000 1111 2222
          </p>
          <p htmlFor="comprobante" className={styles.label}>
            ADJUNTA EL COMPROBANTE ACA:
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              {/* <input
                type="file"
                id="comprobante"
                onChange={handleFileChange}
                className={styles.input}
              /> */}

              {/* <div
                className={`${styles.uploadBox} ${
                  dragActive ? styles.active : ""
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="fileUpload"
                  className={styles.hiddenInput}
                  onChange={handleChange}
                />
                <label htmlFor="fileUpload" className={styles.label}>
                  <FiUploadCloud className={styles.icon} />
                  {file ? (
                    <p className={styles.fileName}>{file.name}</p>
                  ) : (
                    <p className={styles.text}>
                      Arrastra y suelta el comprobante aquí o{" "}
                      <span>haz clic para subirlo</span>
                    </p>
                  )}
                </label>
              </div> */}

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
                />
              </div>

              <h3 style={{ textAlign: "center", marginTop: "15px" }}>
                IMPORTANTE
              </h3>
              <h4 style={{ textAlign: "center" }}>
                Si no adjuntás el comprobante de pago, no podremos verificar la
                seguridad de la compra. <br /> Por lo tanto, no podrás recibir
                la guía.
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
