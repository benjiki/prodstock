"use client";
import Appheader from "@/components/App-header";
import AppTable from "@/components/AppTable";
import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const bgcolor = theme === "dark" ? "bg-black" : "bg-gray-50";

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div className={`font-poppins p-5 ${bgcolor} border w-full min-h-screen`}>
      <Card className="flex flex-col shadow-none p-2">
        <Appheader />
        <AppTable />
      </Card>
    </div>
  );
}
