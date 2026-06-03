"use client";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import styles from "./DashboardHeader.module.scss";

const DashboardHeader = () => {
  const { user } = useUser();
  const userName = user?.username;

  console.log("User data in DashboardHeader:", user);
  console.log("FirstName:", user?.firstName);
  console.log("FullName:", user?.fullName);

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
        <h1 className={styles.title}>Good Morning, {userName}</h1>
      </div>

      <div className={styles.actions}>
        <button className={styles.historyBtn}>History</button>
        <button className={styles.newProjectBtn}>+ New Project</button>
      </div>
    </div>
  );
};

export default DashboardHeader;
