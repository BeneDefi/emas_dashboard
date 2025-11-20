import React from "react";
import { HeaderSection } from "../components/HeaderSection";
import { StakingSection } from "../components/StakingSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-2.5 px-0 py-px relative bg-[#060400] overflow-hidden">
      <HeaderSection />
      <StakingSection />
    </div>
  );
};
