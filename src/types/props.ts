import { ApolloError } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import { Reservation, Table } from "./serverState";
import { cellType, ShowDetailsState } from "./states";

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
  listDefaultValue: ShowDetailsState[];
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

export type SidebarPresenterProps = {
  dateDecreaseHandler: () => void;
  dateIncreaseHandler: () => void;
  currentDate: Date;
  reservationsWithDate: Reservation[];
  listDefaultValue: ShowDetailsState[];
  convertDateToString: (dateProp: Date) => string;
  isToday: (dateProp: Date) => boolean;
  loading: boolean;
  error: ApolloError | undefined;
};

export type ListsOfReservationsPresenterProps = {
  reservations: Reservation[];
  reservationLists: JSX.Element[];
};
