import React from "react";
import { useFetchTableData } from "@src/utils/queries/tableData";
import MainLayoutPresenter from "./presenter";

function MainLayout() {
  const { tableStyles, error, loading } = useFetchTableData();

  const tableLayout: JSX.Element[] = [];
  for (let i = 0; i < tableStyles.length; i++) {
    const duplicateTable = tableStyles.filter(
      (obj) => obj.tableName === tableStyles[i].tableName
    );
    const duplicateLength = duplicateTable.length;
    const firstDuplicatedId = duplicateTable[0].id;

    tableLayout.push(
      <div
        key={i}
        id={`${tableStyles[i].tableName}`}
        className="flex items-center justify-center rounded-lg bg-teal-100"
        style={{
          gridArea: tableStyles[i].position,
        }}
      >
        {duplicateLength < 1 ? (
          <p>{tableStyles[i].tableName}</p>
        ) : firstDuplicatedId === tableStyles[i].id ? (
          <p>{tableStyles[i].tableName}</p>
        ) : null}
      </div>
    );
  }

  return (
    <MainLayoutPresenter
      loading={loading}
      error={error}
      tableLayout={tableLayout}
    />
  );
}

export default MainLayout;
