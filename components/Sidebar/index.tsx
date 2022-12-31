import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useState } from "react";
import ListsForSidebar from "./ListsForSidebar";
import { useFetchSpecificReservations } from "../hooks/queries/reservationsWithDate";
import { showDetailsState } from "../../src/types/states";

const Sidebar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const convertDateToDBformat = (dateProp: Date): string => {
    return `${dateProp.getFullYear()}/${
      dateProp.getMonth() + 1
    }/${dateProp.getDate()}`;
  };

  const { reservationsWithDate, error, loading } = useFetchSpecificReservations(
    convertDateToDBformat(currentDate)
  );

  const listDefaultValue: showDetailsState[] = reservationsWithDate.map(
    (elm) => {
      return {
        id: elm.id,
        isShow: false,
      };
    }
  );

  const convertDateToString = (dateProp: Date): string => {
    return `${dateProp.getDate()}.${dateProp.getMonth() + 1}.${dateProp
      .getFullYear()
      .toString()
      .substring(2, 4)}`;
  };

  const isToday = (dateProp: Date): boolean => {
    return convertDateToString(dateProp) === convertDateToString(new Date());
  };

  const dateIncreaseHandler = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)));
  };

  const dateDecreaseHandler = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)));
  };

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

export default Sidebar;
