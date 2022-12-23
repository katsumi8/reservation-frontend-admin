import { Dispatch, SetStateAction } from "react";
import { Reservation, Table } from "./serverState";
import { cellType, showDetailsState, tableStyle } from "./states";

export type idInputModalProps = {
  selectedCells: { startCell: number; endCell: number };
  setTableStyles: Dispatch<SetStateAction<Table[]>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export type idInputModalHooksProps = Omit<idInputModalProps, "showModal">;

export type TableGridProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setSelectedCells: Dispatch<SetStateAction<cellType>>;
  tableStyles: Table[];
  setTableStyles: Dispatch<SetStateAction<Table[]>>;
};

export type GridProps = {
  tableStyles: Table[];
  setTableStyles: Dispatch<SetStateAction<Table[]>>;
};

export type SidebarListProps = {
  reservations: Reservation[];
  listDefaultValue: showDetailsState[];
};

export type HeaderProps = {
  pageTitle: string;
  rightBtnText: string;
  rightBtnLink: string;
  leftBtnText?: string;
  leftBtnLink?: string;
  mutationTables?: Table[];
  fetchedTables?: Table[];
};
