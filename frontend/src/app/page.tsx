import styles from "./home.module.css";
import {
  ArrowRightStartOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";


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
          <Link href="/login" className={styles.primaryButton}>
            <ArrowRightStartOnRectangleIcon className={styles.icon} />
            Entrar
          </Link>

          <Link href="/register" className={styles.secondaryButton}>
            <UserPlusIcon className={styles.icon} />
            Cadastrar
          </Link>
        </div>
      </div>

       <footer className={styles.footer}>
        © 2026 SINASC Access Manager
    </footer>
    </main>
  );
}