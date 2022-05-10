import React from "react";
import { Switch, Route } from "react-router-dom";
import { NoMatch } from "../pages/404";
import { page1Routers } from "./Routers1";
import { page2Routers } from "./Routers2";

const Router = () => {
  return (
    <Switch>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {page1Routers.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />

      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {page2Routers.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />

      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default Router;
