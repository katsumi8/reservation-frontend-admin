import { TableGridProps } from "@src/types/props";

export const useGridEditor = ({
  setShowModal,
  setSelectedCells,
  tableStyles,
  setTableStyles,
}: TableGridProps) => {
  const mouseClickStartHandler = (e: React.MouseEvent<HTMLElement>): void => {
    const { id } = e.currentTarget;
    setSelectedCells((prevState) => ({ ...prevState, startCell: Number(id) }));
  };

  const mouseClickLeaveHandler = (e: React.MouseEvent<HTMLElement>): void => {
    const { id } = e.currentTarget;
    setShowModal(true);
    setSelectedCells((prevState) => ({ ...prevState, endCell: Number(id) }));
  };

  const deleteClickHandler = (tableName: string) => {
    setTableStyles(tableStyles.filter((item) => item.tableName !== tableName));
  };

  return {
    mouseClickStartHandler,
    mouseClickLeaveHandler,
    deleteClickHandler,
  };
};
