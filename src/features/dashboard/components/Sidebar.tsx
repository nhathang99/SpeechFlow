"use client";

import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { mainMenuItems, othersMenuItems } from "@/routes";
import styles from "./Sidebar/Sidebar.module.scss";
import LogoBrand from "./Sidebar/LogoBrand";
import OrgSwitcher from "./Sidebar/OrgSwitcher";
import UserProfile from "./Sidebar/UserProfile";
import NavSection from "./Sidebar/NavSection";

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className={styles.sidebar}>
      {/* Header Section: Logo + Organization Switcher */}
      <SidebarHeader className={styles.sidebarHeader}>
        <LogoBrand />

        <SidebarMenu className={styles.switcherMenu}>
          <SidebarMenuItem>
            <OrgSwitcher />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Content Section: Navigation Menus */}
      <SidebarContent className={styles.sidebarContent}>
        <NavSection
          label="Main menu"
          items={mainMenuItems}
          pathname={pathname}
        />
        <NavSection
          label="Resources"
          items={othersMenuItems}
          pathname={pathname}
        />
      </SidebarContent>

      {/* Footer Section: User Profile */}
      <SidebarFooter className={styles.sidebarFooter}>
        <SidebarMenu>
          <SidebarMenuItem>
            <UserProfile />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
export default DashboardSidebar;
