import React from "react";
import { Alert, AlertDescription } from "../../../../components/ui/alert";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";

const stakingCards = [
  {
    id: "stable",
    icon: "/background.svg",
    title: "Stable Yield Staking",
    subtitle: "Rewards from discounted gold purchases",
    stats: [
      {
        value: "12.5%",
        label: "APY",
        valueClass:
          "bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-transparent text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]",
      },
      {
        value: "90 days",
        label: "Lock Time",
        valueClass:
          "[font-family:'Montserrat',Helvetica] font-bold text-blue-400 text-2xl tracking-[0] leading-8",
      },
    ],
    progress: {
      value: 65,
      label: "Progress: 65%",
      remaining: "23 days remaining",
    },
    buttons: [
      { label: "Stake Now", variant: "primary" },
      { label: "Claim Rewards", variant: "outline" },
    ],
    alert: {
      message: "Pending Rewards: 125.50 EMAS",
      icon: "/margin.svg",
    },
  },
  {
    id: "non-stable",
    icon: "/background-1.svg",
    title: "Non-Stable (Mint) Staking",
    subtitle: "Variable rewards from new mint production",
    stats: [
      {
        value: "90 days",
        label: "Variable APY",
        valueClass:
          "[font-family:'Montserrat',Helvetica] font-bold text-orange-400 text-2xl tracking-[0] leading-8",
      },
      {
        value: "$TBD",
        label: "Projected Monthly",
        valueClass:
          "bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-transparent text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]",
      },
    ],
    efficiency: {
      value: 70,
      label: "Mining Efficiency",
    },
    buttons: [
      { label: "Stake Now", variant: "primary" },
      { label: "Unlock", variant: "outline" },
    ],
  },
];

export const StakingSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-8 md:px-12 lg:px-16 w-full overflow-y-auto">
      <header className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 w-full">
        <h1 className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading font-[number:var(--heading-font-weight)] text-transparent text-2xl sm:text-3xl md:text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
          Staking EMAS Tokens
        </h1>

        <p className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-xs sm:text-sm md:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
          Last updated 2 mins ago
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
        {stakingCards.map((card) => (
          <Card
            key={card.id}
            className="bg-readdylinkblack-70 rounded-[20px] border border-solid border-[#d4af3733] p-4 sm:p-6 md:p-8"
          >
            <CardContent className="flex flex-col gap-4 p-0">
              <div className="flex items-start gap-4">
                <img className="w-10 h-10 sm:w-12 sm:h-12" alt={card.title} src={`/figmaAssets${card.icon}`} />

                <div className="flex flex-col">
                  <h2 className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-transparent text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
                    {card.title}
                  </h2>

                  <p className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label className="font-label font-[number:var(--label-font-weight)] text-white text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] [font-style:var(--label-font-style)]">
                  Stake Amount (EMAS)
                </Label>

                <Input
                  placeholder="Enter amount"
                  className="h-[54px] bg-[#00000080] rounded-2xl border border-solid border-[#d4af374c] [font-family:'Montserrat',Helvetica] font-normal text-gray-500 text-lg"
                />
              </div>

              <div className="flex flex-col gap-2 py-2">
                <div className="flex items-start justify-center gap-4">
                  {card.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start p-4 flex-1 bg-[#00000080] rounded-2xl"
                    >
                      <div className="flex flex-col items-center w-full">
                        <div className={`text-center ${stat.valueClass}`}>
                          {stat.value}
                        </div>
                      </div>

                      <div className="flex flex-col items-center w-full">
                        <p className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-[length:var(--body-subhead-font-size)] text-center tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {card.progress && (
                  <>
                    <div className="bg-[#d4af3733] rounded-[10px] overflow-hidden">
                      <div
                        className="h-3 rounded-xl bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)]"
                        style={{ width: `${card.progress.value}%` }}
                      />
                    </div>

                    <div className="flex items-start justify-between">
                      <p className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                        {card.progress.label}
                      </p>

                      <p className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                        {card.progress.remaining}
                      </p>
                    </div>
                  </>
                )}

                {card.efficiency && (
                  <div className="flex flex-col items-center justify-center gap-2 px-3 py-4 bg-black rounded-xl">
                    <div className="flex items-start justify-between w-full">
                      <p className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                        {card.efficiency.label}
                      </p>

                      <span className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-label font-[number:var(--label-font-weight)] text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] [font-style:var(--label-font-style)]">
                        {card.efficiency.value}%
                      </span>
                    </div>

                    <div className="bg-[#d4af3733] rounded-[10px] overflow-hidden w-full">
                      <div
                        className="h-3 rounded-xl bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)]"
                        style={{ width: `${card.efficiency.value}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                {card.buttons.map((button, index) => (
                  <Button
                    key={index}
                    className={`flex-1 w-full h-auto px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base ${
                      button.variant === "primary"
                        ? "bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] text-readdylinkblack hover:opacity-90"
                        : "bg-transparent border border-solid border-[#d4af37] text-white hover:bg-[#d4af3710]"
                    } font-body-action-button font-[number:var(--body-action-button-font-weight)] tracking-[var(--body-action-button-letter-spacing)] leading-[var(--body-action-button-line-height)] [font-style:var(--body-action-button-font-style)]`}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>

              {card.alert && (
                <Alert className="p-3 sm:p-[17px] bg-[#14532d4c] rounded-xl border-green-500 border border-solid">
                  <AlertDescription className="flex items-center gap-0">
                    <img
                      className="flex-shrink-0"
                      alt="Alert icon"
                      src={`/figmaAssets${card.alert.icon}`}
                    />
                    <span className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-[#e9e9e9] text-xs sm:text-sm md:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                      {card.alert.message}
                    </span>
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
