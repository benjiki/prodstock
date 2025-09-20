import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { CircleX } from "lucide-react";
import StatusDropDown from "../DropDowns/StatusDropDown";
import CategoryDropDown from "../DropDowns/CategoryDropDown";

function FilterArea() {
  return (
    <div className="flex gap-3">
      <div className="border-dashed border rounded-sm p-1 flex gap-2 items-center px-2 text-sm">
        <span className="text-gray-600">Status</span>
        <Separator orientation="vertical" />
        <div className="flex gap-2 items-center">
          <Badge variant={"secondary"}>Item 1</Badge>
          <Badge variant={"secondary"}>Item 2</Badge>
        </div>
      </div>

      {/* category */}
      <div className="border-dashed border rounded-sm p-1 flex gap-2 items-center px-2 text-sm">
        <span className="text-gray-600">Category</span>
        <Separator orientation="vertical" />
        <div className="flex gap-2 items-center">
          <Badge variant={"secondary"}>item 1</Badge>
          <Badge variant={"secondary"}>item 2</Badge>
        </div>
      </div>
      <Button variant={"ghost"} className="p-1 px-2">
        <span>Reset</span>
        <CircleX />
      </Button>
    </div>
  );
}
const ProductTable = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-5 mb-8 mt-6">
        <div className="flex items-center justify-between">
          <Input
            placeholder="Search Product Name here"
            className="max-w-sm h-10"
          />
          <div className="flex items-center gap-4">
            <StatusDropDown />
            <CategoryDropDown />
          </div>
        </div>
        {/* filter area */}
        <FilterArea />
      </div>
      {/* table */}
      <div></div>
    </div>
  );
};

export default ProductTable;
