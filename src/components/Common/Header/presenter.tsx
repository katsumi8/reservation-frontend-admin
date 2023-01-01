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
    <header className="border border-stone-300 bg-sky-200 py-4 px-6">
      <div
        className={
          leftBtnText ? "flex justify-between" : "relative flex justify-center"
        }
      >
        {leftBtnText && leftBtnLink && (
          <Link href={leftBtnLink}>
            <a className="text-black">{leftBtnText}</a>
          </Link>
        )}
        <p className="text-black">{pageTitle}</p>
        <Link href={rightBtnLink}>
          <a
            className={
              leftBtnText ? "text-black" : "absolute right-0 text-black"
            }
            onClick={handleClick}
          >
            {rightBtnText}
          </a>
        </Link>
      </div>
    </header>
  );
}

export default HeaderPresenter;
