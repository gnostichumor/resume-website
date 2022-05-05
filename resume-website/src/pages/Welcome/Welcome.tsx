import styles from "./Welcome.module.scss";

export default function Welcome() {
  return (
    <>
      <main className={styles.welcome}>
        <div className={styles.welcomeCard}>
          <p className={styles.welcomeText}>
            Hi, My name is Matt. What's yours?
          </p>
        </div>
      </main>
    </>
  );
}
