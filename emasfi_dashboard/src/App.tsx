import React from "react";
import { Route, Switch } from "wouter";
import { Sidebar } from "./components/Sidebar";
import { DashboardOverview } from "./screens/DashboardOverview";
import { FrameScreen as BuyGoldScreen } from "./screens/BuyGold/FrameScreen";
import { FrameScreen as LoansScreen } from "./screens/Loans/FrameScreen";
import { FrameScreen as ProfileScreen } from "./screens/Profile/FrameScreen";
import { FrameScreen as StakingScreen } from "./screens/Staking/FrameScreen";

export const App = (): JSX.Element => {
  return (
    <div className="flex min-h-screen bg-[#060400]">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Switch>
          <Route path="/" component={DashboardOverview} />
          <Route path="/buy-gold" component={BuyGoldScreen} />
          <Route path="/staking" component={StakingScreen} />
          <Route path="/loans" component={LoansScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route>404 - Not Found</Route>
        </Switch>
      </div>
    </div>
  );
};
