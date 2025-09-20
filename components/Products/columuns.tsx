import { Product } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Check } from "lucide-react";
import { ReactNode } from "react";
import ProductDropDown from "../DropDowns/ProductDropDown";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Name",
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
    header: "Sku",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ getValue }) => `$${getValue<number>().toFixed(2)}`,
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "status",
    header: "Status",
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
    header: "QuantityInStock",
  },
  {
    accessorKey: "supplier",
    header: "Supplier",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <ProductDropDown row={row} />;
    },
  },
];
