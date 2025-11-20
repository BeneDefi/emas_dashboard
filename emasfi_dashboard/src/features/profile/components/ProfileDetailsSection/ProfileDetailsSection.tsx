import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const profileStats = [
  {
    label: "Verification Level",
    value: "Premium",
    valueClass:
      "bg-[linear-gradient(163deg,rgba(212,175,55,1)_0%,rgba(255,215,0,1)_33%,rgba(184,134,11,1)_67%,rgba(218,165,32,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]",
  },
  { label: "Risk Score", value: "Low", valueClass: "text-green-400" },
  { label: "Total Transactions", value: "1,247", valueClass: "text-[#e9e9e9]" },
];

const statCards = [
  [
    {
      value: "$247k",
      label: "Total Stakes",
      valueClass:
        "bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-transparent text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)]",
      buttonText: "Deposit",
      buttonVariant: "gradient",
      buttonIcon: "/container-3.svg",
    },
    {
      value: "$18.9K",
      label: "Total Profits",
      valueClass:
        "[font-family:'Montserrat',Helvetica] font-bold text-green-400 text-2xl",
      buttonText: "Withdraw",
      buttonVariant: "outline",
      buttonIcon: "/container-2.svg",
    },
  ],
  [
    {
      value: "125.8 oz",
      label: "Gold Holdings",
      valueClass:
        "bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-transparent text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)]",
      buttonText: "Stake More",
      buttonVariant: "outline",
      buttonIcon: "/container.svg",
    },
    {
      value: "$45K",
      label: "Active Loans",
      valueClass:
        "[font-family:'Montserrat',Helvetica] font-bold text-orange-400 text-2xl",
      buttonText: "Repay Loan",
      buttonVariant: "outline",
      buttonIcon: "/container-1.svg",
    },
  ],
];

const chartYAxisLabels = ["100 %", "80 %", "60 %", "40 %", "20 %", "0 %"];
const chartXAxisLabels = [
  { label: "Jan", isActive: false },
  { label: "Feb", isActive: false },
  { label: "Mar", isActive: false },
  { label: "Apr", isActive: true },
  { label: "May", isActive: false },
  { label: "Jun", isActive: false },
];

export const ProfileDetailsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-16 flex-1 self-stretch w-full overflow-y-scroll">
      <header className="flex flex-col sm:flex-row items-start sm:items-end justify-between self-stretch w-full gap-2">
        <h1 className="flex items-center justify-center w-fit mt-[-1.00px] bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading font-[number:var(--heading-font-weight)] text-transparent text-xl sm:text-2xl md:text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] whitespace-nowrap [font-style:var(--heading-font-style)]">
          My Profile
        </h1>

        <p className="flex items-center justify-center w-fit font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-xs sm:text-sm md:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] whitespace-nowrap [font-style:var(--body-subhead-font-style)]">
          Last updated 2 mins ago
        </p>
      </header>

      <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 md:gap-8 self-stretch w-full">
        <Card className="flex flex-col w-full lg:w-[436px] lg:max-w-[436px] min-h-[380px] sm:min-h-[400px] md:h-[434px] items-start gap-4 sm:gap-5 md:gap-6 p-5 sm:p-7 md:p-[33px] bg-[#000000b2] rounded-[20px] border border-solid border-[#d4af374c] shadow-[0px_8px_32px_#0000004c] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
          <CardContent className="p-0 w-full">
            <div className="relative self-stretch w-full h-[140px] sm:h-[155px] md:h-[168px]">
              <img
                className="absolute top-0 left-[calc(50.00%_-_40px)] w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20"
                alt="Background"
                src="/background.svg"
              />

              <div className="flex-col items-center absolute top-20 sm:top-22 md:top-24 left-0 flex w-full">
                <div className="flex items-center justify-center w-fit mt-[-1.00px] bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-body-action-button font-[number:var(--body-action-button-font-weight)] text-transparent text-sm sm:text-base md:text-[length:var(--body-action-button-font-size)] tracking-[var(--body-action-button-letter-spacing)] leading-[var(--body-action-button-line-height)] [font-style:var(--body-action-button-font-style)]">
                  Trent Williams
                </div>
              </div>

              <div className="flex flex-col w-full items-center absolute top-[108px] sm:top-[115px] md:top-[124px] left-0">
                <div className="text-gray-200 w-fit mt-[-1.00px] font-body-subhead font-[number:var(--body-subhead-font-weight)] text-xs sm:text-sm md:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] whitespace-nowrap [font-style:var(--body-subhead-font-style)]">
                  0x567v46.......456TRGH
                </div>
              </div>

              <div className="flex flex-col w-full items-center absolute top-[132px] sm:top-[141px] md:top-[152px] left-0">
                <div className="flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-gray-500 text-[10px] sm:text-[11px] md:text-xs text-center tracking-[0] leading-4 whitespace-nowrap">
                  Member since: March 2024
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 sm:gap-3.5 md:gap-4 self-stretch w-full">
              {profileStats.map((stat, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-start justify-between self-stretch w-full">
                    <div className="inline-flex flex-col items-start">
                      <div className="flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-gray-400 text-xs sm:text-[13px] md:text-sm tracking-[0] leading-5 whitespace-nowrap">
                        {stat.label}
                      </div>
                    </div>

                    <div className="inline-flex flex-col items-start">
                      <div
                        className={`flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-xs sm:text-[13px] md:text-sm tracking-[0] leading-5 whitespace-nowrap ${stat.valueClass}`}
                      >
                        {stat.value}
                      </div>
                    </div>
                  </div>

                  {index < profileStats.length - 1 && (
                    <Separator className="self-stretch w-full h-px bg-gray-700" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6 flex-1 self-stretch w-full">
          {statCards.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col items-start gap-4 sm:gap-5 md:gap-6 flex-1 self-stretch w-full"
            >
              {column.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="flex flex-col items-start gap-3 sm:gap-4 md:gap-6 flex-1 self-stretch w-full"
                >
                  <Card className="flex flex-col w-full sm:w-60 h-[100px] sm:h-[110px] md:h-[124px] items-center justify-center p-3 sm:p-4 md:p-[17px] bg-[#000000b2] rounded-2xl border border-solid border-[#d4af374c] shadow-[0px_8px_32px_#0000004c] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                    <CardContent className="p-0 flex flex-col items-center self-stretch w-full">
                      <div className="flex flex-col items-center self-stretch w-full">
                        <div
                          className={`flex items-center justify-center w-fit mt-[-1.00px] whitespace-nowrap text-lg sm:text-xl md:text-2xl ${card.valueClass}`}
                        >
                          {card.value}
                        </div>
                      </div>

                      <div className="flex flex-col items-center self-stretch w-full">
                        <div className="self-stretch text-xs sm:text-sm md:text-[length:var(--body-subhead-font-size)] text-center leading-[var(--body-subhead-line-height)] flex items-center justify-center mt-[-1.00px] font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 tracking-[var(--body-subhead-letter-spacing)] [font-style:var(--body-subhead-font-style)]">
                          {card.label}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Button
                    className={`flex items-center justify-center gap-1 px-4 sm:px-5 py-2.5 sm:py-3 md:py-3.5 self-stretch w-full rounded-xl text-sm sm:text-base ${
                      card.buttonVariant === "gradient"
                        ? "bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] hover:opacity-90"
                        : "bg-transparent border border-solid border-[#d4af37] hover:bg-[#d4af37]/10"
                    }`}
                  >
                    <img
                      className="flex-[0_0_auto] w-4 h-4"
                      alt="Container"
                      src={card.buttonIcon}
                    />

                    <span
                      className={`w-fit mt-[-1.00px] whitespace-nowrap ${
                        card.buttonVariant === "gradient"
                          ? "font-body-action-button font-[number:var(--body-action-button-font-weight)] text-readdylinkblack text-sm sm:text-base md:text-[length:var(--body-action-button-font-size)] text-center tracking-[var(--body-action-button-letter-spacing)] leading-[var(--body-action-button-line-height)] [font-style:var(--body-action-button-font-style)]"
                          : "font-body-regular font-[number:var(--body-regular-font-weight)] text-white text-sm sm:text-base md:text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]"
                      }`}
                    >
                      {card.buttonText}
                    </span>
                  </Button>
                </div>
              ))}
            </div>
          ))}

          <Card className="flex flex-col w-full lg:w-[473px] items-center gap-8 sm:gap-10 md:gap-12 p-4 sm:p-6 md:p-8 bg-readdylinkblack-70 rounded-[20px] border border-solid border-[#d4af3733]">
            <CardContent className="p-0 w-full">
              <div className="flex flex-col items-start gap-8 sm:gap-10 md:gap-[60px] px-2 sm:px-3 py-2 sm:py-[9px] self-stretch w-full">
                <div className="flex flex-col w-full items-start gap-3 sm:gap-3.5 md:gap-4">
                  <h2 className="flex items-center justify-center w-fit mt-[-1.00px] bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-body-headline font-[number:var(--body-headline-font-weight)] text-transparent text-sm sm:text-base md:text-[length:var(--body-headline-font-size)] tracking-[var(--body-headline-letter-spacing)] leading-[var(--body-headline-line-height)] [font-style:var(--body-headline-font-style)]">
                    Performance Timeline
                  </h2>

                  <Separator className="mb-[-1.00px] self-stretch w-full h-px bg-gray-700" />
                </div>
              </div>

              <div className="inline-flex flex-col items-end justify-end w-full">
                <div className="flex w-full items-start gap-[3px] sm:gap-[4px] md:gap-[5px]">
                  <div className="inline-flex flex-col items-start gap-5 sm:gap-6 md:gap-[26px]">
                    {chartYAxisLabels.map((label, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center w-[35px] sm:w-[42px] md:w-[49px] font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-500 text-[10px] sm:text-xs md:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] whitespace-nowrap [font-style:var(--body-subhead-font-style)]"
                      >
                        {label}
                      </div>
                    ))}
                  </div>

                  <div className="relative flex-1 max-w-full overflow-hidden">
                    <img className="w-full h-auto" alt="Frame" src="/frame-237.svg" />

                    <img
                      className="absolute top-[10px] sm:top-[14px] md:top-[17px] left-[3px] sm:left-[4px] md:left-[5px] w-[85%] sm:w-[87%] md:w-[332px] h-auto max-h-[180px] sm:max-h-[200px] md:h-[218px] object-contain"
                      alt="Group"
                      src="/group-237.png"
                    />
                  </div>
                </div>

                <div className="inline-flex h-[20px] sm:h-[23px] md:h-[25px] items-center justify-center gap-4 sm:gap-6 md:gap-[34px] w-full flex-wrap">
                  {chartXAxisLabels.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center w-fit mt-[-0.50px] text-center whitespace-nowrap ${
                        item.isActive
                          ? "[font-family:'Montserrat',Helvetica] font-normal text-blue-400 text-xs sm:text-sm md:text-[15px] tracking-[0] leading-[15px]"
                          : "font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-500 text-[10px] sm:text-xs md:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]"
                      }`}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
