import React from "react";
import { HeaderSection } from "./sections/HeaderSection";
import { PurchaseGoldSection } from "./sections/PurchaseGoldSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start bg-[#060400] overflow-hidden">
      <HeaderSection />
      <PurchaseGoldSection />
    </div>
  );
};
