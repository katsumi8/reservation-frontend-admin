import type { TableEditorPresenterProps } from "@src/types/props";
import React from "react";
import Header from "../Common/Header";
import Grid from "./Grid";

const TableEditorPresenter = ({
  error,
  loading,
  tableStyles,
  setTableStyles,
  initialData,
}: TableEditorPresenterProps) => {
  if (error)
    return <p className="text-red-700">Layout Error! {error.message}</p>;

  return (
    <div>
      <Header
        rightBtnText="Save"
        rightBtnLink="/"
        leftBtnLink="/"
        leftBtnText="Cancel"
        pageTitle="Table Editing"
        mutationTables={tableStyles}
        fetchedTables={initialData}
      />
      {loading ? (
        <p className="text-black">Loading...</p>
      ) : (
        <Grid tableStyles={tableStyles} setTableStyles={setTableStyles} />
      )}
    </div>
  );
};

export default TableEditorPresenter;
