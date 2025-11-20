import { ChevronDownIcon, SettingsIcon, WalletIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex items-center justify-end gap-2.5 px-8 py-0 w-full bg-black border border-solid border-[#d4af3733] shadow-[0px_4px_40px_#00000040]">
      <div className="flex h-[108px] items-center justify-end gap-2.5 flex-1">
        <div className="inline-flex items-center gap-[18px]">
          <Button className="relative inline-flex h-[50px] items-center justify-center gap-2 px-8 py-3 rounded-lg overflow-hidden bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] hover:opacity-90 transition-opacity">
            <WalletIcon className="w-[17.5px] h-[15px]" />
            <span className="font-body-action-button font-[number:var(--body-action-button-font-weight)] text-readdylinkblack text-[length:var(--body-action-button-font-size)] text-center tracking-[var(--body-action-button-letter-spacing)] leading-[var(--body-action-button-line-height)] [font-style:var(--body-action-button-font-style)]">
              Connect WalletIcon
            </span>
            <div className="absolute w-[195.15%] h-[205.86%] top-[-52.01%] left-[-47.41%] rotate-[27.43deg] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0)_100%)]" />
          </Button>

          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-[7px] bg-[#d4af3733] rounded-[40px]">
            <span className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-[#ffb006] text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] whitespace-nowrap [font-style:var(--body-subhead-font-style)]">
              0x567v46.......456TRGH
            </span>
            <ChevronDownIcon className="w-[12.25px] h-[7px] text-[#ffb006]" />
            <SettingsIcon className="w-4 h-4 text-[#ffb006]" />
          </div>
        </div>
      </div>
    </header>
  );
};
