# Sidebar Component Documentation

## Overview
Professional sidebar component with collapsible design, organization switching, and user profile management.

## Project Structure

```
Sidebar/
├── Sidebar.module.scss       # Main styles (design system variables + component styles)
├── constants.ts              # Clerk UI configuration constants
├── types.ts                  # TypeScript type definitions
├── LogoBrand.tsx             # Logo and branding component
├── OrgSwitcher.tsx           # Organization switcher component
├── UserProfile.tsx           # User profile button component
├── NavSection.tsx            # Navigation menu section component
└── index.ts                  # Central exports
```

## Components

### DashboardSidebar
Main container component with collapsible functionality.

**Features:**
- Responsive collapsible design
- Organization switcher with organization selection
- User profile management
- Multiple navigation sections
- Active state tracking

### LogoBrand
Displays application logo and name.

**Props:** None (uses constants)

### OrgSwitcher
Manages organization selection via Clerk.

**Props:** None (configured via constants)

### UserProfile
Shows user avatar and profile menu.

**Props:** None (configured via constants)

### NavSection
Renders navigation menu items with active state.

**Props:**
```typescript
interface NavSectionProps {
  label?: string;           // Section title
  items: NavItem[];         // Array of menu items
  pathname: string;         // Current pathname for active state
}

interface NavItem {
  title: string;                                           // Item label
  icon: React.ComponentType<{ className?: string }>;  // Icon component
  url?: string;                                          // Navigation URL
  onClick?: () => void;                                  // Click handler
}
```

## Usage

```tsx
import { DashboardSidebar } from "@/features/dashboard/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <DashboardSidebar />
      <main>Content here</main>
    </div>
  );
}
```

## Styling

### Design System Variables
Located in `Sidebar.module.scss`:

- **Colors**: Primary, backgrounds, text colors
- **Spacing**: xs (4px) → xl (32px)
- **Typography**: Font sizes, weights
- **Transitions**: Smooth animations (200ms)

### Features
- CSS Modules for style scoping
- Responsive design with mobile support
- Accessibility features (reduced motion, high contrast)
- Collapsible state management

## Clerk Configuration

All Clerk appearance configurations are centralized in `constants.ts`:
- Organization switcher styles
- User button styles
- Responsive collapsed states

## Best Practices

1. ✅ **Modular Structure**: Each component has single responsibility
2. ✅ **Centralized Styles**: Design system in one place
3. ✅ **TypeScript Support**: Full type safety
4. ✅ **Accessibility**: Built-in responsive and contrast support
5. ✅ **Performance**: Optimized re-renders with proper memoization
6. ✅ **Documentation**: Clear comments and JSDoc

## Responsive Behavior

### Desktop (lg and above)
- Full width sidebar with all text visible
- Hover effects on menu items
- Expanded organization switcher

### Collapsed State
- Icon-only display for menu items
- Compact organization switcher (icon only)
- Minimal user profile button
- Labels and descriptions hidden

### Mobile & Tablets
- Logo text hidden below lg breakpoint
- Adjusted padding and spacing
- Touch-friendly button sizes

## Accessibility

- ✅ High contrast mode support
- ✅ Reduced motion preferences respected
- ✅ Semantic HTML structure
- ✅ ARIA attributes (from Clerk & Shadcn components)
- ✅ Keyboard navigation support
