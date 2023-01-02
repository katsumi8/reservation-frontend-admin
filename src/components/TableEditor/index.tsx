import React, { useState } from "react";
import { useFetchTableData } from "@src/utils/queries/tableData";
import type { Table } from "@src/types/serverState";
import TableEditorPresenter from "./presenter";

export default function TableEditor() {
  const { tableStyles: initialData, error, loading } = useFetchTableData();
  const [tableStyles, setTableStyles] = useState<Table[]>(initialData);

  return (
    <TableEditorPresenter
      loading={loading}
      error={error}
      tableStyles={tableStyles}
      setTableStyles={setTableStyles}
      initialData={initialData}
    />
  );
}
