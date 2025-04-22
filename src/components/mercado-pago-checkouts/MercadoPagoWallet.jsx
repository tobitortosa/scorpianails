import React, { useEffect } from 'react'
import styles from "./MercadoPagoWallet.module.css"
import { useState } from 'react'
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"
import axios from "axios"

const MercadoPagoWallet = () => {
    const [preferenceId, setPreferenceId] = useState(null);
    const publicKey = import.meta.env.VITE_MERCADO_PAGO_PUBLIC_KEY;
    const createPreferenceIdEndpoint = import.meta.env.VITE_BACKEND_URL + "/crear-preferencia";
    
    useEffect(() => {
        if (!window.MercadoPago) {
            initMercadoPago(publicKey, { locale: "es-Ar" })
            createPreferenceIdFromAPI();
        } else {
            console.log("Ya se inicializo")
        }
    }, [])

    const createPreferenceIdFromAPI = async () => {
        const response = await axios.post(createPreferenceIdEndpoint, {
            title: "Curso Manicuria Profesional Scorpianails",
            unit_price: parseFloat(import.meta.env.VITE_PRECIO),
            quantity: 1,
            email: localStorage.getItem("email"),
            telefono: localStorage.getItem("telefono")
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (response) {
            setPreferenceId(response.data.id);
        }
    }

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          {preferenceId ? (
            <Wallet initialization={{ preferenceId: preferenceId }} />
          ) : (
            <div id={styles.loader}></div>
          )}
        </div>
      );      
}

export default MercadoPagoWallet
