import React from "react";
import { HeaderSection } from "../components/HeaderSection";
import { PurchaseGoldSection } from "../components/PurchaseGoldSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start bg-[#060400] overflow-hidden">
      <HeaderSection />
      <PurchaseGoldSection />
    </div>
  );
};
