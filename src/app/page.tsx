"use client";

import { Button } from "@/components/ui/button";
import { use } from "react";
import { toast } from "sonner";
const Home = () => {
  return (
    <div>
      <Button size="xs" onClick={() => toast.success("Hello world")}>
        Hello
      </Button>
    </div>
  );
};
export default Home;
