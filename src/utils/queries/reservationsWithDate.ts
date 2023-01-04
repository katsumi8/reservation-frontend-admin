import { gql, useQuery } from "@apollo/client";
import { Reservation } from "../../../src/types/serverState";

const GET_RESERVATIONS_W_DATE = gql`
  query ($reservedDate: String!) {
    reservationReadWithDate(reservedDate: $reservedDate) {
      id
      description
      date
      PplNo
      reservedBy {
        id
        name
        email
        phoneNo
      }
      timeSlot
      table {
        id
        tableName
        capability
        isReserved
        position
        isRounded
        isUnReservable
      }
    }
  }
`;

type dataTypeForReservation = {
  reservationReadWithDate: Reservation[];
};

export const useFetchSpecificReservations = (reservedDate: string) => {
  const { data, error, loading } = useQuery(GET_RESERVATIONS_W_DATE, {
    variables: { reservedDate },
  });

  const reservationsWithDate = data
    ? (data as dataTypeForReservation).reservationReadWithDate
    : [];


  return { reservationsWithDate, error, loading };
};
