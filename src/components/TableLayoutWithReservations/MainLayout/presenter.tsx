import { ApolloError } from "@apollo/client";
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
    <div className="container mx-auto rounded-lg border border-gray-200 bg-stone-100 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <section className="grid aspect-square grid-cols-15 grid-rows-15 gap-1 rounded-lg text-center font-mono text-sm font-bold text-slate-500">
        {tableLayout}
      </section>
    </div>
  );
};

export default MainLayoutPresenter;
