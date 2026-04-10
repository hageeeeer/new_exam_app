import React from "react";
import { AdminDiplomaTable } from "../components/Table";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";

export default function ExamsPage() {
  return (
    <div>
      <p className="text-[14px] text-custom-gray-400 py-4 px-2">Diplomas</p>

      <div className="flex justify-between  items-center  sm:gap-0 gap-2 px-4 py-2 border-2 border-gray-100">
        <Pagination />
        
          <Button className="rounded-none text-[14px] bg-custom-green-500 text-white">
            + Create New Exam
          </Button>
       
      </div>
      <div className="wrapper bg-gray-100">
        <Search />
        {/* AdminDiplomaTable */}
        <AdminDiplomaTable></AdminDiplomaTable>
      </div>
    </div>
  );
}
