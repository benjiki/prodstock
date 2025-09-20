import { LucideIcon } from "lucide-react";


export type Status ={
    value:string,
    label:string,
    icons:React.ReactNode;
}

export type Category={
    value:string;
    label:string;
}

export type Product ={
    id:string,
    name:string,
    supplier:string,
    sku:string;
   category:
    | "Electronics"
    | "Fashion"
    | "Home & Garden"
    | "Books"
    | "Beauty & Personal Care"
    | "Sports & Outdoors"
    | "Toys & Games"
    | "Automotive"
    | "Groceries"
    | "Health & Wellness"
    | "Others";
    status:"Published" | "Inactive" | "Draft";
    quantityInStock:number;
    price:number;
    icon:LucideIcon;
}
export type PaginationType ={
    pageIndex: number
    pageSize: number
}

export type PaginationTableState = {
  pagination: PaginationType
}

export type PaginationInitialTableState = {
  pagination?: Partial<PaginationType>
}