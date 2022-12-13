import { ReactNode } from "react";
import Sidebar from "./Sidebar";

const MainContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default MainContent;
