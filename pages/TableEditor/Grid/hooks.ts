import { useState } from "react";
import { cellStyle, cellType } from "../../../types/props";
import { gridColNum } from "./const";

export const useGridEditor = () => {
  const [clickedId, setClickedId] = useState<string>("");
  const [selectedCells, setSelectedCells] = useState<cellType[]>([]);

  const mouseClickStartHandler = (e: React.MouseEvent<HTMLElement>): void => {
    console.log("click was started");
    const { id } = e.currentTarget;
    setClickedId(id);
  };

  const mouseClickLeaveHandler = (e: React.MouseEvent<HTMLElement>): void => {
    console.log("click was left");
    const { id } = e.currentTarget;
    setClickedId("");

    setSelectedCells((prevCells) => [
      ...prevCells,
      {
        id: selectedCells.length,
        startCell: Number(clickedId),
        endCell: Number(id),
      },
    ]);
  };

  const calculateGridStyle = (
    selectedCells: cellType[],
    num: number,
    gridColNum: number
  ): {
    id: number;
    gridArea: string;
    capability: string;
  } => {
    const { id, startCell, endCell } = selectedCells[num];

    const rowStart = Math.ceil(Number(startCell) / gridColNum);
    const colStart = Number(startCell) - (rowStart - 1) * gridColNum + 1;
    const rowEnd = Math.ceil(Number(endCell) / gridColNum) + 1;
    const colEnd = Number(endCell) - (rowEnd - 2) * gridColNum + 2;
    const gridArea = `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`;

    const rowDiff = rowEnd - rowStart;
    const colDiff = colEnd - colStart;
    const capability =
      rowDiff > colDiff ? (rowDiff * 2).toString() : (colDiff * 2).toString();

    return { id, gridArea, capability };
  };

  const colorCellStyles: cellStyle[] = [];
  for (let i = 0; i < selectedCells.length; i++) {
    const { id, gridArea, capability } = calculateGridStyle(
      selectedCells,
      i,
      gridColNum
    );

    colorCellStyles.push({
      id,
      position: gridArea,
      isRound: false,
      capability,
    });
  }

  const deleteClickHandler = (id: number) => {
    setSelectedCells(selectedCells.filter((item, index) => item.id !== id));
  };

  return {
    selectedCells,
    mouseClickStartHandler,
    mouseClickLeaveHandler,
    colorCellStyles,
    calculateGridStyle,
    deleteClickHandler,
  };
};
