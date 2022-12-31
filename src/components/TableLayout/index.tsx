import React from "react";
import Header from "../Header";
import Sidebar from "./Sidebar";
import MainLayout from "./MainLayout";

function TableLayout() {
  return (
    <>
      <Header
        rightBtnText={"Edit Table"}
        rightBtnLink={"/TableEditor"}
        pageTitle="Table and Reservations"
      />
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1">
          <MainLayout />
        </div>
      </div>
    </>
  );
}

export default TableLayout;
