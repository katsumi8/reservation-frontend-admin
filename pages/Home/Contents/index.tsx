import React from "react";
import Header from "../../../components/Header";
import MainContent from "../../../components/Main";
import Sidebar from "../../../components/Sidebar";
import TableLayout from "./TableLayout";

function CurrentTables() {
  return (
    <>
      <Header
        rightBtnText={"Edit Table"}
        rightBtnLink={"/TableEditor"}
        pageTitle="Table and Reservations"
      />
      <MainContent>
        <TableLayout />
      </MainContent>
    </>
  );
}

export default CurrentTables;
