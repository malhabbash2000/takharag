import styles from "./page.module.css";
import Header from "./components/Header";
import PrimaryImage from "./components/PrimaryImage";
import SecondaryImage from "./components/SecondaryImage";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className="flex flex-col gap-40">
        <PrimaryImage />
        <SecondaryImage />
      </div>
    </main>
  );
}
