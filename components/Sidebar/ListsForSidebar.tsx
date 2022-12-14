import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { SidebarListProps } from "../../types/props";


const ListsForSidebar = ({ reservations, currentDate }: SidebarListProps) => {
  const showDetail = true;

  const convertDateToDBformat = (dateProp: Date): string => {
    return `${dateProp.getFullYear()}/${
      dateProp.getMonth() + 1
    }/${dateProp.getDate()}`;
  };

  const targetReservations = reservations.filter(
    (value) => value.date === convertDateToDBformat(currentDate)
  );

  const reservationLists: JSX.Element[] = [];
  for (let i = 0; i < targetReservations.length; i++) {
    const { id, date, timeSlot, PplNo, description, reservedBy, table } =
      targetReservations[i];

    reservationLists.push(
      <li
        key={i}
        id={`${id}`}
        className="min-w-max text-cyan-800 hover:bg-amber-100"
      >
        <p className="flex font-medium">
          {showDetail ? <MdExpandLess /> : <MdExpandMore />}
          {date} {timeSlot} {PplNo}ppl
        </p>
        {showDetail && (
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
