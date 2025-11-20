import { ChevronDownIcon, UserIcon, WalletIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex items-center justify-end gap-2.5 px-4 sm:px-6 md:px-8 py-0 w-full bg-black border border-solid border-[#d4af3733] shadow-[0px_4px_40px_#00000040]">
      <div className="flex h-[80px] sm:h-[90px] md:h-[108px] items-center justify-end gap-2.5 flex-1">
        <div className="inline-flex items-center gap-2 sm:gap-3 md:gap-[18px] flex-wrap justify-end">
          <Button className="h-[40px] sm:h-[45px] md:h-[50px] gap-1.5 sm:gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg overflow-hidden bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] hover:opacity-90 relative font-body-action-button font-[number:var(--body-action-button-font-weight)] text-readdylinkblack text-sm sm:text-base md:text-[length:var(--body-action-button-font-size)] tracking-[var(--body-action-button-letter-spacing)] leading-[var(--body-action-button-line-height)] [font-style:var(--body-action-button-font-style)]">
            <WalletIcon className="w-[14px] h-[12px] sm:w-[16px] sm:h-[14px] md:w-[17.5px] md:h-[15px]" />
            <span className="hidden sm:inline">Connect Wallet</span>
            <span className="sm:hidden">Connect</span>
            <div className="absolute w-[195.15%] h-[205.86%] top-[-52.01%] left-[-47.41%] rotate-[27.43deg] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0)_100%)]" />
          </Button>

          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-3.5 py-[5px] sm:py-[6px] md:py-[7px] bg-[#d4af3733] rounded-[40px] cursor-pointer hover:bg-[#d4af3744] transition-colors">
            <span className="mt-[-1.00px] font-body-subhead font-[number:var(--body-subhead-font-weight)] text-[#ffb006] text-xs sm:text-sm md:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] whitespace-nowrap [font-style:var(--body-subhead-font-style)] max-w-[100px] sm:max-w-none overflow-hidden text-ellipsis">
              0x567v46.......456TRGH
            </span>
            <ChevronDownIcon className="w-[10px] h-[6px] sm:w-[11px] sm:h-[6.5px] md:w-[12.25px] md:h-[7px] text-[#ffb006] flex-shrink-0" />
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#d4af37] flex items-center justify-center flex-shrink-0">
              <UserIcon className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
