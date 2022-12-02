import React from "react";
import { gridColNum } from "./const";
import { useGridEditor } from "./hooks";

function TableGrid() {
  const {
    mouseClickStartHandler,
    mouseClickLeaveHandler,
    colorCellStyles,
    deleteClickHandler,
  } = useGridEditor();

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
  for (let i = 0; i < colorCellStyles.length; i++) {
    coloredCells.push(
      <div
        key={i}
        id={`${colorCellStyles[i].id}`}
        className="rounded-lg border-blue-500 bg-red-50 p-1"
        style={{
          gridArea: colorCellStyles[i].position,
        }}
      >
        ID:{colorCellStyles[i].id}
        <button
          className="float-right"
          onClick={(e) => deleteClickHandler(colorCellStyles[i].id)}
          style={{ pointerEvents: "auto" }}
        >
          X
        </button>
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
