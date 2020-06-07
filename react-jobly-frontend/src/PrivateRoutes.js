import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import ProfileForm from "./ProfileForm";

/**PrivateRoutes: Renders routes
 * that can only be seen when user is logged in
 * when token in in local ctorage
 */
function PrivateRoutes({ currentUser }) {
  return (
    <>
      <Switch>
        <Route exact path="/companies">
          <CompanyList currentUser={currentUser} />
        </Route>
        <Route exact path="/companies/:name">
          <CompanyDetail currentUser={currentUser} />
        </Route>
        <Route exact path="/jobs">
          <JobList currentUser={currentUser} />
        </Route>
        <Route exact path="/profile">
          <ProfileForm currentUser={currentUser} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default PrivateRoutes;