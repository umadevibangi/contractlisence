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
import CircularIndeterminate from "../../components/circular/CircularIndeterminate";

// import classNames from "classnames";
import CheckIcon from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import { Paper, Hidden } from "@material-ui/core";
import { Lock, Person, Email } from "@material-ui/icons";
// import Reaptcha from "reaptcha";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import loginImage from "../../assets/images//Login_Image.png";
import KpLogo from "../../assets/images/kerala_police_logo.png";
// import KpLogo from "../../src/assets/images/kerala_police_logo.png";
import image2 from "../../assets/images/image4.png";
import Bg2 from "../../assets/images/Bg2.png";
import logonew from "../../assets/images/logonew.png";
import FormHelperText from "@material-ui/core/FormHelperText";
import fire from "../../config/fire";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isOpen: false,
      showPassword: false,
      data: {
        dialogueEmail: "",
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
      rules: {
        email: {
          required: true,
        },
        password: {
          required: true,
        },
      },
    };
  }
  //   onSignUp = (event) => {
  //     this.props.navigateTo("/register");
  //   };
  handleClickShowPassword = () => {
    this.setState((state) => ({ showPassword: !state.showPassword }));
    console.log(this.state.showPassword);
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
  handleRecover = (e) => {
    fire
      .auth()
      .sendPasswordResetEmail(this.state.data.dialogueEmail)
      .then(function (user) {
        alert("Please check your email...");
      })
      .catch(function (e) {
        console.log(e);
      });
  };
  // handlealert = () => {
  //   this.setState({
  //     isOpen: true,
  //   });
  // };
  handlealert = () => {
    if (this.validate(this.state.rules, this.state.data)) {
      // this.props.signUp(data);
    }
    return false;
  };
  handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", this.state.email);
    fire
      .auth()
      .signInWithEmailAndPassword(
        this.state.data.email,
        this.state.data.password
      )

      .then((u) => {
        this.props.navigateTo("/navigationdrawer");
      })

      .catch((error) => {
        alert(error.message);
      });
    // this.props.navigateTo("/navigationdrawer");
  };
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClickClose = () => {
    this.setState({
      open: false,
    });
  };
  validate = (rules, data) => {
    const errors = validator(rules)(data);
    const hasErrors = find(errors, (error) => error !== "");

    this.setState({ errors });
    return !hasErrors;
  };
  render() {
    const { isloading, success, data, isOpen, errors } = this.state;
    const { classes } = this.props;
    // const buttonClassname = classNames({
    //   [classes.buttonSuccess]: success && data.hashcode,
    //   [classes.verifyButton]: !success,
    // });
    return (
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
            <Hidden xsDown>
              <img className={classes.leftImage} src={Bg2} alt="Bg2" />
              <img className={classes.leftImage1} src={image2} alt="image1" />
            </Hidden>
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
                User login
              </Typography>
              <br></br>
              <br></br>
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
                      // label="Username"
                      placeholder="email"
                      id="email"
                      name="email"
                      onChange={this.handleChange}
                      value={data.email ? data.email : ""}
                      // variant="outlined"
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
                      value={this.state.data.password}
                      type={this.state.showPassword ? "text" : "password"}
                      onChange={this.handleChange}
                      placeholder="password"
                      variant="outlined"
                      className={classes.TextField}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                          >
                            {this.state.showPassword ? (
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
                  <Button
                    variant="contained"
                    // color="primary"
                    disabled={this.props.isLoading ? true : false}
                    className={classes.marginTOP}
                    onClick={this.handleLogin}
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Link
                    href="/register"
                    onClick={this.onSignUp}
                    className={classes.dontHaveAccount}
                  >
                    Don't have an account? Register
                  </Link>
                </Grid>
                <br></br>
                <br></br>
                <br></br>
                <Grid item xs={12}>
                  <Link
                    onClick={this.handleClickOpen}
                    className={classes.dontHaveAccount}
                  >
                    forgot password
                  </Link>
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
          </Grid>
          <Dialog open={this.state.open}>
            <DialogTitle id="alert-dialog-title">
              <b> Recover Password</b>
              <IconButton
                key="close"
                aria-label="close"
                color="inherit"
                onClick={this.handleClickClose}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Please Enter your Email-Id here
              </DialogContentText>
              <TextField
                id="outlined-password-input"
                label="E-mail"
                name="dialogueEmail"
                onChange={this.handleChange}
                value={this.state.data.dialogueEmail}
                type="text"
                autoComplete="current-password"
                id="myfilled-name"
                variant="outlined"
              />
            </DialogContent>

            <Grid item xs={12} className={classes.DialogBox}>
              <DialogActions>
                <Grid>
                  <Button onClick={this.handleRecover}>
                    Send me reset Link
                  </Button>
                </Grid>
              </DialogActions>
            </Grid>
          </Dialog>

          {/* {this.state.isOpen ? (
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
                  Welcome
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
                    Are Applying for
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
                      GradeA
                    </Button>
                    <Button
                      style={{
                        textAlign: "center",
                        background: "#1daab1",
                        borderRadius: "4px",
                        opacity: "1",
                        marginRight: "2%",
                        color: "#ffffff",
                        fontSize: "small",
                        textTransform: "none",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // marginRight: "35%",
                      }}
                    >
                      GradeB
                    </Button>
                    <Button
                      style={{
                        marginRight: "2%",
                        textAlign: "center",
                        background: "#1daab1",
                        borderRadius: "4px",
                        opacity: "1",
                        color: "#ffffff",
                        fontSize: "small",
                        textTransform: "none",
                        // marginRight: "13%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      GradeC
                    </Button>
                  </Grid>
                </DialogActions>
                <br></br>
              </Dialog>
            </div>
          ) : null} */}
          {this.props.isLoading ? <CircularIndeterminate /> : null}
        </Grid>
      </div>
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

export const StyledLogin = withStyles(styles)(Login);

export default connect(mapStateToProps, mapDispatchToProps)(StyledLogin);
