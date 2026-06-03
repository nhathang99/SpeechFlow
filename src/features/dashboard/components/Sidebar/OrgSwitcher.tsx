import { OrganizationSwitcher } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import { CLERK_APPEARANCE_CONFIG } from "./constants";
const OrgSwitcher = () => {
  return (
    <OrganizationSwitcher
      hidePersonal
      fallback={
        <Skeleton className="h-[48px] w-full group-data-[collapsible=icon]:size-9 rounded-xl border bg-white" />
      }
      appearance={{
        elements: CLERK_APPEARANCE_CONFIG.organizationSwitcher.elements,
      }}
    />
  );
};

export default OrgSwitcher;
