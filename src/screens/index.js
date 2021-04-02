import React, { Component } from "react";
import Login from "../screens/login";
import NavigationDrawer from "../components/navigationDrawer";
import fire from "../config/fireBase";
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authlistener();
  }
  authlistener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return <div>{this.state.user ? <NavigationDrawer /> : <Login />}</div>;
  }
}
export default LandingPage;
