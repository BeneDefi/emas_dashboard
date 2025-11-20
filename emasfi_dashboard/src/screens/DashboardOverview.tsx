import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { DonutChart } from "../components/DonutChart";

const metricCards = [
  {
    icon: "/figmaAssets/background-2.svg",
    change: "+12.5%",
    changeColor: "text-[#18ff6c]",
    label: "Total Holdings",
    value: "$247,850",
    valueColor:
      "bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent",
  },
  {
    icon: "/figmaAssets/background-1.svg",
    change: "+8.2%",
    changeColor: "text-[#18ff6c]",
    label: "Total Profits",
    value: "$18, 925",
    valueColor: "text-[#18ff6c]",
  },
  {
    icon: "/figmaAssets/background.svg",
    change: "125.8 oz",
    changeColor: "text-blue-400",
    label: "Gold Holdings",
    value: "$247,850",
    valueColor:
      "bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent",
  },
  {
    icon: "/figmaAssets/background-3.svg",
    change: "2 Active",
    changeColor: "text-[#ff8b2c]",
    label: "Active Loans",
    value: "$47,850",
    valueColor: "text-[#ff8b2c]",
  },
];

const assetDistributionData = [
  { name: "Gold Holdings", value: 40, color: "#d4af37" },
  { name: "Liquid Assets", value: 25, color: "#4ade80" },
  { name: "Staked EMAS", value: 20, color: "#60a5fa" },
  { name: "Loans", value: 15, color: "#fb923c" },
];

const yAxisLabels = ["100 %", "80 %", "60 %", "40 %", "20 %", "0 %"];
const xAxisLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export const DashboardOverview = (): JSX.Element => {
  return (
    <div className="flex flex-col flex-1 bg-[#050300] overflow-hidden w-full">
      <header className="flex items-center justify-between gap-2 sm:gap-4 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:h-[108px] w-full bg-black border-b border-solid border-[#d4af3733] shadow-[0px_4px_40px_#00000040]">
        <div className="flex items-center gap-3 sm:gap-[18px] ml-auto">
          <Button className="h-[42px] sm:h-[50px] gap-1.5 sm:gap-2 px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base overflow-hidden bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] relative">
            <img
              className="w-[14px] h-[12px] sm:w-[17.5px] sm:h-[15px]"
              alt="Vector"
              src="/figmaAssets/vector-4.svg"
            />
            <span className="hidden sm:inline font-body-action-button font-[number:var(--body-action-button-font-weight)] text-readdylinkblack text-[length:var(--body-action-button-font-size)] text-center tracking-[var(--body-action-button-letter-spacing)] leading-[var(--body-action-button-line-height)] [font-style:var(--body-action-button-font-style)]">
              Connect Wallet
            </span>
            <span className="sm:hidden font-body-action-button font-semibold text-readdylinkblack text-sm">
              Connect
            </span>
            <div className="absolute w-[195.15%] h-[205.86%] top-[-52.01%] left-[-47.41%] rotate-[27.43deg] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0)_100%)]" />
          </Button>

          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-[6px] sm:py-[7px] bg-[#d4af3733] rounded-[40px]">
            <div className="hidden sm:block whitespace-nowrap font-body-subhead font-[number:var(--body-subhead-font-weight)] text-[#ffb006] text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
              0x567v46.......456TRGH
            </div>
            <div className="sm:hidden whitespace-nowrap font-body-subhead font-[number:var(--body-subhead-font-weight)] text-[#ffb006] text-xs">
              0x567v...TRGH
            </div>
            <ChevronDownIcon className="w-[10px] h-[6px] sm:w-[12.25px] sm:h-[7px] text-[#ffb006]" />
            <img
              className="flex-[0_0_auto] w-6 h-6 sm:w-8 sm:h-8"
              alt="Frame"
              src="/figmaAssets/frame-811842.svg"
            />
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-6 sm:gap-8 px-4 sm:px-6 lg:px-16 py-6 sm:py-8 flex-1 w-full overflow-y-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 sm:gap-4 w-full">
          <h1 className="flex items-center justify-center w-fit bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading font-[number:var(--heading-font-weight)] text-transparent text-2xl sm:text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-8 sm:leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
            Dashboard Overview
          </h1>
          <p className="flex items-center justify-center w-fit font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-xs sm:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
            Last updated 2 mins ago
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
          {metricCards.map((card, index) => (
            <Card
              key={index}
              className="flex flex-col items-start gap-3 p-5 sm:p-[25px] bg-readdylinkblack-70 rounded-[20px] border border-solid border-[#d4af3733]"
            >
              <CardContent className="p-0 w-full">
                <div className="flex items-center justify-between w-full">
                  <img className="w-10 h-10 sm:w-12 sm:h-12" alt="Background" src={card.icon} />
                  <div className="inline-flex flex-col items-start">
                    <div
                      className={`font-normal text-sm leading-5 flex items-center justify-center w-fit [font-family:'Montserrat',Helvetica] tracking-[0] whitespace-nowrap ${card.changeColor}`}
                    >
                      {card.change}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 w-full mt-3">
                  <div className="flex flex-col items-start w-full">
                    <div className="flex items-center justify-center w-fit font-body-subhead font-[number:var(--body-subhead-font-weight)] text-readdylinkmischka text-sm sm:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] whitespace-nowrap [font-style:var(--body-subhead-font-style)]">
                      {card.label}
                    </div>
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <div
                      className={`flex items-center justify-center w-fit font-sub-heading font-[number:var(--sub-heading-font-weight)] text-xl sm:text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-7 sm:leading-[var(--sub-heading-line-height)] whitespace-nowrap [font-style:var(--sub-heading-font-style)] ${card.valueColor}`}
                    >
                      {card.value}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 w-full">
          <Card className="flex flex-col items-center gap-8 sm:gap-12 p-6 sm:p-8 bg-readdylinkblack-70 rounded-[20px] border border-solid border-[#d4af3733]">
            <CardContent className="p-0 w-full">
              <div className="flex flex-col items-start gap-4 px-2 sm:px-3 py-2 w-full">
                <h2 className="flex items-center justify-center w-fit bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-body-headline font-[number:var(--body-headline-font-weight)] text-transparent text-base sm:text-[length:var(--body-headline-font-size)] tracking-[var(--body-headline-letter-spacing)] leading-6 sm:leading-[var(--body-headline-line-height)] [font-style:var(--body-headline-font-style)]">
                  Asset Distribution
                </h2>
                <img
                  className="w-full h-px object-cover"
                  alt="Line"
                  src="/figmaAssets/line-66.svg"
                />
              </div>

              <div className="w-full h-[260px] sm:h-[300px] mt-4">
                <DonutChart data={assetDistributionData} />
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center gap-8 sm:gap-12 p-6 sm:p-8 bg-readdylinkblack-70 rounded-[20px] border border-solid border-[#d4af3733]">
            <CardContent className="p-0 w-full">
              <div className="flex flex-col items-start gap-4 px-2 sm:px-3 py-2 w-full">
                <h2 className="flex items-center justify-center w-fit bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-body-headline font-[number:var(--body-headline-font-weight)] text-transparent text-base sm:text-[length:var(--body-headline-font-size)] tracking-[var(--body-headline-letter-spacing)] leading-6 sm:leading-[var(--body-headline-line-height)] [font-style:var(--body-headline-font-style)]">
                  Gold Growth
                </h2>
                <img
                  className="w-full h-px object-cover"
                  alt="Line"
                  src="/figmaAssets/line-66.svg"
                />
              </div>

              <div className="flex flex-col items-end justify-end w-full mt-4">
                <div className="flex w-full items-start gap-1 sm:gap-[5px]">
                  <div className="flex flex-col items-start gap-[20px] sm:gap-[26px]">
                    {yAxisLabels.map((label, index) => (
                      <div
                        key={index}
                        className="h-[16px] sm:h-[19px] flex items-center justify-center w-[40px] sm:w-[49px] font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-500 text-xs sm:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-4 sm:leading-[var(--body-subhead-line-height)] whitespace-nowrap [font-style:var(--body-subhead-font-style)]"
                      >
                        {label}
                      </div>
                    ))}
                  </div>

                  <div className="relative flex-1">
                    <img
                      className="w-full h-auto"
                      alt="Frame"
                      src="/figmaAssets/frame-237.svg"
                    />

                    <img
                      className="absolute top-[8%] left-0 w-full h-[85%] object-contain"
                      alt="Group"
                      src="/figmaAssets/group-237.png"
                    />
                  </div>
                </div>

                <div className="flex h-[20px] sm:h-[25px] items-center justify-center gap-4 sm:gap-[34px] mt-2">
                  {xAxisLabels.map((label, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center w-fit font-body-subhead font-[number:var(--body-subhead-font-weight)] text-center tracking-[var(--body-subhead-letter-spacing)] leading-4 sm:leading-[var(--body-subhead-line-height)] whitespace-nowrap [font-style:var(--body-subhead-font-style)] ${
                        label === "Apr" ? "text-blue-400" : "text-gray-500"
                      } text-xs sm:text-[length:var(--body-subhead-font-size)]`}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center gap-8 sm:gap-12 p-6 sm:p-8 bg-readdylinkblack-70 rounded-[20px] border border-solid border-[#d4af3733]">
            <CardContent className="p-0 w-full">
              <div className="flex flex-col items-start gap-4 px-2 sm:px-3 py-2 w-full">
                <h2 className="flex items-center justify-center w-fit bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-body-headline font-[number:var(--body-headline-font-weight)] text-transparent text-base sm:text-[length:var(--body-headline-font-size)] tracking-[var(--body-headline-letter-spacing)] leading-6 sm:leading-[var(--body-headline-line-height)] [font-style:var(--body-headline-font-style)]">
                  Yield Trend
                </h2>
                <img
                  className="w-full h-px object-cover"
                  alt="Line"
                  src="/figmaAssets/line-66.svg"
                />
              </div>

              <div className="flex flex-col items-end justify-end w-full mt-4">
                <div className="flex w-full items-start gap-1 sm:gap-[5px]">
                  <div className="flex flex-col items-start gap-[20px] sm:gap-[26px]">
                    {yAxisLabels.map((label, index) => (
                      <div
                        key={index}
                        className="h-[16px] sm:h-[19px] flex items-center justify-center w-[40px] sm:w-[49px] font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-500 text-xs sm:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-4 sm:leading-[var(--body-subhead-line-height)] whitespace-nowrap [font-style:var(--body-subhead-font-style)]"
                      >
                        {label}
                      </div>
                    ))}
                  </div>

                  <div className="relative flex-1">
                    <img
                      className="w-full h-auto"
                      alt="Frame"
                      src="/figmaAssets/frame-237.svg"
                    />

                    <img
                      className="absolute top-[8%] left-0 w-full h-[85%] object-contain"
                      alt="Group"
                      src="/figmaAssets/group-237.png"
                    />
                  </div>
                </div>

                <div className="flex h-[20px] sm:h-[25px] items-center justify-center gap-4 sm:gap-[34px] mt-2">
                  {xAxisLabels.map((label, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center w-fit font-body-subhead font-[number:var(--body-subhead-font-weight)] text-center tracking-[var(--body-subhead-letter-spacing)] leading-4 sm:leading-[var(--body-subhead-line-height)] whitespace-nowrap [font-style:var(--body-subhead-font-style)] ${
                        label === "Apr" ? "text-blue-400" : "text-gray-500"
                      } text-xs sm:text-[length:var(--body-subhead-font-size)]`}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
