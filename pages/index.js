import React from "react";
import { useRouter } from "next/router";
import ExampleComponent from "../components/ExampleComponent";
import styles from "../styles/Home.module.css";

const languages = {
  en: require('../locale/en/commons.json'),
  es: require('../locale/es/commons.json'),
}

export default function Home() {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const localCopy = languages[locale];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ExampleComponent  title={localCopy.appName} />
      </main>
    </div>
  );
}
