import React from "react";
import styles from "../styles/Home.module.css";
import ExampleComponent from "../components/ExampleComponent";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ExampleComponent />
      </main>
    </div>
  );
}
