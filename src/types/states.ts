// export type TableStyle = {
//   id?: string;
//   tableName: string;
//   capability: string;
//   isReserved?: boolean;
//   position: string;
//   isRounded: boolean;
//   isUnReservable?: boolean;
// };

import { Dispatch, SetStateAction } from "react";
import { Table } from "./serverState";

export type CellType = {
  startCell: number;
  endCell: number;
};

export type ShowDetailsState = {
  id: string;
  isShow: boolean;
};

export type UseGridTypes = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setSelectedCells: Dispatch<SetStateAction<CellType>>;
  tableStyles: Table[];
  setTableStyles: Dispatch<SetStateAction<Table[]>>;
};
