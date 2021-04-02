import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { find } from "lodash";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Link from "@material-ui/core/Link";
import styles from "./styles";
import validator from "../../services/validator/";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import logonew from "../../assets/images/logonew.png";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import fire from "../../config/fire";

import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import Fab from "@material-ui/core/Fab";
// import UltsLogo from "../../assets/images/ults-logo.png";
import appUrls from "../../config/appUrls";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import getUsertype from "../../services/getUsertype";
import CircularProgress from "@material-ui/core/CircularProgress";
// import classNames from "classnames";
import CheckIcon from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import { Paper, Hidden } from "@material-ui/core";
import { Lock, Person, Email } from "@material-ui/icons";
// import Reaptcha from "reaptcha";
import loginImage from "../../assets/images//Login_Image.png";
import KpLogo from "../../assets/images/kerala_police_logo.png";
// import KpLogo from "../../src/assets/images/kerala_police_logo.png";
import UltsLogo from "../../assets/images/ults-logo2.png";
import FormHelperText from "@material-ui/core/FormHelperText";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Bg2 from "../../assets/images/Bg2.png";
import password1 from "../../assets/images/password1.png";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      showpassword: false,
      showpassword1: false,
      data: {
        phonenumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      errors: {
        phonenumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      rules: {
        phonenumber: {
          required: true,
        },
        email: {
          required: true,
        },
        password: {
          required: true,
        },
        ConfirmPassword: {
          required: true,
        },
      },
    };
  }
  //   onSignUp = (event) => {
  //     this.props.navigateTo("/register");
  //   };
  validate = (rules, data) => {
    const errors = validator(rules)(data);
    const hasErrors = find(errors, (error) => error !== "");

    this.setState({ errors });
    return !hasErrors;
  };

  // handlealert = () => {
  //   if (this.state.data.password != this.state.data.confirmPassword) {
  //     console.log("active step");

  //     this.setState({
  //       errors: {
  //         ...this.state.errors,
  //         confirmPassword: "Passwords do not match",
  //       },
  //     });
  //     console.log("active step1");
  //     return false;
  //   } else if (this.validate(this.state.rules, this.state.data)) {
  //     // this.props.signUp(data);
  //     this.setState((state) => ({
  //       ...this.state,
  //       isOpen: true,
  //     }));
  //   }
  // };
  handleregister = (e) => {
    if (this.state.data.password != this.state.data.confirmPassword) {
      this.setState({
        errors: {
          ...this.state.errors,
          confirmPassword: "Passwords do not match",
        },
      });
      return false;
    }
    var error_exist = false;
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(
        this.state.data.email,
        this.state.data.password
      )
      .catch((error) => {
        alert(error.message);
        error_exist = true;
        if (error_exist == false) {
          this.props.navigateTo("/login");
        }
        this.props.navigateTo("/login");
      });
  };
  onForwardHandler = () => {
    this.props.navigateTo("/login");
  };
  handleClickShowpassword1 = () => {
    this.setState((state) => ({ showpassword1: !state.showpassword1 }));
  };
  handleClickShowpassword = () => {
    this.setState((state) => ({ showpassword: !state.showpassword }));
  };
  handleChange = (event) => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [event.target.name]: event.target.value },
      errors: {
        ...this.state.errors,
        [event.target.name]: "",
      },
    });
  };

  render() {
    const { loading, success, data, isOpen, errors } = this.state;
    const { classes } = this.props;
    // const buttonClassname = classNames({
    //   [classes.buttonSuccess]: success && data.hashcode,
    //   [classes.verifyButton]: !success,
    // });
    return (
      <>
        <div className={classes.root}>
          <Grid container className={classes.loginPage}>
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.leftContent}
              item
              xs={12}
              md={6}
            >
              <img className={classes.leftImage} src={Bg2} alt="Bg2" />
              <img
                className={classes.leftImage1}
                src={password1}
                alt="password1"
              />
            </Grid>
            <Grid
              container
              justify="center"
              alignItems="center"
              xs={12}
              md={6}
              className={classes.rightContent}
            >
              <Grid item xs={10} md={6}>
                <img
                  className={classes.keralaPoliceLogo}
                  src={logonew}
                  alt="logonew"
                />

                <Typography color="inherit" variant="h4" className={classes.h1}>
                  Create an Account
                </Typography>
                {/* <Typography color="inherit" variant="h4" className={classes.h2}>
                  Create an Account
                </Typography> */}
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <OutlinedInput
                        // id="outlined-basic"
                        // label="email"
                        placeholder="Phonenumber"
                        id="phonenumber"
                        name="phonenumber"
                        onChange={this.handleChange}
                        // variant="outlined"
                        error={errors.phonenumber ? true : false}
                        value={this.state.data.phonenumber}
                        className={classes.TextField}
                        startAdornment={
                          <InputAdornment position="start">
                            <IconButton>
                              <PhoneAndroidIcon />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      {errors.phonenumber ? (
                        <FormHelperText className={classes.error}>
                          {errors.phonenumber}
                        </FormHelperText>
                      ) : (
                        ""
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <OutlinedInput
                        // id="outlined-basic"
                        // label="email"
                        placeholder="email"
                        id="email"
                        name="email"
                        onChange={this.handleChange}
                        value={data.email ? data.email : ""}
                        // variant="outlined"
                        error={errors.email ? true : false}
                        value={this.state.data.email}
                        className={classes.TextField}
                        startAdornment={
                          <InputAdornment position="start">
                            <IconButton>
                              <Email />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      {errors.email ? (
                        <FormHelperText className={classes.error}>
                          {errors.email}
                        </FormHelperText>
                      ) : (
                        ""
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <OutlinedInput
                        required
                        maxLength={30}
                        id="password"
                        type="password"
                        name="password"
                        id="adornment-password"
                        error={errors.password ? true : false}
                        value={this.state.data.password}
                        type={this.state.showpassword ? "text" : "password"}
                        // id="outlined-basic"
                        // label="password"
                        onChange={this.handleChange}
                        placeholder="password"
                        variant="outlined"
                        className={classes.TextField}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="Toggle password visibility"
                              onClick={this.handleClickShowpassword}
                            >
                              {this.state.showpassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        startAdornment={
                          <InputAdornment position="start">
                            <IconButton>
                              <Lock />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      {errors.password ? (
                        <FormHelperText className={classes.error}>
                          {errors.password}
                        </FormHelperText>
                      ) : (
                        ""
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <OutlinedInput
                        required
                        maxLength={30}
                        id="confirmPassword"
                        type="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        error={errors.confirmPassword ? true : false}
                        type={this.state.showpassword1 ? "text" : "password"}
                        onChange={this.handleChange}
                        placeholder="confirm password"
                        variant="outlined"
                        className={classes.TextField}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="Toggle password visibility"
                              onClick={this.handleClickShowpassword1}
                            >
                              {this.state.showpassword1 ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        startAdornment={
                          <InputAdornment position="start">
                            <IconButton>
                              <Lock />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      {errors.confirmPassword ? (
                        <FormHelperText className={classes.error}>
                          {errors.confirmPassword}
                        </FormHelperText>
                      ) : (
                        ""
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      className={classes.marginTOP}
                      onClick={this.handleregister}
                    >
                      Register
                    </Button>
                  </Grid>
                </Grid>

                {/* <div className={classes.powerdByText}>
                Powered By
                <img
                  src={UltsLogo}
                  className={classes.ultsLogo}
                  alt="Kerala Police Logo"
                />
              </div> */}
              </Grid>
              {this.state.isOpen ? (
                <div>
                  <Dialog
                    open={isOpen}
                    aria-labelledby="alert-dialog-title"
                    disableBackdropClick="true"
                  >
                    <br></br>
                    <CheckCircleOutlineIcon
                      style={{
                        textAlign: "center",
                        marginLeft: "45%",
                        height: 40,
                        width: "10%",
                        color: "#65BC6B",
                      }}
                    />
                    <DialogTitle
                      style={{
                        textAlign: "center",
                        // lineHeight: 0.6,
                        fontWeight: "900",
                        fontSize: "bold",
                        color: "#646D7E",

                        marginBottom: "-3%",
                      }}
                    >
                      Thank you
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText
                        style={{
                          textAlign: "center",
                          fontWeight: "700",
                          fontSize: "bold",
                          color: "#646D7E",
                        }}
                      >
                        Your details has been submitted successfully
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        style={{
                          textAlign: "center",

                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          onClick={this.positiveAction}
                          href="/login"
                          style={{
                            textAlign: "center",
                            background: "#1daab1",
                            borderRadius: "4px",
                            opacity: "1",
                            color: "#ffffff",
                            fontSize: "small",
                            textTransform: "none",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: "2%",
                          }}
                        >
                          Login
                        </Button>
                      </Grid>
                    </DialogActions>
                    <br></br>
                  </Dialog>
                </div>
              ) : null}
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    navigateTo: (url) => dispatch(push(url)),
  };
}

export const StyledRegister = withStyles(styles)(Register);

export default connect(mapStateToProps, mapDispatchToProps)(StyledRegister);
