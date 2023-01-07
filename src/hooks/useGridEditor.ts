import { UseGridTypes } from "@src/types/states";

export const useGridEditor = ({
  setShowModal,
  setSelectedCells,
  tableStyles,
  setTableStyles,
}: UseGridTypes) => {
  const mouseClickStartHandler = (e: React.MouseEvent<HTMLElement>): void => {
    const { id } = e.currentTarget;
    setSelectedCells((prevState) => ({ ...prevState, startCell: Number(id) }));
  };

  const mouseClickLeaveHandler = (e: React.MouseEvent<HTMLElement>): void => {
    const { id } = e.currentTarget;
    setShowModal(true);
    setSelectedCells((prevState) => ({ ...prevState, endCell: Number(id) }));
  };

  // To deal with mobile devices
  const mobileTouchStartHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    setSelectedCells((prevState) => ({ ...prevState, startCell: Number(id) }));
  };
  const mobileTouchEndHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    const { id } = document.elementFromPoint(
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY
    )!;
    setShowModal(true);
    setSelectedCells((prevState) => ({ ...prevState, endCell: Number(id) }));
  };


  const deleteClickHandler = (tableName: string) => {
    setTableStyles(tableStyles.filter((item) => item.tableName !== tableName));
  };

  return {
    mouseClickStartHandler,
    mouseClickLeaveHandler,
    mobileTouchStartHandler,
    mobileTouchEndHandler,
    deleteClickHandler,
  };
};
