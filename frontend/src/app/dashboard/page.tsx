"use client";

import { useRouter } from "next/navigation";
import styles from "./dashboard.module.css";

export default function DashboardPage() {

    const router = useRouter();

    const user = "Larissa";

    return (

        <main className={styles.container}>

            <h1 className={styles.title}>
                Bem-vindo, {user}!
            </h1>

            <p className={styles.subtitle}>
                Escolha uma das opções abaixo para acessar o sistema.
            </p>

            <div className={styles.grid}>

                <button
                    className={styles.option}
                    onClick={() => router.push("/profile")}
                >
                    <h2>Perfil</h2>

                    <p>
                        Altere seus dados pessoais, senha e informações da conta.
                    </p>
                </button>

                <button
                    className={styles.option}
                    onClick={() => router.push("/ai-settings")}
                >
                    <h2>Configuração de IA</h2>

                    <p>
                        Gerencie os modelos de Inteligência Artificial disponíveis.
                    </p>
                </button>

                <button
                    className={styles.option}
                    onClick={() => router.push("/usage-history")}
                >
                    <h2>Histórico de Uso</h2>

                    <p>
                        Consulte o histórico de utilização da plataforma.
                    </p>
                </button>

                <button
                    className={styles.option}
                    onClick={() => router.push("/logs")}
                >
                    <h2>Logs Administrativos</h2>

                    <p>
                        Visualize os registros de auditoria do sistema.
                    </p>
                </button>

            </div>

            <button
                className={styles.logout}
                onClick={() => {

                    localStorage.removeItem("token");

                    router.push("/");

                }}
            >
                Sair
            </button>

        </main>

    );

}