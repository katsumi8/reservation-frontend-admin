import React from "react";
import { TableGridProps } from "../../../src/types/props";
import { gridColNum } from "../../../const";
import { useGridEditor } from "./hooks";

function TableGrid({
  setShowModal,
  setSelectedCells,
  tableStyles,
  setTableStyles,
}: TableGridProps) {
  const { mouseClickStartHandler, mouseClickLeaveHandler, deleteClickHandler } =
    useGridEditor({
      setShowModal,
      setSelectedCells,
      tableStyles,
      setTableStyles,
    });

  const defaultGridCells: JSX.Element[] = [];
  for (let i = 0; i < gridColNum ** 2; i++) {
    defaultGridCells.push(
      <div
        className="aspect-square select-none rounded-lg border-blue-500 bg-slate-50 p-1 shadow-lg"
        key={i.toString()}
        id={i.toString()}
        onMouseDown={mouseClickStartHandler}
        onMouseUp={mouseClickLeaveHandler}
      >
        +
      </div>
    );
  }

  const coloredCells: JSX.Element[] = [];
  for (let i = 0; i < tableStyles.length; i++) {
    coloredCells.push(
      <div
        key={i}
        id={`${tableStyles[i].id}`}
        className="rounded-lg border-blue-500 bg-red-50"
        style={{
          gridArea: tableStyles[i].position,
        }}
      >
        <button
          className="pointer-events-auto float-right"
          onClick={(e) => deleteClickHandler(tableStyles[i].tableName)}
        >
          X
        </button>
        <p className="mx-auto">{tableStyles[i].tableName}</p>
      </div>
    );
  }

  return (
    <div className="container absolute mx-auto overflow-scroll rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <section className="absolute grid aspect-square w-[80vw] grid-cols-15 grid-rows-15 gap-1 rounded-lg text-center font-mono text-sm font-bold leading-6 text-slate-500">
        {defaultGridCells}
      </section>
      <section className="pointer-events-none relative grid aspect-square w-[80vw] grid-cols-15 grid-rows-15 gap-1 rounded-lg text-center font-mono text-sm font-bold leading-6 text-slate-500">
        {coloredCells}
      </section>
    </div>
  );
}

export default TableGrid;
