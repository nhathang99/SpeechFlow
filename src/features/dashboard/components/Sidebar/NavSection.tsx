/**
 * Navigation Section Component
 * Renders a group of navigation items with labels
 */

import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import styles from "./Sidebar.module.scss";
import type { NavSectionProps } from "./types";

/**
 * NavSection Component
 * @param label - Section title (e.g., "Main menu", "Resources")
 * @param items - Array of navigation items
 * @param pathname - Current pathname for active state detection
 */
const NavSection = ({ label, items, pathname }: NavSectionProps) => {
  const isItemActive = (itemUrl: string | undefined): boolean => {
    if (!itemUrl) return false;
    if (itemUrl === "/") return pathname === "/";
    return pathname.startsWith(itemUrl);
  };

  return (
    <SidebarGroup className={styles.navSection}>
      {label && (
        <SidebarGroupLabel className={styles.navSectionLabel}>
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu className={styles.navMenu}>
          {items.map((item) => (
            <SidebarMenuItem key={item.title} className={styles.menuItem}>
              <SidebarMenuButton
                asChild={!!item.url}
                isActive={isItemActive(item.url)}
                onClick={item.onClick}
                tooltip={item.title}
                className={styles.menuButton}
              >
                {item.url ? (
                  <Link href={item.url} className={styles.menuLink}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  <div className={styles.menuLink}>
                    <item.icon />
                    <span>{item.title}</span>
                  </div>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

NavSection.displayName = "NavSection";

export default NavSection;
