import { ReactNode } from "react";

const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <header className="flex items-center justify-between bg-neutral-50 p-4 border-stone-300 border">
        <div className="flex text-black">Left</div>
        <div className="flex text-black">Right</div>
      </header>
      {/* <main>{children}</main> */}
    </div>
  );
};

export default Header;
