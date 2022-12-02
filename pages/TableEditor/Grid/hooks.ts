import { GridProps } from "../../../types/props";

export const useGridEditor = ({
  setShowModal,
  setSelectedCells,
  tableStyles,
  setTableStyles,
}: GridProps) => {
  const mouseClickStartHandler = (e: React.MouseEvent<HTMLElement>): void => {
    const { id } = e.currentTarget;
    setSelectedCells((prevState) => ({ ...prevState, startCell: Number(id) }));
  };

  const mouseClickLeaveHandler = (e: React.MouseEvent<HTMLElement>): void => {
    const { id } = e.currentTarget;
    setShowModal(true);
    setSelectedCells((prevState) => ({ ...prevState, endCell: Number(id) }));
  };

  const deleteClickHandler = (id: number) => {
    setTableStyles(tableStyles.filter((item) => item.id !== id));
  };

  return {
    mouseClickStartHandler,
    mouseClickLeaveHandler,
    deleteClickHandler,
  };
};
