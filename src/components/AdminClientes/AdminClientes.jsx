import { useEffect, useState } from "react";
import styles from "./AdminClientes.module.css";
import { FaEnvelope, FaCheck, FaTimes, FaWhatsapp } from "react-icons/fa";

const AdminClientes = ({ token }) => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetchClientes();
    }, []);

    const fetchClientes = async () => {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/clientes', {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        setClientes(await response.json())
    };

    const toggleEnviado = async (external_reference) => {
        await fetch(import.meta.env.VITE_BACKEND_URL + '/clientes/enviar', {
            method: "PUT",
            headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({ external_reference })
        })
            .then(res => res.json())
            .then(() => {
                fetchClientes();
            })
            .catch(err => console.error("Error al cambiar estado:", err));
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Clientes</h2>
            {clientes.length === 0 ? (
                <p>No hay clientes registrados.</p>
            ) : (
                clientes.map((cliente, index) => (
                    <div key={index} className={styles.cliente}>
                        <div className={styles.info}>
                            <p className={styles.dato}><strong>Email:</strong> {cliente.email}</p>
                            <p className={styles.dato}><strong>Teléfono:</strong> {cliente.telefono}</p>
                            <p className={styles.dato}><strong>Precio:</strong> ${cliente.precio}</p>
                            <p className={styles.dato}>
                                <strong>Enviado:</strong> {cliente.enviado ?
                                    <FaCheck style={{ color: 'green' }} /> :
                                    <FaTimes style={{ color: 'red' }} />}
                            </p>
                        </div>
                        <div className={styles.icons}>
                            <button
                                className={styles.botonEstado}
                                onClick={() => toggleEnviado(cliente.external_reference)}>
                                Cambiar Estado
                            </button>
                            <a
                                href={`https://wa.me/54${cliente.telefono}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp className={styles.iconWhatsapp} />
                            </a>
                            <a href={`mailto:${cliente.email}`} target="_blank" rel="noopener noreferrer">
                                <FaEnvelope className={styles.icon} />
                            </a>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default AdminClientes;
