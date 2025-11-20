import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { DonutChart } from "../../../../components/DonutChart";

const statsCards = [
  {
    title: "Available Collateral",
    amount: "$186,442",
    subtitle: "Based on 75% of gold holdings",
    hasProgress: true,
    progressValue: 24,
    progressLabel: "24% utilized",
  },
  {
    title: "Current Loans",
    amount: "$45,000",
    subtitle: "Based on 75% of gold holdings",
    hasProgress: false,
    bottomText: "Next payment: $1,250 in 12 days",
    bottomTextColor: "text-green-400",
  },
  {
    title: "Interest Rate",
    amount: "4.5%",
    amountColor: "text-blue-400",
    subtitle: "Annual percentage rate",
    hasProgress: false,
    bottomText: "Premium rate for gold collateral",
    bottomTextColor: "text-green-400",
  },
];

const loanData = [
  {
    id: "#LN-2024-001",
    amount: "$25,000",
    collateral: "45.2 oz Gold",
    status: "Active",
    statusColor: "bg-[#4ade8033] text-green-400",
    actionText: "Repay",
    actionStyle:
      "border border-solid border-[#ffb006] bg-transparent text-white",
  },
  {
    id: "#LN-2024-002",
    amount: "$20,000",
    collateral: "36.8 oz Gold",
    status: "Due Soon",
    statusColor: "bg-[#fb923c33] text-orange-400",
    actionText: "Pay Now",
    actionStyle: "bg-[#ffb006] text-[#000000f2]",
  },
];

const loanUtilizationData = [
  { name: "Used", value: 24, color: "#d4af37" },
  { name: "Available", value: 76, color: "#4ade80" },
];

export const LoanDetailsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-8 md:px-12 lg:px-16 w-full overflow-y-auto">
      <header className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 w-full">
        <h1 className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading font-[number:var(--heading-font-weight)] text-2xl sm:text-3xl md:text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
          Loans Against Gold Holdings
        </h1>
        <p className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-xs sm:text-sm md:text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
          Last updated 2 mins ago
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
        {statsCards.map((card, index) => (
          <Card
            key={index}
            className="bg-readdylinkblack-70 rounded-[20px] border border-solid border-[#d4af3733]"
          >
            <CardContent className="flex flex-col gap-4 p-[25px]">
              <div className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-body-action-button font-[number:var(--body-action-button-font-weight)] text-[length:var(--body-action-button-font-size)] tracking-[var(--body-action-button-letter-spacing)] leading-[var(--body-action-button-line-height)] [font-style:var(--body-action-button-font-style)]">
                {card.title}
              </div>

              <div className="flex flex-col">
                <div
                  className={`font-sub-heading font-[number:var(--sub-heading-font-weight)] ${card.amountColor || "text-readdylinkmischka"} text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]`}
                >
                  {card.amount}
                </div>
                <div className="font-label font-[number:var(--label-font-weight)] text-gray-400 text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] [font-style:var(--label-font-style)]">
                  {card.subtitle}
                </div>
              </div>

              {card.hasProgress && (
                <div className="flex flex-col gap-2">
                  <div className="bg-[#d4af3733] rounded-[10px] overflow-hidden h-3">
                    <div
                      style={{ width: `${card.progressValue}%` }}
                      className="h-3 rounded-xl bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)]"
                    />
                  </div>
                  <div className="font-label font-[number:var(--label-font-weight)] text-gray-400 text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] [font-style:var(--label-font-style)]">
                    {card.progressLabel}
                  </div>
                </div>
              )}

              {card.bottomText && (
                <div
                  className={`font-body-subhead font-[number:var(--body-subhead-font-weight)] ${card.bottomTextColor} text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]`}
                >
                  {card.bottomText}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4 sm:gap-6 md:gap-8 w-full">
        <Card className="bg-readdylinkblack-70 rounded-[20px] border border-solid border-[#d4af3733]">
          <CardContent className="flex flex-col gap-4 p-4 sm:p-6 md:p-8">
            <h2 className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
              Generate New Loan
            </h2>

            <div className="flex flex-col gap-2">
              <Label className="font-label font-[number:var(--label-font-weight)] text-white text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] [font-style:var(--label-font-style)]">
                Loan Amount (usd)
              </Label>
              <Input
                placeholder="Enter amount"
                className="h-[54px] bg-[#00000080] rounded-2xl border border-solid border-[#d4af374c] [font-family:'Montserrat',Helvetica] font-normal text-gray-500 text-lg"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="font-label font-[number:var(--label-font-weight)] text-white text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] [font-style:var(--label-font-style)]">
                Loan Term
              </Label>
              <Input
                placeholder="0 months"
                className="h-[54px] bg-[#00000080] rounded-2xl border border-solid border-[#d4af374c] [font-family:'Montserrat',Helvetica] font-normal text-gray-500 text-lg"
              />
            </div>

            <div className="flex gap-4 py-2">
              <div className="flex-1 flex flex-col items-center p-4 bg-black rounded-2xl">
                <div className="[font-family:'Montserrat',Helvetica] font-bold text-blue-400 text-2xl text-center">
                  4.5%
                </div>
                <div className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-[length:var(--body-subhead-font-size)] text-center tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                  Interest Rate
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center p-4 bg-black rounded-2xl">
                <div className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-[length:var(--sub-heading-font-size)] text-center tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
                  $TBD
                </div>
                <div className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-[length:var(--body-subhead-font-size)] text-center tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                  Monthly Payment
                </div>
              </div>
            </div>

            <Button className="h-auto px-5 py-3.5 rounded-xl bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] font-body-action-button font-[number:var(--body-action-button-font-weight)] text-readdylinkblack text-[length:var(--body-action-button-font-size)] text-center tracking-[var(--body-action-button-letter-spacing)] leading-[var(--body-action-button-line-height)] [font-style:var(--body-action-button-font-style)] hover:opacity-90">
              Generate Loan
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-readdylinkblack-70 rounded-[20px] border border-solid border-[#d4af3733]">
          <CardContent className="flex flex-col gap-6 sm:gap-8 md:gap-12 p-4 sm:p-6 md:p-8">
            <div className="flex flex-col gap-4 px-2 sm:px-3 py-2">
              <h2 className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-body-headline font-[number:var(--body-headline-font-weight)] text-base sm:text-lg md:text-[length:var(--body-headline-font-size)] tracking-[var(--body-headline-letter-spacing)] leading-[var(--body-headline-line-height)] [font-style:var(--body-headline-font-style)]">
                Loan Utilization
              </h2>
              <img
                className="w-full h-px object-cover"
                alt="Line"
                src="/figmaAssets/line-66.svg"
              />
            </div>

            <div className="w-full h-[220px] sm:h-[260px] md:h-[300px]">
              <DonutChart data={loanUtilizationData} />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#000000b2] rounded-[20px] border border-solid border-[#d4af374c] shadow-[0px_8px_32px_#0000004c] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] w-full">
        <CardContent className="flex flex-col gap-4 pt-[33px] pb-[25px] px-[25px]">
          <h2 className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
            Active Loans
          </h2>

          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-700">
                  <TableHead className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                    Loan ID
                  </TableHead>
                  <TableHead className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                    Amount
                  </TableHead>
                  <TableHead className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                    Collateral
                  </TableHead>
                  <TableHead className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                    Status
                  </TableHead>
                  <TableHead className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-gray-400 text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loanData.map((loan, index) => (
                  <TableRow key={index} className="border-b border-gray-800">
                    <TableCell className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-white text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                      {loan.id}
                    </TableCell>
                    <TableCell className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-white text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                      {loan.amount}
                    </TableCell>
                    <TableCell className="font-body-subhead font-[number:var(--body-subhead-font-weight)] text-white text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)]">
                      {loan.collateral}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${loan.statusColor} h-8 px-3 py-1 rounded-full font-card-text font-[number:var(--card-text-font-weight)] text-[length:var(--card-text-font-size)] tracking-[var(--card-text-letter-spacing)] leading-[var(--card-text-line-height)] [font-style:var(--card-text-font-style)]`}
                      >
                        {loan.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        className={`h-auto px-3.5 py-[7px] rounded-[40px] ${loan.actionStyle} font-body-subhead font-[number:var(--body-subhead-font-weight)] text-[length:var(--body-subhead-font-size)] tracking-[var(--body-subhead-letter-spacing)] leading-[var(--body-subhead-line-height)] [font-style:var(--body-subhead-font-style)] hover:opacity-90`}
                      >
                        {loan.actionText}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
