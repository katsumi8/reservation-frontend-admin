import { useState } from "react";
import { cellStyle, cellType } from "../../types/props";
import { gridColNum } from "./const";

export const useGridEditor = () => {
  const [clickedId, setClickedId] = useState<string>("");
  const [selectedCells, setSelectedCCells] = useState<cellType[]>([]);
  // const [colorCellStyles, setColorCellStyles] = useState<cellStyle[]>([]);

  const mouseClickStartHandler = (e: React.MouseEvent<HTMLElement>): void => {
    console.log("click was started");
    console.log(e.currentTarget.id);
    const { id } = e.currentTarget;
    setClickedId(id);
  };

  const mouseClickLeaveHandler = (e: React.MouseEvent<HTMLElement>): void => {
    console.log("click was left");
    console.log(e.currentTarget.id);
    const { id } = e.currentTarget;
    setClickedId("");

    setSelectedCCells((prevCells) => [
      ...prevCells,
      { startCell: Number(clickedId), endCell: Number(id) },
    ]);
  };

  const calculateGridStyle = (
    selectedCells: cellType[],
    num: number,
    gridColNum: number
  ): {
    gridArea: string;
    capability: string;
  } => {
    const rowStart = Math.ceil(
      Number(selectedCells[num].startCell) / gridColNum
    );
    const colStart =
      Number(selectedCells[num].startCell) - (rowStart - 1) * gridColNum + 1;
    const rowEnd =
      Math.ceil(Number(selectedCells[num].endCell) / gridColNum) + 1;
    const colEnd =
      Number(selectedCells[num].endCell) - (rowEnd - 2) * gridColNum + 2;
    const gridArea = `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`;

    const rowDiff = rowEnd - rowStart;
    const colDiff = colEnd - colStart;

    const capability =
      rowDiff > colDiff ? (rowDiff * 2).toString() : (colDiff * 2).toString();

    return { gridArea, capability };
  };

  // for (let i = 0; i < selectedCells.length; i++) {
  //   const { gridArea, capability } = calculateGridStyle(
  //     selectedCells,
  //     i,
  //     gridColNum
  //   );
  //   setColorCellStyles((prevCellStyles) => [
  //     ...prevCellStyles,
  //     { id: i, position: gridArea, isRound: false, capability },
  //   ]);
  // }

  return {
    selectedCells,
    mouseClickStartHandler,
    mouseClickLeaveHandler,
    // colorCellStyles,
    calculateGridStyle
  };
};
