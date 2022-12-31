import { __Schema } from "graphql";
import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { SidebarListProps } from "@src/types/props";
import { showDetailsState } from "@src/types/states"; 

const ListsForSidebar = ({
  reservations,
  listDefaultValue,
}: SidebarListProps) => {
  const [showDetails, setShowDetails] =
    useState<Array<showDetailsState>>(listDefaultValue);

  if (reservations.length === 0) return <></>;

  const listClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const { id } = e.currentTarget;

    setShowDetails((prevState) =>
      prevState.map((obj) =>
        obj.id === id ? { id: obj.id, isShow: !obj.isShow } : obj
      )
    );
  };

  const reservationLists: JSX.Element[] = [];
  for (let i = 0; i < reservations.length; i++) {
    const { id, date, timeSlot, PplNo, description, reservedBy, table } =
      reservations[i];
    const isShowArray = showDetails.find((item) => item.id === id);
    const isShow = isShowArray ? isShowArray.isShow : false;

    reservationLists.push(
      <li key={i} id={`${id}`} className="min-w-max select-none text-cyan-800">
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
              {table.tableName}
              {/* <span className="focus:shadow-outline rounded bg-blue-500 px-px text-white shadow hover:bg-blue-400 focus:outline-none">
                edit
              </span> */}
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
