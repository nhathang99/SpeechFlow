import { UserButton } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import { CLERK_APPEARANCE_CONFIG } from "./constants";

const UserProfile = () => {
  return (
    <>
      <UserButton
        showName
        fallback={
          <Skeleton className="h-8.5 w-full group-data-[collapsible=icon]:size-8 rounded-md border border-border bg-white" />
        }
        appearance={{
          elements: CLERK_APPEARANCE_CONFIG.userButton.elements,
        }}
      />
    </>
  );
};

export default UserProfile;
