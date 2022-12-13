import { ReactNode } from "react";

const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <header className="flex items-center justify-between bg-blue-300 p-4">
        <div className="flex">Left</div>
        <div className="flex">Right</div>
      </header>
      {/* <main>{children}</main> */}
    </div>
  );
};

export default Header;
