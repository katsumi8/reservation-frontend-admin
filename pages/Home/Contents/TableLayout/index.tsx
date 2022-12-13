import React from "react";

function TableLayout() {
  return (
    <div className="container mx-auto rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <section className="grid aspect-square grid-cols-15 grid-rows-15 gap-1 rounded-lg text-center font-mono text-sm font-bold text-slate-500">
        <div
          key="21"
          id="21"
          className="rounded-lg border-blue-500 bg-red-50 p-1"
          style={{
            gridArea: "10 / 8 / 13 / 10",
          }}
        >
          <p className="m-0">ID: 21</p>
        </div>
      </section>
    </div>
  );
}

export default TableLayout;
