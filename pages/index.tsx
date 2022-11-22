import React, { useState } from "react";

function Home() {
  type clickedCellType = {
    id: string;
    showText?: string;
  };

  const [clickedData, setClickedData] = useState<Array<clickedCellType>>([]);

  const cellOnClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    let newElement: clickedCellType = { id: e.currentTarget.id };
    setClickedData((prev) => [...prev, newElement]);
    console.log(clickedData);
  };

  const gridColNum = 15;

  const defaultGridCells: JSX.Element[] = [];
  for (let i = 0; i < gridColNum ** 2; i++) {
    defaultGridCells.push(
      <div
        className="aspect-square rounded-lg border-blue-500 bg-slate-50 p-1 shadow-lg"
        key={i.toString()}
        id={i.toString()}
        onClick={cellOnClickHandler}
      >
        +
      </div>
    );
  }

  const coloredCells: JSX.Element[] = [];

  for (let i = 0; i < clickedData.length; i++) {
    let cellId = clickedData[i].id;
    let rowStartNum = Math.floor(Number(cellId) / gridColNum) + 1;
    let colStartNum = Number(cellId) - (rowStartNum - 1) * gridColNum + 1;

    let colStart = "col-start-" + colStartNum.toString();
    let colEnd = "col-end-" + (colStartNum + 1).toString();
    let rowStart = "row-start-" + rowStartNum.toString();
    let rowEnd = "row-end-" + (rowStartNum + 1).toString();

    coloredCells.push(
      <div
        className={`${colStart} ${colEnd} ${rowStart} ${rowEnd} aspect-square rounded-lg border-blue-500 bg-red-50 p-1`}
        key={cellId}
      >
        test
      </div>
    );
    console.log(colStart, colEnd, rowStart, rowEnd);
  }

  return (
    <div className="container absolute mx-auto overflow-scroll rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <section className="absolute grid aspect-square w-[80vw] grid-cols-15 grid-rows-15 gap-1 rounded-lg text-center font-mono text-sm font-bold leading-6 text-slate-500">
        {defaultGridCells}
      </section>
      <section className="pointer-events-none relative grid aspect-square w-[80vw] grid-cols-15 grid-rows-15 gap-1 rounded-lg text-center font-mono text-sm font-bold leading-6 text-slate-500">
        {coloredCells}
      </section>
    </div>
  );
}

export default Home;
