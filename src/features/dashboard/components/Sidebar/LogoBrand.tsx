import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SIDEBAR_BRANDING } from "./constants";
import styles from "./Sidebar.module.scss";

const LogoBrand = () => {
  const { name, icon } = SIDEBAR_BRANDING;
  const { state } = useSidebar();
  const isExpanded = state === "expanded";

  return (
    <div className={styles.logoBrand} data-state={state}>
      <div className={styles.logoIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={icon.viewBox}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={icon.path} />
        </svg>
      </div>
      <span className={styles.logoText}>{name}</span>

      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={styles.sidebarTriggerWrapper}
              onFocus={(e) => e.preventDefault()}
            >
              <SidebarTrigger className={styles.sidebarTrigger} />
            </div>
          </TooltipTrigger>

          <TooltipContent
            side="right"
            align="center"
            onPointerDownOutside={(e) => e.preventDefault()}
          >
            <p>{isExpanded ? "Close menu" : "Open menu"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default LogoBrand;
