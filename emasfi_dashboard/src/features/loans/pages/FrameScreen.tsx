import React from "react";
import { HeaderSection } from "../components/HeaderSection";
import { LoanDetailsSection } from "../components/LoanDetailsSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full items-start bg-[#060400] overflow-hidden">
      <HeaderSection />
      <LoanDetailsSection />
    </main>
  );
};
