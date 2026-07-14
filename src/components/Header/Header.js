import styles from "./Header.module.css";
import Link from "next/link";
import localFont from "next/font/local";

const customFont = localFont({
  src: "../../../public/fonts/FlorDeRuina-Germen.woff2",
  variable: "--font-header",
});

export function Header() {
  return (
    <header className={`${styles.header} ${customFont.variable}`}>
      <h1 className={styles.title}>
        <Link href="/">[Habit Tracker]</Link>
      </h1>
    </header>
  );
}
