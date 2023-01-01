import type { CellType } from "@src/types/states";
import { useState } from "react";
import type { GridProps } from "@src/types/props";
import IdInputModal from "./IdInputModal";
import TableGrid from "./presenter";

export default function Grid({ tableStyles, setTableStyles }: GridProps) {
  const [selectedCells, setSelectedCells] = useState<CellType>({
    startCell: 0,
    endCell: 0,
  });
  const [showModal, setShowModal] = useState<boolean>(false);

  console.log(tableStyles);
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
