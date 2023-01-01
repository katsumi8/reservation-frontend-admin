import { useState } from "react";
import { useFetchSpecificReservations } from "@src/utils/queries/reservationsWithDate";
import { ShowDetailsState } from "@src/types/states";
import { SidebarPresenter } from "./presenter";
import useDateProcessor from "@src/hooks/useDateProcessor";

const Sidebar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { convertDateToDBformat, convertDateToString, isToday } =
    useDateProcessor();


  const { reservationsWithDate, error, loading } = useFetchSpecificReservations(
    convertDateToDBformat(currentDate)
  );

  const listDefaultValue: ShowDetailsState[] = reservationsWithDate.map(
    (elm) => {
      return {
        id: elm.id,
        isShow: false,
      };
    }
  );


  const dateIncreaseHandler = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)));
  };

  const dateDecreaseHandler = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)));
  };

  return (
    <SidebarPresenter
      dateDecreaseHandler={dateDecreaseHandler}
      dateIncreaseHandler={dateIncreaseHandler}
      currentDate={currentDate}
      reservationsWithDate={reservationsWithDate}
      listDefaultValue={listDefaultValue}
      convertDateToString={convertDateToString}
      isToday={isToday}
      loading={loading}
      error={error}
    />
  );
};

export default Sidebar;
