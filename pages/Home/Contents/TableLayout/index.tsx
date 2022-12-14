import React from "react";
import { useFetchTableData } from "../../../api/queries/tableData";

function TableLayout() {
  const { tableStyles, error, loading } = useFetchTableData();

  const tableLayout: JSX.Element[] = [];
  for (let i = 0; i < tableStyles.length; i++) {
    tableLayout.push(
      <div
        key={i}
        id={`${tableStyles[i].tableID}`}
        className="rounded-lg border-blue-500 bg-teal-100 p-1"
        style={{
          gridArea: tableStyles[i].position,
        }}
      >
        <p className="m-0">{tableStyles[i].tableID}</p>
      </div>
    );
  }

  if (loading) return <p className="text-black">Loading...</p>;
  if (error) return <p className="text-red-700">Layout Error! {error.message}</p>;

  return (
    <div className="container mx-auto rounded-lg border border-gray-200 bg-stone-100 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <section className="grid aspect-square grid-cols-15 grid-rows-15 gap-1 rounded-lg text-center font-mono text-sm font-bold text-slate-500">
        {tableLayout}
      </section>
    </div>
  );
}

export default TableLayout;
