import { useEffect, useState } from "react";
import styles from "./AdminClientes.module.css";
import { FaEnvelope, FaCheck, FaTimes, FaWhatsapp } from "react-icons/fa";

const AdminClientes = ({ token }) => {
    const [clientes, setClientes] = useState([]);
    const [clienteSeleccionado, setClienteSeleccionado] = useState({})
    const [modalCursoEnviado, setModalCursoEnviado] = useState(false)
    const [modalPagoConfirmado, setModalPagoConfirmado] = useState(false)

    useEffect(() => {
        fetchClientes();
    }, []);

    const fetchClientes = async () => {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/clientes', {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        setClientes(await response.json())
    };

    const toggleCursoEnviado = async (external_reference) => {
        await fetch(import.meta.env.VITE_BACKEND_URL + '/clientes/cursoEnviado', {
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

    const togglePagoConfirmado = async (external_reference) => {
        await fetch(import.meta.env.VITE_BACKEND_URL + '/clientes/pagoConfirmado', {
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
                            <p className={styles.dato} id={styles.enviado}>
                                <strong>Curso Enviado:</strong> {cliente.cursoEnviado ?
                                    <FaCheck style={{ color: 'green' }} /> :
                                    <FaTimes style={{ color: 'red' }} />}
                            </p>
                            <p className={styles.dato} id={styles.enviado}>
                                <strong>Pago Confirmado:</strong> {cliente.pagoConfirmado ?
                                    <FaCheck style={{ color: 'green' }} /> :
                                    <FaTimes style={{ color: 'red' }} />}
                            </p>
                        </div>
                        <div className={styles.icons}>
                            {cliente.pagoConfirmado &&
                                <button
                                    className={styles.botonEstado}
                                    onClick={() => {
                                        setClienteSeleccionado(cliente)
                                        setModalCursoEnviado(true)
                                    }}>
                                    Curso Enviado
                                </button>}
                            <button
                                className={styles.botonEstado}
                                onClick={() => {
                                    setClienteSeleccionado(cliente)
                                    setModalPagoConfirmado(true)
                                }}>
                                Pago Confirmado
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

            {modalCursoEnviado && <div className={styles.modalContainer}>
                <div className={styles.modal}>
                    <h3 style={{ color: "#333" }}>Modificar Curso Enviado</h3>
                    <div className={styles.modalClienteContainer}>
                        <p className={styles.dato}><strong>Email:</strong>{clienteSeleccionado.email}</p>
                        <p className={styles.dato}><strong>Teléfono:</strong>{clienteSeleccionado.telefono}</p>
                        <p className={styles.dato}><strong>Precio:</strong>${clienteSeleccionado.precio}</p>
                    </div>

                    {clienteSeleccionado.cursoEnviado ?
                        <p>Modificar Curso Enviado a <span style={{ color: "red" }}><FaTimes /></span></p> :
                        <p>Modificar Curso Enviado a <span style={{ color: "green" }}><FaCheck /></span></p>
                    }

                    <div>
                        <button onClick={() => {
                            setModalCursoEnviado(false);
                        }}>CANCELAR</button>
                        <button onClick={() => {
                            setModalCursoEnviado(false);
                            toggleCursoEnviado(clienteSeleccionado.external_reference)
                        }}>MODIFICAR</button>
                    </div>
                </div>
            </div>}

            {modalPagoConfirmado && <div className={styles.modalContainer}>
                <div className={styles.modal}>
                    <h3 style={{ color: "#333" }}>Modificar Pago Confirmado</h3>
                    <div className={styles.modalClienteContainer}>
                        <p className={styles.dato}><strong>Email:</strong>{clienteSeleccionado.email}</p>
                        <p className={styles.dato}><strong>Teléfono:</strong>{clienteSeleccionado.telefono}</p>
                        <p className={styles.dato}><strong>Precio:</strong>${clienteSeleccionado.precio}</p>
                    </div>

                    {clienteSeleccionado.pagoConfirmado ?
                        <p>Modificar Pago Confirmado a <span style={{ color: "red" }}><FaTimes /></span></p> :
                        <p>Modificar Pago Confirmado a <span style={{ color: "green" }}><FaCheck /></span></p>
                    }

                    <div>
                        <button onClick={() => {
                            setModalPagoConfirmado(false);
                        }}>CANCELAR</button>
                        <button onClick={() => {
                            setModalPagoConfirmado(false);
                            togglePagoConfirmado(clienteSeleccionado.external_reference)
                        }}>MODIFICAR</button>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default AdminClientes;
