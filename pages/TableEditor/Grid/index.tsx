import { useState } from "react";
import { useFetchTableData } from "../../../components/hooks/queries/tableData";
import { Table } from "../../../types/serverState";
import { cellType, tableStyle } from "../../../types/states";
import IdInputModal from "./IdInputModal";
import TableGrid from "./presenter";

export default function Grid() {
  const { tableStyles:initialData, error, loading } = useFetchTableData();

  const [selectedCells, setSelectedCells] = useState<cellType>({
    startCell: 0,
    endCell: 0,
  });
  const [tableStyles, setTableStyles] = useState<Table[]>(initialData);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <TableGrid
        setShowModal={setShowModal}
        setSelectedCells={setSelectedCells}
        tableStyles={tableStyles}
        setTableStyles={setTableStyles}
      />
      <IdInputModal
        selectedCells={selectedCells}
        setTableStyles={setTableStyles}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}
