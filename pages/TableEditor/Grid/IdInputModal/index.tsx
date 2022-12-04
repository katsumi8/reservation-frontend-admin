import { useEffect } from "react";
import Modal from "react-modal";
import { idInputModalProps } from "../../../../types/props";
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

  const submitHandler = () => {
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
      <div className="mt-3 mb-3 text-left sm:mt-0 sm:text-left">
        <h3
          className="text-lg font-medium leading-6 text-gray-900"
          id="modal-title"
        >
          Please input the tableID
        </h3>
        <p className="text-sm text-gray-500">ex. 1, 101, 110</p>
      </div>
      <div className="mb-4">
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          placeholder="TableID"
          value={tableId}
          onChange={(e) => setTableId(e.target.value)}
          required
        />
      </div>
      <div className="float-right py-2">
        <button className="m-1 rounded border border-gray-400 bg-white py-1 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100">
          Cancel
        </button>
        <button
          type="button"
          className="focus:shadow-outline m-1 rounded bg-blue-500 py-1 px-4 font-bold text-white shadow hover:bg-blue-400 focus:outline-none"
          onClick={submitHandler}
        >
          Submit
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
