import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { CopyCheck, Edit, LucideDelete, MoreHorizontal } from "lucide-react";
import { Row } from "@tanstack/react-table";
import { Product } from "@/types";

const ProductDropDown = ({ row }: { row: Row<Product> }) => {
  const menuItem = [
    { icon: <CopyCheck />, label: "Copy", className: "" },
    { icon: <Edit />, label: "Edit", className: "" },
    { separator: true },
    {
      icon: <LucideDelete className="text-lg" />,
      label: "Delete",
      className: "text-red-600",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="font-poppins">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>

        {menuItem.map((item, index) =>
          item.separator ? (
            <DropdownMenuSeparator key={index} />
          ) : (
            <DropdownMenuItem
              key={index}
              className={`flex items-center gap-1 p-[10px] ${item.className}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductDropDown;
