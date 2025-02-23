import React, { Suspense } from "react";
import Sidebar from "./components/Sidebar";
import SidebarSkeleton from "@/app/components/skeleton/SidebarSkeleton";

const layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex min-h-dvh w-full bg-[#16202A]">
      <Suspense fallback={<SidebarSkeleton />}>
        <Sidebar />
      </Suspense>
      <div className="w-full min-h-dvh overflow-y-scroll bg-[#0F151A] rounded-s-3xl p-8">
        {children}
      </div>
    </div>
  );
};

export default layout;
