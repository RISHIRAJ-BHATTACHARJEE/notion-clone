"use client";
import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { Navigation } from "./_components/Navigation";
import { SearchCommand } from "@/components/search-command";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if(!isAuthenticated){
    return redirect("/")
  }

  return <div className="h-full flex dark:[#f1f1f1]">
    <Navigation/>
    <main className="flex-1 h-full overflow-y-auto">
      <SearchCommand/>
        {children}
    </main>
  </div>;
};

export default MainLayout;