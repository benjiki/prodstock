"use client";
import { categories } from "@/utils/Category";
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { BrushCleaning, LucideGitPullRequestDraft } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

const CategoryDropDown = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "c" && (e.metaKey || e.altKey)) {
        e.preventDefault();
        setOpen(true); // set to true directly instead of toggling
      }
    };

    document.addEventListener("keydown", down);

    return () => document.removeEventListener("keydown", down);
  }, []);

  function returnColor(category: string) {
    switch (category) {
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
            Categories
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-0 w-48 font-poppins"
          side="bottom"
          align="center"
        >
          <Command className="p-1">
            <CommandInput placeholder="Category" />
            <CommandList>
              <CommandEmpty className="text-slate-500 text-sm text-center p-5">
                No Category Found
              </CommandEmpty>
              <CommandGroup>
                {categories.map((category) => (
                  <CommandItem
                    className="h-10 mb-2"
                    key={category.value}
                    value={category.value}
                  >
                    <Checkbox className="checkbox" />
                    <div
                      className={`flex items-center gap-1 ${returnColor(
                        category.value
                      )} p-1 rounded-lg px-4 text-[13px]`}
                    >
                      {category.label}
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

export default CategoryDropDown;
