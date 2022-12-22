// not yes\t

import { useState } from "react";
import {
  idInputModalHooksProps,
  idInputModalProps,
} from "../../../../types/props";
import { gridColNum } from "../const";

export const useModal = ({
  selectedCells,
  setTableStyles,
  setShowModal,
}: idInputModalHooksProps) => {
  const [tableId, setTableId] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isErrored, setIsErrored] = useState<boolean>(false);

  const { startCell, endCell } = selectedCells;

  const isCheckHandler = () => {
    setIsChecked(!isChecked);
  };

  const getGridArea = (gridColNum: number) => {
    const rowStart = Math.ceil(Number(startCell) / gridColNum);
    const colStart = Number(startCell) - (rowStart - 1) * gridColNum + 1;
    const rowEnd = Math.ceil(Number(endCell) / gridColNum) + 1;
    const colEnd = Number(endCell) - (rowEnd - 2) * gridColNum + 2;
    const gridArea = `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`;
    const rowDiff = rowEnd - rowStart;
    const colDiff = colEnd - colStart;
    const capability =
      rowDiff > colDiff ? (rowDiff * 2).toString() : (colDiff * 2).toString();
    return { gridArea, capability };
  };

  const submitHandler = () => {
    if (tableId) {
      const { gridArea, capability } = getGridArea(gridColNum);

      setTableStyles((prevCells) => [
        ...prevCells,
        {
          tableName: tableId,
          position: gridArea,
          isRounded: isChecked,
          capability: Number(capability),
        },
      ]);

      setTableId("");
      setShowModal(false);
      setIsChecked(false);
    } else {
      setIsErrored(true);
    }
  };

  const cancelHandler = () => {
    setTableId("");
    setShowModal(false);
    setIsChecked(false);
  };

  // モーダルを画面中央に表示する用のスタイル
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return {
    customStyles,
    tableId,
    setTableId,
    setIsErrored,
    isErrored,
    isChecked,
    isCheckHandler,
    cancelHandler,
    submitHandler,
  };
};
