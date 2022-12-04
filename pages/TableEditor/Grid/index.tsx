import { useState } from "react";
import { cellType, tableStyle } from "../../../types/states";
import IdInputModal from "./IdInputModal";
import TableGrid from "./presenter";


export default function Grid() {
  const [selectedCells, setSelectedCells] = useState<cellType>({
    startCell: 0,
    endCell: 0,
  });
  const [tableStyles, setTableStyles] = useState<tableStyle[]>([]);
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
