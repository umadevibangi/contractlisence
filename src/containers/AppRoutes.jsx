import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// import AppShell from "./appShell";
import appUrls from "../config/appUrls";
import AppContainers from "./AppContainer";
import Login from "../screens/login";
import Register from "../screens/register";
import Navigationdrawer from "../components/navigationDrawer";
import Gradeb from "../screens/gradeb";
import Gradea from "../screens/gradea";
import Gradec from "../screens/gradec";
import Trackstatus from "../screens/Trackstatus";
import Applicantdetails from "../screens/Applicantdetails";
import Applicantdetailsgradeb from "../screens/Applicantdetailsgradeb";
import Applicantdetailsgradea from "../screens/Applicantdetailsgradea";
import dashboard from "../screens/dashboard";
const Routing = () => {
  return (
    <Switch>
      <Route exact path={appUrls.LOGIN} component={Login} />{" "}
      <Route exact path={appUrls.REGISTER} component={Register} />
      <Route exact path={appUrls.GRADEB} component={Gradeb} />
      <Route exact path={appUrls.GRADEA} component={Gradea} />
      <Route exact path={appUrls.GRADEC} component={Gradec} />
      <Route exact path={appUrls.TRACKSTATUS} component={Trackstatus} />
      <Route
        exact
        path={appUrls.NAVIGATIONDRAWER}
        component={Navigationdrawer}
      />
      <Route
        exact
        path={appUrls.APPLICANTDETAILS}
        component={Applicantdetails}
      />
      <Route
        exact
        path={appUrls.APPLICANTDETAILSGRADEB}
        component={Applicantdetailsgradeb}
      />
      <Route
        exact
        path={appUrls.APPLICANTDETAILSGRADEA}
        component={Applicantdetailsgradea}
      />
      <Route exact path={appUrls.DASHBOARD} component={dashboard} />
    </Switch>
  );
};
export default Routing;
