import React, { useEffect, useState } from "react";

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

    // if it exists already, delete

    setClickedData((prev) => [...prev, newElement]);
    console.log(clickedData);
  };

  const list = [];
  for (let i = 0; i < 15 * 15; i++) {
    list.push(
      <div
        className="aspect-square rounded-lg border-blue-500 bg-slate-50 p-4 shadow-lg"
        key={i.toString()}
        id={i.toString()}
        onClick={cellOnClickHandler}
      >
        +
      </div>
    );
  }
  // list.push(
  //   <div className="absolute col-start-3 row-start-4 col-end-6 aspect-square rounded-lg border-blue-500 bg-red-50 p-4 shadow-lg">
  //     test
  //   </div>
  // );

  return (

    <div className="container absolute m-2 mx-auto overflow-auto rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <section className="absolute m-auto grid aspect-square grid-cols-15 gap-1 rounded-lg text-center font-mono text-sm font-bold leading-6 text-slate-500">
        {list}
      </section>
      <section className="relative m-auto grid aspect-square grid-cols-15 gap-1 rounded-lg text-center font-mono text-sm font-bold leading-6 text-slate-500">
        <div className="col-start-3 col-end-5 aspect-square rounded-lg border-blue-500 bg-red-50 p-4">
          test
        </div>
      </section>
    </div>


    // <div className="container absolute m-2 mx-auto overflow-auto rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
    // <div>
    //   <section className="relative m-auto grid aspect-square grid-cols-15 grid-rows-15 gap-1 rounded-lg text-center font-mono text-sm font-bold leading-6 text-slate-500">
    //     {list}
    //   </section>
    // </div>
  );
}

export default Home;
