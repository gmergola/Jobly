import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginSignupForm from "./LoginSignupForm";
import ProfileForm from "./ProfileForm";
import NavBar from "./NavBar";
import TokenContext from "./TokenContext";
import JoblyApi from "./HelperApi";



//Routes handling our navigation to components
//Switch handles our routes, Nav bar shows up on each page
function Routes() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  console.log(token);

  //get the current user
  useEffect(function getUser() {
    async function fetchCurrentUser(){
      try{
        let username = window.localStorage.getItem('username');
        if(username !== null){
          let response = await JoblyApi.getCurrentUser(username);
          setCurrentUser(response);
        }
      }catch (err){
        console.log(err);
      }
    }
      fetchCurrentUser();
  }, [token]);






//pass states as provider, use context when login form updates
  return (
    <>
    <TokenContext.Provider value={{token, setToken}}>
      <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/login">
          <LoginSignupForm  />
        </Route>
        {!!token && (<><Route exact path="/companies">
          <CompanyList currentUser={currentUser}/>
        </Route>
        <Route  exact path="/companies/:name">
          <CompanyDetail currentUser={currentUser}/>
        </Route>
        <Route exact path="/jobs">
          <JobList currentUser={currentUser}/>
        </Route>
        <Route exact path="/profile">
          <ProfileForm currentUser={currentUser}/>
        </Route></>)}
        <Redirect to="/" />
      </Switch>
      </TokenContext.Provider>
    </>
  );

}

export default Routes