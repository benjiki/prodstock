import { Package } from "lucide-react";
import React from "react";
import { ModeToggle } from "./Mode-toggle";

function AppLogo() {
  return (
    <div className="flex items-center gap-2 transition-all">
      <div className="">
        <Package size={50} />
      </div>
      <div className="flex items-center gap-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold text-[24px]">ProdStock</span>
      </div>
    </div>
  );
}

const Appheader = () => {
  return (
    <div className="p-2 flex justify-between items-center">
      <AppLogo />
      <ModeToggle />
    </div>
  );
};

export default Appheader;
