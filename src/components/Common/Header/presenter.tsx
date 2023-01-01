import { HeaderPresenterProps } from "@src/types/props";
import Link from "next/link";
import React from "react";

function HeaderPresenter({
  pageTitle,
  rightBtnText,
  rightBtnLink,
  leftBtnText,
  leftBtnLink,
  handleClick,
}: HeaderPresenterProps) {
  return (
    <header className="border border-stone-300 bg-sky-200 p-4">
      <div className="flex justify-center">
        {leftBtnText && leftBtnLink && (
          <div className="mr-auto ml-0">
            <Link href={leftBtnLink}>
              <a className="text-black">{leftBtnText}</a>
            </Link>
          </div>
        )}
        <p
          className="text-black"
          style={{
            marginLeft: "auto",
            marginRight: leftBtnText ? "auto" : "none",
          }}
        >
          {pageTitle}
        </p>
        <div className="mr-0 ml-auto">
          <Link href={rightBtnLink}>
            <a className="text-black" onClick={handleClick}>
              {rightBtnText}{" "}
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderPresenter;
