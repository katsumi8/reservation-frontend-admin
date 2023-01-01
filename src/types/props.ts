import { ApolloError } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import { Reservation, Table } from "./serverState";
import { CellType, ShowDetailsState } from "./states";

export type IdInputModalProps = {
  selectedCells: { startCell: number; endCell: number };
  setTableStyles: Dispatch<SetStateAction<Table[]>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export type IdInputModalHooksProps = Omit<IdInputModalProps, "showModal">;

export type TableGridProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setSelectedCells: Dispatch<SetStateAction<CellType>>;
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

export type HeaderPresenterProps = Omit<
  HeaderProps,
  "mutationTables" | "fetchedTables"
> & {
  handleClick: (e: {
    preventDefault: () => void;
  }) => Promise<boolean | undefined>;
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
