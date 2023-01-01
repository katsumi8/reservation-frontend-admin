import { ListsOfReservationsPresenterProps } from "@src/types/props";
import React from "react";


export const ListsOfReservationsPresenter = ({
  reservations,
  reservationLists,
}: ListsOfReservationsPresenterProps) => {
  if (reservations.length === 0) return <></>;
  return <ul className="ml-3 space-y-2 tracking-wide">{reservationLists}</ul>;
};
