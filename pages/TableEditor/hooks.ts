import { useState } from "react";
import { cellType } from "../../types/props";

export const useGridEditor = () => {
  const [clickedId, setClickedId] = useState<string>("");
  const [selectedCells, setSelectedCCells] = useState<cellType[]>([]);

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
  ): string => {
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

    return gridArea;
  };

  return {
    selectedCells,
    mouseClickStartHandler,
    mouseClickLeaveHandler,
    calculateGridStyle
  };
};
