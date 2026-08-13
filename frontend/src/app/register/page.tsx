"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./register.module.css";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [institution, setInstitution] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          institution,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário.");
      }

      setSuccess("Usuário cadastrado com sucesso!");

      // tempo de espera
      setTimeout(() => {
        router.push("/login");
      }, 2000);

    } catch (err: any) {
      setError(err.message);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleRegister}>

        <h1>Cadastro</h1>
       

        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <input
          type="text"
          placeholder="Instituição"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          required
        />

        {error && (
          <p className={styles.error}>{error}</p>
        )}

        {success && (
          <p className={styles.success}>{success}</p>
        )}

        <button type="submit">
          Cadastrar
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
