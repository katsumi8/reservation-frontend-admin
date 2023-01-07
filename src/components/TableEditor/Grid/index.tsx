import type { CellType } from "@src/types/states";
import { useState } from "react";
import type { GridProps } from "@src/types/props";
import GridPresenter from "./presenter";
import { useGridEditor } from "../../../hooks/useGridEditor";
import { gridColNum } from "@src/const";

export default function Grid({ tableStyles, setTableStyles }: GridProps) {
  const [selectedCells, setSelectedCells] = useState<CellType>({
    startCell: 0,
    endCell: 0,
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    mouseClickStartHandler,
    mouseClickLeaveHandler,
    mobileTouchStartHandler,
    mobileTouchEndHandler,
    deleteClickHandler,
  } = useGridEditor({
    setShowModal,
    setSelectedCells,
    tableStyles,
    setTableStyles,
  });

  const defaultGridCells: JSX.Element[] = [];
  for (let i = 0; i < gridColNum ** 2; i++) {
    defaultGridCells.push(
      <div
        className="aspect-square select-none rounded-lg border-blue-500 bg-slate-50 p-1 shadow-lg touch-none"
        key={i.toString()}
        id={i.toString()}
        onMouseDown={mouseClickStartHandler}
        onMouseUp={mouseClickLeaveHandler}
        onTouchStart={mobileTouchStartHandler}
        onTouchEnd={mobileTouchEndHandler}
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
    <GridPresenter
      setShowModal={setShowModal}
      setTableStyles={setTableStyles}
      defaultGridCells={defaultGridCells}
      coloredCells={coloredCells}
      selectedCells={selectedCells}
      showModal={showModal}
    />
  );
}
