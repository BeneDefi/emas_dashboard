import { ChevronDownIcon, SettingsIcon, WalletIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";

export const NavigationBarSection = (): JSX.Element => {
  return (
    <nav className="flex items-start justify-center gap-2.5 px-4 sm:px-6 md:px-8 py-0 w-full bg-black border border-solid border-[#d4af3733] shadow-[0px_4px_40px_#00000040]">
      <div className="flex h-[80px] sm:h-[90px] md:h-[108px] items-center justify-end gap-2.5 flex-1">
        <div className="inline-flex items-center gap-2 sm:gap-3 md:gap-[18px] flex-wrap justify-end">
          <Button className="inline-flex h-[40px] sm:h-[45px] md:h-[50px] gap-1.5 sm:gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg overflow-hidden items-center justify-center relative bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] hover:opacity-90 transition-opacity">
            <WalletIcon className="w-[14px] sm:w-[16px] md:w-[17.5px] h-[12px] sm:h-[13px] md:h-[15px]" />
            <span className="relative flex items-center justify-center w-fit font-body-action-button font-[number:var(--body-action-button-font-weight)] text-readdylinkblack text-sm sm:text-base md:text-[length:var(--body-action-button-font-size)] text-center tracking-[var(--body-action-button-letter-spacing)] leading-[var(--body-action-button-line-height)] [font-style:var(--body-action-button-font-style)]">
              <span className="hidden sm:inline">Connect Wallet</span>
              <span className="sm:hidden">Connect</span>
            </span>
            <div className="absolute w-[195.15%] h-[205.86%] top-[-52.01%] left-[-47.41%] rotate-[27.43deg] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0)_100%)]" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-3.5 py-[5px] sm:py-[6px] md:py-[7px] bg-[#d4af3733] rounded-[40px] hover:bg-[#d4af3750] transition-colors"
              >
                <span className="text-[#ffb006] relative w-fit mt-[-1.00px] font-body-subhead font-[number:var(--body-subhead-font-weight)] text-xs sm:text-sm md:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] whitespace-nowrap [font-style:var(--body-subhead-font-style)]">
                  <span className="hidden sm:inline">0x567v46.......456TRGH</span>
                  <span className="sm:hidden">0x567...TRGH</span>
                </span>
                <ChevronDownIcon className="w-[10px] sm:w-[11px] md:w-[12.25px] h-[6px] sm:h-[6.5px] md:h-[7px] text-[#ffb006]" />
                <SettingsIcon className="w-3.5 sm:w-[15px] md:w-4 h-3.5 sm:h-[15px] md:h-4 text-[#ffb006]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#1a1a1a] border-[#d4af3733]"
            >
              <DropdownMenuItem className="text-[#ffb006] focus:text-[#ffb006] focus:bg-[#d4af3733]">
                View Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-[#ffb006] focus:text-[#ffb006] focus:bg-[#d4af3733]">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="text-[#ffb006] focus:text-[#ffb006] focus:bg-[#d4af3733]">
                Disconnect
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};
