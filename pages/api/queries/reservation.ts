import { gql, useQuery } from "@apollo/client";
import { Reservation } from "../../../types/serverState";

const GET_RESERVATIONS = gql`
  query {
    reservTable {
      id
      timeSlot
      date
      PplNo
      description
      table {
        id
        tableID
        capability
        isReserved
        isRounded
        isUnReservable
        position
      }
      reservedBy {
        id
        name
        email
        phoneNo
      }
    }
  }
`;

type dataTypeForReservation = {
  reservTable: Reservation[];
};

export const useFetchReservations = () => {
  const { data, error, loading } = useQuery(GET_RESERVATIONS);
  const reservations = data ? (data as dataTypeForReservation).reservTable : [];

  return { reservations, error, loading };
};
