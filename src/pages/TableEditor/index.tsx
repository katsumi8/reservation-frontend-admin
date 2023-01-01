import Head from "next/head";
import React, { useState } from "react";
import Header from "../../components/Header";
import { useFetchTableData } from "@src/utils/queries/tableData";
import type { Table} from "@src/types/serverState"
import Grid from "./Grid";

const title = "Edit the table layout";

export default function TableEditor() {
  const { tableStyles: initialData, error, loading } = useFetchTableData();
  const [tableStyles, setTableStyles] = useState<Table[]>(initialData);

  if (error)
    return <p className="text-red-700">Layout Error! {error.message}</p>;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Editing the table layout" />
      </Head>
      <Header
        rightBtnText="Save"
        rightBtnLink="/Home"
        leftBtnLink="/Home"
        leftBtnText="Cancel"
        pageTitle="Table Editing"
        mutationTables={tableStyles}
        fetchedTables={initialData}
      />
      {loading ? (
        <p className="text-black">Loading...</p>
      ) : (
        <Grid tableStyles={tableStyles} setTableStyles={setTableStyles} />
      )}
    </div>
  );
}
