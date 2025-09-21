import { Product, SortableHeaderProps } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowDownWideNarrow,
  ArrowUpDown,
  ArrowUpWideNarrow,
  Check,
} from "lucide-react";
import { ReactNode } from "react";
import ProductDropDown from "../DropDowns/ProductDropDown";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

// Define columns with sorting logic in headers
export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <SorttableHeader column={column} label="Name" />; // Fixed return statement here
    },
    cell: ({ row }) => {
      const Icon = row.original.icon;
      const name = row.original.name;
      return (
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-sm bg-primary/10">
            <Icon className="text-lg text-primary" />
          </div>
          <span>{name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "sku",
    header: ({ column }) => {
      return <SorttableHeader column={column} label="Sku" />;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return <SorttableHeader column={column} label="Price" />;
    },
    cell: ({ getValue }) => `$${getValue<number>().toFixed(2)}`,
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return <SorttableHeader column={column} label="Category" />;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return <SorttableHeader column={column} label="Status" />;
    },
    cell: ({ row }) => {
      const status = row.original.status;
      let colorClass;
      let icon: ReactNode;

      switch (status) {
        case "Published":
          colorClass = "text-green-600 bg-green-100";
          icon = <Check className="text-[17px]" />;
          break;
        case "Inactive":
          colorClass = "text-red-600 bg-red-100";
          icon = <Check className="text-[17px]" />;
          break;
        case "Draft":
          colorClass = "text-amber-800 bg-amber-100";
          icon = <Check className="text-[17px]" />;
          break;
      }

      return (
        <span
          className={`px-3 py-[2px] rounded-full font-medium ${colorClass} flex gap-1 items-center w-fit`}
        >
          {icon}
          <span className="text-[13px]">{status}</span>
        </span>
      );
    },
  },
  {
    accessorKey: "quantityInStock",
    header: ({ column }) => {
      return <SorttableHeader column={column} label="QunatityInStock" />;
    },
  },
  {
    accessorKey: "supplier",
    header: ({ column }) => {
      return <SorttableHeader column={column} label="Supplier" />;
    },
  },
  {
    id: "Actions",
    cell: ({ row }) => {
      return <ProductDropDown row={row} />;
    },
  },
];

// Sortable Header Component
const SorttableHeader: React.FC<SortableHeaderProps> = ({ column, label }) => {
  const isSorted = column.getIsSorted();
  const SortingIcon =
    isSorted === "asc"
      ? ArrowDownWideNarrow
      : isSorted === "desc"
      ? ArrowUpWideNarrow
      : ArrowUpDown;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          aria-label={`Sort by ${label}`}
          className="flex items-center gap-2"
        >
          {label}
          <SortingIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="bottom">
        <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
          <ArrowUpWideNarrow className="mr-2 h-4 w-4" />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
          <ArrowDownWideNarrow className="mr-2 h-4 w-4" />
          Desc
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
