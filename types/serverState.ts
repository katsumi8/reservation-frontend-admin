// SeatMap page main

import { type } from "os";

export type tableInputState = {
  tableID: string;
  isReserved: boolean;
};

export type Table = {
  id: string;
  tableName: string;
  capability: number;
  isReserved: boolean;
  position: string;
  isRounded: boolean;
  isUnReservable: boolean;
};

export type Reservation = {
  id: string;
  PplNo: number;
  date: string;
  timeSlot: string;
  description: string;
  table: Table;
  reservedBy: User;
};

type User = {
  id: string;
  name: string;
  email: string;
  phoneNo: string;
  reservations: Reservation[];
};
