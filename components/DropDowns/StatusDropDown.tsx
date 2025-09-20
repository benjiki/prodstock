"use client";
import { Status } from "@/types";
import { statuses } from "@/utils/Status";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { BrushCleaning, LucideGitPullRequestDraft } from "lucide-react";
import { Command, CommandGroup, CommandItem, CommandList } from "../ui/command";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
const StatusDropDown = () => {
  const [open, setOpen] = useState(false);

  function returnColor(status: string) {
    switch (status) {
      case "published":
        return "text-green-600 bg-green-100";
      case "inactive":
        return "text-red-600 bg-green-100";
      case "draft":
        return "text-amber-800 bg-green-100";
      default:
        break;
    }
  }
  return (
    <div className="flex items-center space-x-4 font-poppins ">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant={"secondary"} className="h-10">
            <LucideGitPullRequestDraft />
            Status
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-0 w-48 font-poppins"
          side="bottom"
          align="center"
        >
          <Command className="p-1">
            <CommandList>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    className="h-10 mb-2"
                    key={status.value}
                    value={status.value}
                  >
                    <Checkbox className="checkbox" />
                    <div
                      className={`flex items-center gap-1 ${returnColor(
                        status.value
                      )} p-1 rounded-lg px-4 text-[13px]`}
                    >
                      {status.icons}
                      {status.label}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <div className="flex flex-col gap-2 text-[23px]">
              <Separator />
              <Button variant={"ghost"} className="text-[17px] mb-1">
                <BrushCleaning /> Clear Filtter
              </Button>
            </div>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default StatusDropDown;
