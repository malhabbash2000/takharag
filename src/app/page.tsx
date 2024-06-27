import styles from "./page.module.css";
import Header from "./components/Header";
import PrimaryImage from "./components/PrimaryImage";
import SecondaryImage from "./components/SecondaryImage";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <PrimaryImage />
      <SecondaryImage />
      <h1>test</h1>
    </main>
  );
}
