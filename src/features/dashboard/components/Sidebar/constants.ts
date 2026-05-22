/**
 * Clerk UI Configuration Constants
 * Centralized styling for Clerk components to keep component code clean
 */

export const CLERK_APPEARANCE_CONFIG = {
  organizationSwitcher: {
    elements: {
      rootBox: "w-full group-data-[collapsible=icon]:w-auto group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center",
      organizationSwitcherTrigger:
        "w-full h-[48px] justify-between bg-white border border-slate-100 rounded-2xl px-3 py-2 gap-3 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:h-10 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:border-none group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:shadow-none group-data-[collapsible=icon]:hover:bg-transparent shadow-[0px_1px_2px_rgba(0,0,0,0.01)] hover:bg-slate-50 transition-colors",
      organizationPreview: "gap-2.5 group-data-[collapsible=icon]:hidden",
      organizationPreviewAvatarBox:
        "size-6.5 rounded-md font-semibold group-data-[collapsible=icon]:size-6",
      organizationPreviewTextContainer: "text-left group-data-[collapsible=icon]:hidden",
      organizationPreviewMainIdentifier:
        "text-[12.5px] font-semibold text-[#1E293B] tracking-tight leading-none mb-0.5 w-[140px] truncate group-data-[collapsible=icon]:hidden",
      organizationPreviewSecondaryIdentifier: "hidden",
      organizationSwitcherTriggerIcon: "size-4 text-[#64748B] group-data-[collapsible=icon]:hidden",
    },
  },
  userButton: {
    elements: {
      rootBox:
        "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",
      userButtonTrigger:
        "w-full! justify-between! bg-white! border! border-border! rounded-md! pl-1! pr-2! py-1! shadow-[0px_1px_1.5px_0px_rgba(44,54,53,0.03)]! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1! group-data-[collapsible=icon]:after:hidden! [--border:color-mix(in_srgb,transparent,var(--clerk-color-neutral,#000000)_15%)]!",
      userButtonBox: "flex-row-reverse! gap-2!",
      userButtonOuterIdentifier:
        "text-[13px]! tracking-tight! font-medium! text-foreground! pl-0! group-data-[collapsible=icon]:hidden!",
      userButtonAvatarBox: "size-6!",
    },
  },
} as const;

export const SIDEBAR_BRANDING = {
  name: "VoiceStudio",
  icon: {
    viewBox: "0 0 24 24",
    path: "M12 2v20M17 5v14M22 9v6M7 8v8M2 10v4",
  },
} as const;
