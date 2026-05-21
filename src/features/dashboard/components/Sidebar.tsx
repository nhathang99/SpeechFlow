"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import Link from "next/link";
import { useState } from "react";
import { mainMenuItems, othersMenuItems } from "@/routes";
import { NavSectionProps } from "@/interface/menu";
// import { VoiceCreateDialog } from "@/components/VoiceCreateDialog"; 

function NavSection({ label, items, pathname }: NavSectionProps) {
  return (
    <SidebarGroup className="px-0 py-0 mb-5">
      {label && (
        <SidebarGroupLabel className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]/80 pl-3 mb-2 h-auto">
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu className="gap-1.5">
          {items.map((item) => {
            const isItemActive = item.url
              ? item.url === "/"
                ? pathname === "/"
                : pathname.startsWith(item.url)
              : false;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild={!!item.url}
                  isActive={isItemActive}
                  onClick={item.onClick}
                  tooltip={item.title}
                  className="h-11 px-3.5 py-2.5 text-[13.5px] tracking-normal font-semibold transition-all duration-200 rounded-2xl
                             data-[active=true]:bg-[#0EA5E9] data-[active=true]:text-white data-[active=true]:shadow-sm
                             hover:bg-slate-200/40 hover:text-[#0EA5E9] data-[active=true]:hover:bg-[#0EA5E9] data-[active=true]:hover:text-white
                             [&_svg]:size-[18px] [&_svg]:shrink-0 [&_svg]:text-[#475569]
                             data-[active=true]:[&_svg]:text-white"
                >
                  {item.url ? (
                    <Link
                      href={item.url}
                      className="flex items-center w-full gap-3"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  ) : (
                    <div className="flex items-center w-full gap-3">
                      <item.icon />
                      <span>{item.title}</span>
                    </div>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <>
      <Sidebar
        collapsible="icon"
        className="bg-[#F8FAFC] border-r border-slate-100"
      >
        {/* Header */}
        <SidebarHeader className="flex flex-col gap-5 pt-6 pb-2 px-4 bg-[#F8FAFC]">
          {/* Logo Brand */}
          <div className="flex items-center gap-3 pl-0.5 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:pl-0">
            <div className="flex size-9 items-center justify-center rounded-2xl bg-[#0EA5E9] text-white shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4.5"
              >
                <path d="M12 2v20M17 5v14M22 9v6M7 8v8M2 10v4" />
              </svg>
            </div>
            <span className="group-data-[collapsible=icon]:hidden font-bold text-[18px] tracking-tight text-[#0F172A]">
              VoiceStudio
            </span>
            <SidebarTrigger className="ml-auto lg:hidden" />
          </div>

          {/* Switcher */}
          <SidebarMenu>
            <SidebarMenuItem>
              <OrganizationSwitcher
                hidePersonal
                fallback={
                  <Skeleton className="h-[48px] w-full group-data-[collapsible=icon]:size-9 rounded-xl border bg-white" />
                }
                appearance={{
                  elements: {
                    rootBox:
                      "w-full group-data-[collapsible=icon]:w-auto group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center",
                    organizationSwitcherTrigger:
                      "w-full h-[48px] justify-between bg-white border border-slate-100 rounded-2xl px-3 py-2 gap-3 group-data-[collapsible=icon]:w-auto group-data-[collapsible=icon]:p-2 shadow-[0px_1px_2px_rgba(0,0,0,0.01)] hover:bg-slate-50 transition-colors",
                    organizationPreview: "gap-2.5",
                    organizationPreviewAvatarBox:
                      "size-6.5 rounded-md font-semibold",
                    organizationPreviewTextContainer:
                      "text-left group-data-[collapsible=icon]:hidden",
                    organizationPreviewMainIdentifier:
                      "text-[12.5px] font-semibold text-[#1E293B] tracking-tight leading-none mb-0.5 w-[140px] truncate",
                    organizationPreviewSecondaryIdentifier: "hidden", // Ẩn bớt text gói cước cho giống hình mẫu của bạn
                    organizationSwitcherTriggerIcon:
                      "size-4 text-[#64748B] group-data-[collapsible=icon]:hidden",
                  },
                }}
              />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        {/* Content */}
        <SidebarContent className="bg-[#F8FAFC] px-4 gap-0">
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

        {/* Footer User Profile */}
        <SidebarFooter className="gap-3 py-3 bg-[#F0F9FF]">
          <SidebarMenu>
            <SidebarMenuItem>
              <UserButton
                showName
                fallback={
                  <Skeleton className="h-8.5 w-full group-data-[collapsible=icon]:size-8 rounded-md border border-border bg-white" />
                }
                appearance={{
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
                }}
              />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </>
  );
}
