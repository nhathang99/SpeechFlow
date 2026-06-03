import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import styles from "./DashboardHeader.module.scss";

const DashboardHeader = async () => {
  const user = await currentUser();
  const userName = user?.username;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const greeting = getGreeting();

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
        <h1 className={styles.title}>
          {greeting}, {userName}
        </h1>
      </div>

      <div className={styles.actions}>
        <button className={styles.historyBtn}>History</button>
        <button className={styles.newProjectBtn}>+ New Project</button>
      </div>
    </div>
  );
};

export default DashboardHeader;
