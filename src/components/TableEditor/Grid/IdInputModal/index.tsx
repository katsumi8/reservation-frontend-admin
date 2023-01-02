import { useEffect } from "react";
import Modal from "react-modal";
import { IdInputModalProps } from "@src/types/props";
import { useModal } from "@src/hooks/useModal";
import IdInputModalPresenter from "./presenter";

const IdInputModal = ({
  selectedCells,
  setTableStyles,
  showModal,
  setShowModal,
}: IdInputModalProps) => {
  const {
    customStyles,
    tableId,
    setTableId,
    setIsErrored,
    isErrored,
    isChecked,
    isCheckHandler,
    cancelHandler,
    submitHandler,
  } = useModal({
    selectedCells,
    setTableStyles,
    setShowModal,
  });

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  return (
    <IdInputModalPresenter
      customStyles={customStyles}
      showModal={showModal}
      tableId={tableId}
      setTableId={setTableId}
      setIsErrored={setIsErrored}
      isErrored={isErrored}
      isChecked={isChecked}
      isCheckHandler={isCheckHandler}
      cancelHandler={cancelHandler}
      submitHandler={submitHandler}
    />
  );
};

export default IdInputModal;
