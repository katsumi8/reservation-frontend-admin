import { useState } from "react";
import { GridProps } from "../../../src/types/props";
import { cellType } from "../../../src/types/states";
import IdInputModal from "./IdInputModal";
import TableGrid from "./presenter";

export default function Grid({ tableStyles, setTableStyles }: GridProps) {
  const [selectedCells, setSelectedCells] = useState<cellType>({
    startCell: 0,
    endCell: 0,
  });
  const [showModal, setShowModal] = useState<boolean>(false);

  console.log(tableStyles)
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
