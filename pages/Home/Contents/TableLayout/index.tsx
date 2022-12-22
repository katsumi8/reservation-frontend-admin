import React from "react";
import { useFetchTableData } from "../../../../components/hooks/queries/tableData";

function TableLayout() {
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

  if (loading) return <p className="text-black">Loading...</p>;
  if (error)
    return <p className="text-red-700">Layout Error! {error.message}</p>;

  return (
    <div className="container mx-auto rounded-lg border border-gray-200 bg-stone-100 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <section className="grid aspect-square grid-cols-15 grid-rows-15 gap-1 rounded-lg text-center font-mono text-sm font-bold text-slate-500">
        {tableLayout}
      </section>
    </div>
  );
}

export default TableLayout;
