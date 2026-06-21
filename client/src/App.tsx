import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BookOnline from "./pages/BookOnline";
import LogbookService from "./pages/LogbookService";
import BrakeClutchService from "./pages/BrakeClutchService";
import AirConService from "./pages/AirConService";
import BatteryTyreService from "./pages/BatteryTyreService";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/book"} component={BookOnline} />
      <Route path={"/services/logbook"} component={LogbookService} />
      <Route path={"/services/brakes-clutch"} component={BrakeClutchService} />
      <Route path={"/services/air-conditioning"} component={AirConService} />
      <Route path={"/services/battery-tyres"} component={BatteryTyreService} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
