import Link from "next/link";
import { useRouter } from "next/router";

type props = {
  pageTitle: string;
  rightBtnText: string;
  rightBtnLink: string;
  leftBtnText?: string;
  leftBtnLink?: string;
};

const Header = ({
  pageTitle,
  rightBtnText,
  rightBtnLink,
  leftBtnText,
  leftBtnLink,
}: props) => {
  const router = useRouter();

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    router.push(rightBtnLink);
  };

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
          <Link href={rightBtnLink} onClick={handleClick}>
            <a className="text-black">{rightBtnText} </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
