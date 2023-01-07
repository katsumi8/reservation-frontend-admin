import { ApolloError } from "@apollo/client";
import TableLayout from "@src/components/Common/TableLayout";
import React from "react";

type MainLayoutPresenterProps = {
  loading: boolean;
  error: ApolloError | undefined;
  tableLayout: JSX.Element[];
};

const MainLayoutPresenter = ({
  loading,
  error,
  tableLayout,
}: MainLayoutPresenterProps) => {
  if (loading) return <p className="text-black">Loading...</p>;
  if (error)
    return <p className="text-red-700">Layout Error! {error.message}</p>;

  return (
    <div className="container xl:max-w-[885px] max-w-[775px] mx-auto rounded-lg border border-gray-200 bg-stone-100 p-6 shadow-md dark:border-gray-700">
      <TableLayout isEditor={false} gridCells={tableLayout} />
    </div>
  );
};

export default MainLayoutPresenter;
