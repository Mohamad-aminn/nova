import React, { Suspense } from "react";
import Sidebar from "./components/Sidebar";
import SidebarSkeleton from "../components/skeleton/SidebarSkeleton";

const layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex min-h-dvh w-full">
      <Suspense fallback={<SidebarSkeleton />}>
        <Sidebar />
      </Suspense>
      {children}
    </div>
  );
};

export default layout;
