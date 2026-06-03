/**
 * Type definitions for Sidebar components
 */

export interface NavItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  url?: string;
  onClick?: () => void;
}

export interface NavSectionProps {
  label?: string;
  items: NavItem[];
  pathname: string;
}
