import { useEffect, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { SidebarListProps } from "../../types/props";

type showDetailsState = {
  id: string;
  isShow: boolean;
};

const ListsForSidebar = ({ reservations, currentDate }: SidebarListProps) => {
  const convertDateToDBformat = (dateProp: Date): string => {
    return `${dateProp.getFullYear()}/${
      dateProp.getMonth() + 1
    }/${dateProp.getDate()}`;
  };

  const targetReservations = reservations.filter(
    (value) => value.date === convertDateToDBformat(currentDate)
  );

  const listClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const { id } = e.currentTarget;
    console.log("it is clicked", id);

    setShowDetails((prevState) =>
      prevState.map((obj) =>
        obj.id === id ? { id: obj.id, isShow: !obj.isShow } : obj
      )
    );
  };

  const defaultState: Array<showDetailsState> = [];
  for (let i = 0; i < targetReservations.length; i++) {
    const { id } = targetReservations[i];
    defaultState.push({
      id,
      isShow: false,
    });
  }
  const [showDetails, setShowDetails] =
    useState<Array<showDetailsState>>(defaultState);

  const reservationLists: JSX.Element[] = [];
  for (let i = 0; i < targetReservations.length; i++) {
    const { id, date, timeSlot, PplNo, description, reservedBy, table } =
      targetReservations[i];

    const isShowArray = showDetails.find((item) => item.id === id);
    const isShow = isShowArray ? isShowArray.isShow : false;

    reservationLists.push(
      <li key={i} id={`${id}`} className="min-w-max text-cyan-800">
        <p
          className="flex font-medium hover:bg-amber-100"
          onClick={listClickHandler}
          id={`${id}`}
        >
          {isShow ? <MdExpandLess /> : <MdExpandMore />}
          {date} {timeSlot} {PplNo}ppl
        </p>
        {isShow && (
          <>
            <p>
              {table.tableID}{" "}
              <span className="focus:shadow-outline rounded bg-blue-500 px-px text-white shadow hover:bg-blue-400 focus:outline-none">
                edit
              </span>
            </p>
            <p>name: {reservedBy.name}</p>
            <p>email: {reservedBy.email}</p>
            <p>phone: {reservedBy.phoneNo}</p>
            {description && <p>comment: {description}</p>}
          </>
        )}
      </li>
    );
  }

  return <ul className="ml-3 space-y-2 tracking-wide">{reservationLists}</ul>;
};

export default ListsForSidebar;
