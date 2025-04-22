import { useState } from 'react';
import styles from "./AdminLogin.module.css";
import AdminClientes from '../../components/AdminClientes/AdminClientes';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const handleCerrarSesion = () => {
        setToken('')
        localStorage.clear();
    }

    const handleLogin = async () => {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            setToken(data.token);
        } else {
            alert('Login incorrecto');
        }
    };

    if (!token) {
        return (
            <div className={styles.container}>
                <div className={styles.card}>
                    <h2 className={styles.title}>Login Admin</h2>
                    <input className={styles.input} value={username} onChange={e => setUsername(e.target.value)} placeholder="Usuario" />
                    <input className={styles.input} type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
                    <button className={styles.button} onClick={handleLogin}>Ingresar</button>
                </div>
            </div>

        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>unas ganas de comer chipa y tomar mate con vos</h2>
                <button className={`${styles.button} ${styles.buttonClientes}`} onClick={() => setLoader(true)}>Ver clientes</button>
                {loader && <AdminClientes token={token}/>}
            </div>
            <button id={styles.cerrarSesionBtn} onClick={handleCerrarSesion}>Cerrar Sesion</button>
        </div>
    );
}

export default AdminLogin;
