import { useEffect } from "react";
import Modal from "react-modal";
import { idInputModalProps } from "../../../../types/props";
import { tableStyle } from "../../../../types/states";
import { gridColNum } from "../const";

const IdInputModal = ({
  selectedCells,
  setTableStyles,
  showModal,
  setShowModal,
  tableId,
  setTableId,
}: idInputModalProps) => {
  const { startCell, endCell } = selectedCells;
  const getGridArea = (gridColNum: number) => {
    const rowStart = Math.ceil(Number(startCell) / gridColNum);
    const colStart = Number(startCell) - (rowStart - 1) * gridColNum + 1;
    const rowEnd = Math.ceil(Number(endCell) / gridColNum) + 1;
    const colEnd = Number(endCell) - (rowEnd - 2) * gridColNum + 2;
    const gridArea = `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`;
    const rowDiff = rowEnd - rowStart;
    const colDiff = colEnd - colStart;
    const capability =
      rowDiff > colDiff ? (rowDiff * 2).toString() : (colDiff * 2).toString();
    return { gridArea, capability };
  };

  const okHandler = () => {
    const { gridArea, capability } = getGridArea(gridColNum);

    setTableStyles((prevCells) => [
      ...prevCells,
      {
        id: tableId,
        position: gridArea,
        isRound: false,
        capability,
      },
    ]);

    setShowModal(false);
    setTableId("");
  };

  // モーダルを画面中央に表示する用のスタイル
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // 削除モーダル
  const confirmModal = (
    <Modal style={customStyles} isOpen={showModal}>
      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3
          className="text-lg font-medium leading-6 text-gray-900"
          id="modal-title"
        >
          Please input the tableID
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500">ex. 1, 101, 110</p>
        </div>
      </div>
      <>
        <input
          className="text-black"
          type="text"
          placeholder="TableID"
          value={tableId}
          onChange={(e) => setTableId(e.target.value)}
          required
        />
      </>
      <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={okHandler}
        >
          ok
        </button>
      </div>
    </Modal>
  );

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  return <>{confirmModal}</>;
};

export default IdInputModal;
