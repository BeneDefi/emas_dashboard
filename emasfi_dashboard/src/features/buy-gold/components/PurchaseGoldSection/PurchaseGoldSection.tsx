import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const yAxisLabels = [
  { value: "1,980" },
  { value: "1,978" },
  { value: "1,976" },
  { value: "1,974" },
  { value: "1,972" },
  { value: "1,970" },
];

const xAxisLabels = [
  { value: "00.00" },
  { value: "04:00" },
  { value: "08:00" },
  { value: "12:00" },
  { value: "16:00" },
  { value: "20:00" },
];

export const PurchaseGoldSection = (): JSX.Element => {
  const [isVaultStorage, setIsVaultStorage] = useState(true);

  return (
    <section className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-8 md:px-16 w-full overflow-y-scroll">
      <header className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 sm:gap-4 w-full">
        <h1 className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading font-[number:var(--heading-font-weight)] text-2xl sm:text-3xl md:text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
          Buy Physical Gold
        </h1>

        <p className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-xs sm:text-sm md:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)] whitespace-nowrap">
          Last updated 2 mins ago
        </p>
      </header>

      <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 md:gap-8 w-full">
        <Card className="bg-readdylinkblack-70 rounded-[20px] border border-solid border-[#d4af3733] w-full lg:w-auto">
          <CardContent className="flex flex-col items-start gap-4 p-4 sm:p-6 md:p-8">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 w-full">
                <h2 className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-lg sm:text-xl md:text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
                  Purchase Gold
                </h2>

                <p className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-xs sm:text-sm md:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)] whitespace-nowrap">
                  Live Price:$TBA/oz
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 w-full">
                <Label className="font-label font-[number:var(--label-font-weight)] text-white text-xs sm:text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] [font-style:var(--label-font-style)]">
                  Amount (USD)
                </Label>

                <Input
                  placeholder="Enter amount"
                  className="h-[44px] sm:h-[50px] md:h-[54px] bg-[#00000080] rounded-2xl border border-solid border-[#d4af374c] [font-family:'Montserrat',Helvetica] font-normal text-gray-500 text-base sm:text-lg"
                />
              </div>

              <div className="flex flex-col items-start gap-2 px-0 py-2 w-full">
                <Label className="font-label font-[number:var(--label-font-weight)] text-white text-xs sm:text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] [font-style:var(--label-font-style)]">
                  Storage Option
                </Label>

                <div className="flex items-center justify-between p-3 sm:p-4 w-full bg-black rounded-2xl">
                  <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#e9e9e9] text-sm sm:text-base">
                    Store in Vault (earn appreciation)
                  </span>

                  <Switch
                    checked={isVaultStorage}
                    onCheckedChange={setIsVaultStorage}
                    className="data-[state=checked]:bg-[linear-gradient(153deg,rgba(212,175,55,1)_0%,rgba(255,215,0,1)_100%)] flex-shrink-0"
                  />
                </div>

                <p className="[font-family:'Montserrat',Helvetica] font-normal text-gray-500 text-xs">
                  Toggle for physical delivery option
                </p>
              </div>

              <Button className="h-auto w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] font-body-action-button font-[number:var(--body-action-button-font-weight)] text-readdylinkblack text-base sm:text-[length:var(--body-action-button-font-size)] tracking-[var(--body-action-button-letter-spacing)] leading-[var(--body-action-button-line-height)] [font-style:var(--body-action-button-font-style)] hover:opacity-90">
                Buy Gold
              </Button>
            </div>

            <div className="flex flex-col w-full items-start gap-4">
              <Card className="w-full bg-[#000000b2] rounded-2xl border border-solid border-[#d4af374c] shadow-[0px_8px_32px_#0000004c] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                <CardContent className="p-3 sm:p-4 md:p-[17px]">
                  <h3 className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-body-headline font-[number:var(--body-headline-font-weight)] text-sm sm:text-base md:text-[length:var(--body-headline-font-size)] tracking-[var(--body-headline-letter-spacing)] leading-[var(--body-headline-line-height)] [font-style:var(--body-headline-font-style)]">
                    Vault Holdings
                  </h3>

                  <p className="mt-2 sm:mt-3 md:mt-4 font-sub-heading font-[number:var(--sub-heading-font-weight)] text-[#e9e9e9] text-lg sm:text-xl md:text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
                    TBD oz
                  </p>

                  <p className="mt-2 sm:mt-3 md:mt-4 font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-xs sm:text-sm md:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                    Worth $248,590
                  </p>
                </CardContent>
              </Card>

              <Card className="w-full bg-[#000000b2] rounded-2xl border border-solid border-[#d4af374c] shadow-[0px_8px_32px_#0000004c] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                <CardContent className="p-3 sm:p-4 md:p-[17px]">
                  <h3 className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-body-headline font-[number:var(--body-headline-font-weight)] text-sm sm:text-base md:text-[length:var(--body-headline-font-size)] tracking-[var(--body-headline-letter-spacing)] leading-[var(--body-headline-line-height)] [font-style:var(--body-headline-font-style)]">
                    Storage Fees
                  </h3>

                  <p className="mt-2 sm:mt-3 md:mt-4 font-sub-heading font-[number:var(--sub-heading-font-weight)] text-white text-lg sm:text-xl md:text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
                    TBA% annually
                  </p>

                  <p className="mt-2 sm:mt-3 md:mt-4 font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-xs sm:text-sm md:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                    $24.50/month
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-readdylinkblack-70 rounded-[20px] border border-solid border-[#d4af3733] w-full lg:w-auto">
          <CardContent className="flex flex-col w-full items-start gap-8 sm:gap-10 md:gap-[60px] p-4 sm:p-6 md:p-8">
            <div className="flex flex-col items-start gap-4 w-full">
              <h2 className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-lg sm:text-xl md:text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
                Gold Price Chart
              </h2>

              <img
                className="w-full h-px object-cover"
                alt="Line"
                src="/line-66.svg"
              />
            </div>

            <div className="flex flex-col items-end gap-[5px] w-full relative overflow-x-auto">
              <div className="flex items-start gap-3 sm:gap-5 md:gap-7 w-full min-w-[300px]">
                <div className="inline-flex flex-col items-start gap-4 sm:gap-5 md:gap-7">
                  {yAxisLabels.map((label, index) => (
                    <div
                      key={`y-axis-${index}`}
                      className="w-[35px] sm:w-[42px] md:w-[49px] flex items-center justify-center font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-500 text-xs sm:text-sm md:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                      {label.value}
                    </div>
                  ))}
                </div>

                <img
                  className="flex-1 w-full object-contain"
                  alt="Frame"
                  src="/frame-2147223400.svg"
                />
              </div>

              <div className="inline-flex h-[20px] sm:h-[22px] md:h-[25px] items-center justify-center gap-6 sm:gap-10 md:gap-14 w-full">
                {xAxisLabels.map((label, index) => (
                  <div
                    key={`x-axis-${index}`}
                    className="text-center flex items-center justify-center font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-500 text-xs sm:text-sm md:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                    {label.value}
                  </div>
                ))}
              </div>

              <img
                className="absolute top-[35px] sm:top-[45px] md:top-[53px] left-[45px] sm:left-[60px] md:left-[77px] w-[70%] sm:w-[75%] md:w-[553px] h-auto max-h-[130px] sm:max-h-[160px] md:h-[186px] object-contain"
                alt="Group"
                src="/group-237.png"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
