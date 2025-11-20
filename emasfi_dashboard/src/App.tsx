import React from "react";
import { Route, Switch } from "wouter";
import { Sidebar } from "@/components/Sidebar";
import { DashboardPage } from "@/features/dashboard";
import { BuyGoldPage } from "@/features/buy-gold";
import { LoansPage } from "@/features/loans";
import { ProfilePage } from "@/features/profile";
import { StakingPage } from "@/features/staking";

export const App = (): JSX.Element => {
  return (
    <div className="flex min-h-screen bg-[#060400]">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Switch>
          <Route path="/" component={DashboardPage} />
          <Route path="/buy-gold" component={BuyGoldPage} />
          <Route path="/staking" component={StakingPage} />
          <Route path="/loans" component={LoansPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route>404 - Not Found</Route>
        </Switch>
      </div>
    </div>
  );
};
