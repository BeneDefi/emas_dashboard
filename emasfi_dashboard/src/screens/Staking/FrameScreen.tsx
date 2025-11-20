import React from "react";
import { HeaderSection } from "./sections/HeaderSection";
import { StakingSection } from "./sections/StakingSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-2.5 px-0 py-px relative bg-[#060400] overflow-hidden">
      <HeaderSection />
      <StakingSection />
    </div>
  );
};
