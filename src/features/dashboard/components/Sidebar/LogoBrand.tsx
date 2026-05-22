import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
// 1. THÊM các thành phần Tooltip từ thư viện UI của bạn
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

  // Kiểm tra xem trạng thái hiện tại có phải là đang mở (expanded) không
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

      {/* 2. BỌC SidebarTrigger bằng Tooltip và cấu hình chặn auto-focus */}
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          {/* Thêm thuộc tính asChild vào TooltipTrigger */}
          <TooltipTrigger asChild>
            <div
              className={styles.sidebarTriggerWrapper}
              // Mẹo thực tế: Chặn sự kiện Focus không cho Tooltip tự bật khi quay lại tab
              onFocus={(e) => e.preventDefault()}
            >
              <SidebarTrigger className={styles.sidebarTrigger} />
            </div>
          </TooltipTrigger>

          {/* Cấu hình TooltipContent chặn tương tác thừa khi ẩn/hiện */}
          <TooltipContent
            side="right"
            align="center"
            // Tránh việc tooltip bị kẹt lại khi click chuyển trạng thái
            onPointerDownOutside={(e) => e.preventDefault()}
          >
            <p>{isExpanded ? "Close menu" : "Open  menu"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default LogoBrand;
