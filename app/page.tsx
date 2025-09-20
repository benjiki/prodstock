"use client";
import Appheader from "@/components/App-header";
import AppTable from "@/components/AppTable";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className={`font-poppins p-5  border w-full min-h-screen`}>
      <Card className="flex flex-col shadow-none p-2">
        <Appheader />
        <AppTable />
      </Card>
    </div>
  );
}
