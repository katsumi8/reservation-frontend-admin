import { useState } from "react";
import { cellType } from "../../../types/props";
import IdInputModal from "./IdInputModal";
import TableGrid from "./presenter";
type useStateType = {
  id: number;
  position: string;
  isRound: false;
  capability: string;
};

export default function Grid() {
  const [selectedCells, setSelectedCells] = useState<cellType>({
    startCell: 0,
    endCell: 0,
  });
  const [tableStyles, setTableStyles] = useState<useStateType[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tableId, setTableId] = useState<string>("");

  return (
    <>
      <TableGrid
        setShowModal={setShowModal}
        setSelectedCells={setSelectedCells}
        tableStyles={tableStyles}
        tableId={tableId}
        setTableStyles={setTableStyles}

      />
      <IdInputModal
        selectedCells={selectedCells}
        setTableStyles={setTableStyles}
        showModal={showModal}
        setShowModal={setShowModal}
        tableId={tableId}
        setTableId={setTableId}
      />
    </>
  );
}
