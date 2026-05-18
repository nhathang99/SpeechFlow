"use client";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <h1 className="text-4xl font-bold">Welcome to SpeechFlow </h1>
        <p className="text-lg">SpeechFlow is a platform for...</p>
        <div className="flex gap-4">
          <UserButton />
          <OrganizationSwitcher />
        </div>
      </div>
    </div>
  );
};
export default HomePage;