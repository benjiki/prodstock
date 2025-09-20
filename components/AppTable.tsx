import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const AppTable = () => {
  return (
    <Card className="mt-12 flex flex-col shadow-none font-poppins border-none">
      <CardHeader className="flex justify-between p-2 ">
        <div className="">
          <CardTitle className="font-bold text-[23px] ">Products</CardTitle>
          <p className="text-sm ">34 Products</p>
        </div>
        <Button className="text-white">Add Products</Button>
      </CardHeader>
      <CardContent>{/* Add table or product list content here */}</CardContent>
    </Card>
  );
};

export default AppTable;
