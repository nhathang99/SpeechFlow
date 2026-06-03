import {
  Home,
  LayoutGrid,
  AudioLines,
  Volume2,
  Settings,
  Headphones,
} from "lucide-react";
import { MenuItem } from "@/interface/menu";
export const mainMenuItems: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Explore voices",
    url: "/voices",
    icon: LayoutGrid,
  },
  {
    title: "Text to speech",
    url: "/text-to-speech",
    icon: AudioLines,
  },
  {
    title: "Voice cloning",
    icon: Volume2,
    onClick: () => {},
  },
];

export const othersMenuItems: MenuItem[] = [
  {
    title: "Settings",
    icon: Settings,
  },
  {
    title: "Help and support",
    url: "support@gmail.com",
    icon: Headphones,
  },
];
