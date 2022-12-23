import { gql, useMutation } from "@apollo/client";

const CREATE_TABLE = gql`
  mutation ($table: TableInput!) {
    tableCreate(table: $table) {
      table {
        id
        tableName
        isRounded
      }
      userErrors {
        message
      }
    }
  }
`;

export const useTableCreator = () => {
  const [tableCreate, { data, loading }] = useMutation(CREATE_TABLE);

  return { tableCreate };
};
