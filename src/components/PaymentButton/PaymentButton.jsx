import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useEffect, useState } from 'react';

const PaymentButton = () => {
    const [preferenceId, setPreferenceId] = useState(null);

    useEffect(() => {
        initMercadoPago('TU_PUBLIC_KEY', { locale: 'es-AR' });

        fetch(process.env.REACT_APP_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                title: 'Producto', 
                price: 10, 
                quantity: 1 
            }),
        })
        .then(response => response.json())
        .then(data => setPreferenceId(data.preferenceId));
    }, []);

    return (
        preferenceId && <Wallet initialization={{ preferenceId }} />
    );
};

export default PaymentButton;
