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
    // let newElement: clickedCellType = { id: e.currentTarget.id };
    // setClickedData((prev) => [...prev, newElement]);
    console.log(clickedData);
  };

  const list = [];
  for (let i = 0; i < 15 * 15; i++) {
    list.push(
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

  return (
    <div className="container absolute mx-auto overflow-scroll rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <section className="absolute grid aspect-square w-[80vw] grid-cols-15 grid-rows-15 gap-1 rounded-lg text-center font-mono text-sm font-bold leading-6 text-slate-500">
        {list}
      </section>
      <section className="relative grid aspect-square w-[80vw] grid-cols-15 grid-rows-15 gap-1 rounded-lg text-center font-mono text-sm font-bold leading-6 text-slate-500">
        <div
          className="col-start-3 col-end-5 row-start-3 row-end-5 aspect-square rounded-lg border-blue-500 bg-red-50 p-1"
          onClick={cellOnClickHandler}
        >
          test
        </div>
      </section>

    </div>
  );
}

export default Home;
