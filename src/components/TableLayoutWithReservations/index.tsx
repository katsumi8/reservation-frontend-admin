import React from "react";
import Header from "../Common/Header";
import Sidebar from "./Sidebar";
import MainLayout from "./MainLayout";

function TableLayoutWithReservations() {
  return (
    <>
      <Header
        rightBtnText={"Edit Table"}
        rightBtnLink={"/table-editor"}
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

export default TableLayoutWithReservations;
