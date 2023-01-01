import React from "react";

type TableLayoutProp = {
  isEditor: boolean;
  gridCells: JSX.Element[];
};

const TableLayout = ({ isEditor, gridCells }: TableLayoutProp) => {
  return (
    <section
      className={
        isEditor
          ? "pointer-events-none relative grid aspect-square w-[80vw] grid-cols-15 grid-rows-15 gap-1 rounded-lg text-center font-mono text-sm font-bold leading-6 text-slate-500"
          : "grid aspect-square grid-cols-15 grid-rows-15 gap-1 rounded-lg text-center font-mono text-sm font-bold text-slate-500"
      }
    >
      {gridCells}
    </section>
  );
};

export default TableLayout;
