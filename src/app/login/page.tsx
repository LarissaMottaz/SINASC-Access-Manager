"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function LoginPage() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();

        setError("");

        try {

            const response = await fetch("http://localhost:3000/auth/login", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (!response.ok) {
                throw new Error("E-mail ou senha inválidos.");
            }

            const data = await response.json();

            console.log(data);

            localStorage.setItem("token", data.access_token);

            router.push("/dashboard");

        } catch (err: any) {
            setError(err.message);
        }
    }

    return (

        <div className={styles.container}>

            <form
                onSubmit={handleLogin}
                className={styles.card}
            >
         
                <h1>Login</h1>


                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && (
                    <p className={styles.error}>
                        {error}
                    </p>
                )}

                <button type="submit">
                    Entrar
                </button>


                   <button
        type="button"
        className={styles.backButton}
        onClick={() => router.push("/")}
    >
        Voltar

                </button>

            </form>
             <footer className={styles.footer}>
                © 2026 SINASC Access Manager
            </footer>

        </div>
    );
}