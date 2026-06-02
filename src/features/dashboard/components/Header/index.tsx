"use client";
import Image from "next/image";
import styles from "./DashboardHeader.module.scss";

const DashboardHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wavesBackground}>
        <Image
          src="/images/welcome.png"
          alt="Waves background"
          fill
          className="object-cover" 
          priority
        />
      </div>

      <div className={styles.welcomeMessage}>
        <span className={styles.subtitle}>WELCOME BACK</span>
        <h1 className={styles.title}>Good Morning, user</h1>
      </div>

      <div className={styles.actions}>
        <button className={styles.historyBtn}>History</button>
        <button className={styles.newProjectBtn}>+ New Project</button>
      </div>
    </div>
  );
};

export default DashboardHeader;
