import { useFetchReservations } from "../pages/api/queries/reservation";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const Sidebar = () => {
  const { reservations, error, loading } = useFetchReservations();

  const showDetail = true;

  const reservationLists: JSX.Element[] = [];
  for (let i = 0; i < reservations.length; i++) {
    const { id, date, timeSlot, PplNo, description, reservedBy, table } =
      reservations[i];

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <div className="flex min-h-screen w-56 flex-col overflow-y-auto rounded-lg bg-white pt-2 pb-6 shadow-lg">
      <ul className="ml-3 space-y-2 tracking-wide">{reservationLists}</ul>
    </div>
  );
};

export default Sidebar;
