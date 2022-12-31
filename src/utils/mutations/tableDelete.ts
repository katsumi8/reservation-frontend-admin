import { gql, useMutation } from "@apollo/client";

const DELETE_TABLE = gql`
  mutation ($tableDeleteId: ID!) {
    tableDelete(id: $tableDeleteId) {
      table {
        id
        tableName
      }
    }
  }
`;

export const useTableDelete = () => {
  const [deleteTable, { data, loading }] = useMutation(DELETE_TABLE);

  return { deleteTable };
};
