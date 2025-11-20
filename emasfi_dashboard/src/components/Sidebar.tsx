import { MenuIcon, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    id: "overview",
    label: "Overview",
    icon: "/figmaAssets/margin-1.svg",
    path: "/",
  },
  {
    id: "buy-gold",
    label: "Buy Gold",
    icon: "/figmaAssets/margin-2.svg",
    path: "/buy-gold",
  },
  {
    id: "staking",
    label: "Staking",
    icon: "/figmaAssets/margin.svg",
    path: "/staking",
  },
  {
    id: "loans",
    label: "Loans",
    icon: "/figmaAssets/margin-3.svg",
    path: "/loans",
  },
  {
    id: "profile",
    label: "Profile",
    icon: "/figmaAssets/margin-4.svg",
    path: "/profile",
  },
];

export const Sidebar = (): JSX.Element => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 bg-black border border-[#d4af3733] text-[#d4af37]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static
          top-0 left-0
          h-full
          w-[280px] sm:w-[323px]
          bg-black border-r border-[#d4af3733]
          shadow-[0px_8px_32px_#0000004c]
          transition-transform duration-300 ease-in-out
          z-40
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="flex flex-col h-full p-4 sm:p-6 gap-6 sm:gap-8">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                className="w-12 h-12 sm:w-[57px] sm:h-[57px]"
                alt="EMAS-FI Logo"
                src="/figmaAssets/layer-2.png"
              />
              <h1 className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Kalnia',Helvetica] font-semibold text-2xl sm:text-3xl">
                EMAS-FI
              </h1>
            </div>
            <Button variant="ghost" size="icon" className="h-auto p-0 hidden sm:block">
              <img
                className="w-6 h-6 sm:w-8 sm:h-8"
                alt="Menu"
                src="/figmaAssets/button.svg"
              />
            </Button>
          </header>

          <nav className="flex flex-col gap-2">
            {navigationItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className={`flex items-center gap-3 sm:gap-4 w-full h-auto px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl relative transition-colors ${
                    isActive
                      ? "bg-[#d4af3733] text-[#d4af37]"
                      : "text-gray-500 hover:bg-[#d4af3733]/50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <img className="w-6 h-5 sm:w-8 sm:h-6" alt={item.label} src={item.icon} />
                  <span className="[font-family:'Montserrat',Helvetica] font-normal text-sm sm:text-base">
                    {item.label}
                  </span>
                  {isActive && (
                    <div className="absolute h-full top-0 left-0 w-[3px] rounded-[0px_2px_2px_0px] bg-[linear-gradient(94deg,rgba(212,175,55,1)_0%,rgba(255,215,0,1)_100%)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex-1" />

          <div className="flex flex-col gap-2">
            <img
              className="w-full h-px"
              alt="Divider"
              src="/figmaAssets/line-65.svg"
            />
            <Button
              variant="ghost"
              className="h-auto justify-start gap-2 px-3 sm:px-3.5 py-[7px] rounded-[40px]"
            >
              <Avatar className="w-7 h-7 sm:w-8 sm:h-8">
                <AvatarImage src="/figmaAssets/frame-811842.svg" />
                <AvatarFallback>TW</AvatarFallback>
              </Avatar>
              <span className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-[#ffb006] text-sm sm:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                Trent Williams
              </span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};
