import React from "react";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { ProfileDetailsSection } from "./sections/ProfileDetailsSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen h-screen bg-[#060400] overflow-hidden">
      <NavigationBarSection />
      <ProfileDetailsSection />
    </div>
  );
};
