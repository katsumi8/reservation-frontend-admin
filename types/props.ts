import { type } from "os";
import { Dispatch, SetStateAction } from "react";
import { cellType, tableStyle } from "./states";


export type idInputModalProps = {
  selectedCells: { startCell: number; endCell: number };
  setTableStyles: Dispatch<SetStateAction<tableStyle[]>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export type idInputModalHooksProps = Omit<idInputModalProps, "showModal">

export type GridProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setSelectedCells: Dispatch<SetStateAction<cellType>>;
  tableStyles: tableStyle[];
  setTableStyles: Dispatch<SetStateAction<tableStyle[]>>;
};