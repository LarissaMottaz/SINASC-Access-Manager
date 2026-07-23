import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>

      <div className={styles.card}>

        <h1>SINASC Access Manager</h1>

        <div className={styles.line}></div>

        <p>
          Sistema para gerenciamento de usuários, autenticação e auditoria
          de acessos.
        </p>

        <div className={styles.buttons}>

          <a href="/login">
            <button className={styles.primaryButton}>
              Entrar
            </button>
          </a>

          <a href="/register">
            <button className={styles.secondaryButton}>
              Cadastrar
            </button>
          </a>

        </div>

      </div>
      
       <footer className={styles.footer}>
        © 2026 SINASC Access Manager
    </footer>

    </main>
  );
}