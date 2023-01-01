import { SidebarPresenterProps } from "@src/types/props";
import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import ListsForSidebar from "./ListsForSidebar";

export const SidebarPresenter = ({
  dateDecreaseHandler,
  currentDate,
  dateIncreaseHandler,
  reservationsWithDate,
  listDefaultValue,
  convertDateToString,
  isToday,
  loading,
  error,
}: SidebarPresenterProps) => {
  if (loading) return <p className="text-black">Loading...</p>;

  if (error)
    return (
      <p className="text-red-700">Reservation list Error! {error.message}</p>
    );
  
    return (
    <div className="flex min-h-screen w-56 flex-col overflow-y-auto rounded-lg bg-white pt-2 pb-6 shadow-lg">
      <div className="mx-auto mb-5 flex">
        <div
          className="flex w-6 items-center justify-center rounded-l-lg bg-gray-400 text-slate-50"
          onClick={dateDecreaseHandler}
        >
          <BiLeftArrow />
        </div>
        <div className="flex w-16 justify-center border border-slate-400 text-slate-600">
          {isToday(currentDate) ? "today" : convertDateToString(currentDate)}
        </div>
        <div
          className="flex w-6 items-center justify-center rounded-r-lg bg-gray-400 text-slate-50"
          onClick={dateIncreaseHandler}
        >
          <BiRightArrow />
        </div>
      </div>
      <ListsForSidebar
        reservations={reservationsWithDate}
        listDefaultValue={listDefaultValue}
      />
    </div>
  );
};
