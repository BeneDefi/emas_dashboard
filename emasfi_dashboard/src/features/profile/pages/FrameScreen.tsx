import React from "react";
import { NavigationBarSection } from "../components/NavigationBarSection";
import { ProfileDetailsSection } from "../components/ProfileDetailsSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen h-screen bg-[#060400] overflow-hidden">
      <NavigationBarSection />
      <ProfileDetailsSection />
    </div>
  );
};
