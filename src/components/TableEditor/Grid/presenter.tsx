import React from "react";
import type { GridPresenterProps } from "@src/types/props";
import { gridColNum } from "../../../const";
import { useGridEditor } from "../../../hooks/useGridEditor";
import TableLayout from "@src/components/Common/TableLayout";
import IdInputModal from "./IdInputModal";

function GridPresenter({
  defaultGridCells,
  coloredCells,
  selectedCells,
  setTableStyles,
  showModal,
  setShowModal,
}: GridPresenterProps) {
  return (
    <div className="container fixed mx-auto max-w-[700px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 xl:max-w-[885px] xl:overflow-scroll">
      <section className="absolute grid aspect-square w-full grid-cols-15 grid-rows-15 gap-1 rounded-lg text-center font-mono text-sm font-bold leading-6 text-slate-500">
        {defaultGridCells}
      </section>
      <TableLayout isEditor={true} gridCells={coloredCells} />
      <IdInputModal
        selectedCells={selectedCells}
        setTableStyles={setTableStyles}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default GridPresenter;
