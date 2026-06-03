import DashboardHeader from "@/features/dashboard/components/Header";
import styles from "./dashboard.module.scss";
import VoiceEditor from "@/features/dashboard/components/VoiceEditor";

export default function DashboardPage() {
  return (
    <div className={styles.dashboard}>
      <div className="w-full flex flex-col">
        <DashboardHeader />
        <VoiceEditor />
      </div>
     </div>
  );
}
