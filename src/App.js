import React from "react";
import "./App.scss";

import HomePage from "./Pages/Homepage/Homepage.component";
import JobBrief from "./JobBrief.js";
import "./JobStyles.css";
import Profile from "./components/Profile.js";
import CompanyDetails from "./components/CompanyDetails.js";
import NavBar from "./components/NavBar.js";
import { Switch, Route, Redirect } from "react-router-dom";
import SignInAndSignUpPage from "./Pages/Sign-in-and-sign-out-page/SignInAndSignUpPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavBar currentUser ={this.state.currentUser}/>

        <Switch>
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/"></Redirect>
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route exact path="/Home" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/companies" component={CompanyDetails} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/jobs" component={JobBrief} />
        </Switch>
      </div>
    );
  }
}

export default App;
