import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { find } from "lodash";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Link from "@material-ui/core/Link";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import validator from "../../services/validator";
// import CircularIndeterminate from "../../components/circular/CircularIndeterminate";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import logonew from "../../assets/images/logonew.png";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { styles } from "./styles";
import Pdf from "../../static/7_Application_for_Electrical_Contractor_Licence_Class_A (2).pdf";

import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
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
import { Paper, Hidden, Divider } from "@material-ui/core";
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
import pending from "../../assets/images/Pending.svg";
import password1 from "../../assets/images/password1.png";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
class Applicantdetailsgradea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activepage: 0,
      rows: [{}],
      isOpen: false,
      isOpen1: false,
      showpassword: false,
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

  handlenext = () => {
    if (this.state.activepage === 0) {
      this.setState((state) => ({
        ...this.state,

        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 1) {
      this.setState((state) => ({
        ...this.state,

        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 2) {
      this.setState((state) => ({
        ...this.state,

        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 3) {
      this.setState((state) => ({
        ...this.state,

        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 4) {
      this.setState((state) => ({
        ...this.state,

        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 5) {
      this.setState((state) => ({
        ...this.state,

        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 6) {
      this.setState((state) => ({
        ...this.state,

        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 7) {
      this.setState((state) => ({
        ...this.state,

        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 8) {
      this.setState((state) => ({
        ...this.state,

        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 9) {
      this.setState((state) => ({
        ...this.state,

        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 10) {
      this.setState((state) => ({
        ...this.state,

        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 11) {
      this.setState((state) => ({
        ...this.state,

        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 12) {
      this.setState((state) => ({
        ...this.state,

        activepage: state.activepage + 1,
      }));
    }
    // this.setState((state) => ({
    //   ...this.state,
    //   isOpen: true,
    // }));
  };
  handlealert = () => {
    this.setState((state) => ({
      ...this.state,
      isOpen: true,
    }));
  };
  handlealert1 = () => {
    this.setState((state) => ({
      ...this.state,
      isOpen1: true,
    }));
  };
  onForwardHandler = () => {
    this.props.navigateTo("/login");
  };
  handlearrow = () => {
    this.props.navigateTo("/dashboard");
  };
  negativeAction = () => {
    this.props.navigateTo("/dashboard");
  };
  positiveAction = () => {
    this.props.navigateTo("/applicantdetailsgradeb");
  };
  negativeAction2 = () => {
    this.props.navigateTo("/dashboard");
  };
  positiveAction2 = () => {
    this.props.navigateTo("/applicantdetails");
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
    const { loading, success, data, isOpen, isOpen1, errors } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.dashboardContent}>
        {/* <Grid
          item
          xs={12}
          md={12}
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <Button
            variant="outlined"
            className={classes.buttonprev}
            onClick={this.handlealert1}
          >
            Reject
          </Button>
          <Button
            variant="outlined"
            className={classes.buttonnext}
            onClick={this.handlealert}
          >
            Approve
          </Button>
        </Grid> */}
        <Grid item xs={12} md={12}>
          <Typography className={classes.h6H} variant="h6">
            <ArrowBackIcon
              className={classes.arrow}
              onClick={this.handlearrow}
            />
            <span> </span>
            Applicant details
          </Typography>
        </Grid>

        <div className={classes.cctnResults}>
          <Grid xs={12} md={12}>
            <Paper boxShadow={3}>
              <div className={classes.cctnsearchBox}>
                <Grid container direction="row" spacing={3}>
                  <Grid item xs={12} md={2}>
                    <Avatar
                      src={this.state.imageSrc}
                      className={classes.avatarStyle}
                    >
                      K
                    </Avatar>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography
                      style={{
                        color: "#646d7e",
                        opacity: "1",
                        fontWeight: "600",
                        fontSize: "small",
                        marginTop: "10%",
                        color: "#242021",
                      }}
                    >
                      kumarsai
                    </Typography>
                    <Typography
                      style={{
                        color: "#646d7e",
                        opacity: "1",
                        fontWeight: "600",
                        fontSize: "small",
                        marginTop: "2%",
                      }}
                    >
                      Email :{" "}
                      <span
                        style={{
                          opacity: "1",
                          fontWeight: "600",
                          fontSize: "small",
                          marginTop: "10%",
                          color: "#242021",
                        }}
                      >
                        kumarsai@gmail.com
                      </span>
                    </Typography>
                    <Typography
                      style={{
                        color: "#646d7e",
                        opacity: "1",
                        fontWeight: "600",
                        fontSize: "small",
                        marginTop: "1%",
                      }}
                    >
                      Contact No :
                      <span
                        style={{
                          opacity: "1",
                          fontWeight: "600",
                          fontSize: "small",
                          marginTop: "10%",
                          color: "#242021",
                        }}
                      >
                        {" "}
                        6302217122{" "}
                      </span>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    alignItems="flex-end"
                    justifyContent="flex-end"
                  >
                    <Typography
                      style={{
                        color: "#646d7e",
                        opacity: "1",
                        fontWeight: "600",
                        fontSize: "normal",
                        color: "#242021",
                        float: "right",
                        marginLeft: "2%",
                        marginTop: "10%",
                      }}
                    >
                      Pending
                    </Typography>
                    <img
                      className={classes.PendingImage}
                      src={pending}
                      alt="pending"
                    />
                  </Grid>
                </Grid>
                <br></br>
                <br></br>
                <Divider variant="middle" />
                <br></br>
                <br></br>
                {this.state.activepage == 0 && (
                  <div className={classes.cctnResults}>
                    <Grid xs={12} md={12} className={classes.ApproveReject1}>
                      <Paper boxShadow={3}>
                        <div className={classes.cctnsearchBox}>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                1 . Electrical ContratorsName :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                kumarsai
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                2 . BusinessPincode :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                515001
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                3 . Business Email :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                kumarsai@gmail.com
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />
                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                4 . Business Phonenumber:
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                6302217122
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                5 . Whether the applicant is a company
                                registered under the Companies Act or
                                constituted under any other enactment.
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                6 . If so furnish details and documents to prove
                                the status of the firm:
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Button
                                onClick={this.ViewPfd}
                                href={Pdf}
                                target="_blank"
                                style={{
                                  textAlign: "center",

                                  borderRadius: "4px",
                                  opacity: "1",

                                  fontSize: "small",
                                  textTransform: "none",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                className={classes.pdfbutton}
                              >
                                View Document
                              </Button>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                7 . Whether the company has a registered office
                                in Kerala :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                8 .Full name and house address of Proprietor or
                                partners :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Mohhomed Gouse ,D/no: 28/408 , Sai
                                nagar,Anantapur
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                9 . Full name of Agent or Manager:
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Rakesh Sharma
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />
                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                10 . Whether the applicant is a manufacturing
                                firm or production unit.:
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                production unit
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                11 . Name of the person who will sign documents
                                on behalf of the contractor :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Prathap Kumar
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                12 . Whether a contractor’s licence has been
                                previously granted in the same name,
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                No
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                13 . Whether a contractor’s Licence has been
                                issued under this name by any other Licensing
                                Board, if so, please :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                14 . Name of issuing Authority:
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Naveen Kumar
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                15 .Date of issue:
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                10/04/2019
                              </Typography>
                            </Grid>

                            <br></br>
                            <Divider variant="middle" />

                            <br></br>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                16 . Date of expiry of Licence:
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                20/10/2023
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                17 . Details of works permitted to be
                                undertaken:
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Good
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                18 . Whether the staff indicated under column 12
                                are exclusively earmarked for the work under the
                                Licensing Board rules and Regulation 29 of the
                                Central Electricity Authority (Measures Relating
                                to Safety and Electric Supply) Regulations,
                                2010.:
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            md={12}
                            alignItems="flex-end"
                            justifyContent="flex-end"
                          >
                            <Button
                              variant="outlined"
                              className={classes.buttonApprove}
                              onClick={this.handlenext}
                            >
                              next
                            </Button>
                          </Grid>
                        </div>
                      </Paper>
                    </Grid>
                  </div>
                )}
                {this.state.activepage == 1 && (
                  <div className={classes.cctnResults}>
                    <Grid xs={12} md={12} className={classes.ApproveReject1}>
                      <Paper boxShadow={3}>
                        <div className={classes.cctnsearchBox}>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={12}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                19 .Name of all persons employed in full time
                                basis having technical qualifications and
                                experience that are approved by the Board for
                                the grant of Grade ‘B’ licence.
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Table
                                aria-label="simple table"
                                className={this.props.classes.table}
                              >
                                <TableHead
                                  className={this.props.classes.tablehead}
                                >
                                  <TableRow>
                                    <TableCell
                                      className={this.props.classes.cell1}
                                      align="left"
                                      style={{ color: "white" }}
                                    >
                                      Sl. No.
                                    </TableCell>

                                    <TableCell
                                      align="left"
                                      style={{ color: "white" }}
                                    >
                                      Name of Person
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Qualification
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Class of certificate and permit with their
                                      number and date issued by the Board
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Whether declarations from them in the form
                                      appended have been attached
                                    </TableCell>
                                  </TableRow>
                                </TableHead>

                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        Grade B , 12345678 ,10/12/2019
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        Yes
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>

                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        Grade B , 12345678 ,10/12/2019
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        Yes
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>

                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        Grade B , 12345678 ,10/12/2019
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        Yes
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>

                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        Grade B , 12345678 ,10/12/2019
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        Yes
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </Grid>
                          </Grid>
                        </div>
                      </Paper>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        alignItems="flex-end"
                        justifyContent="flex-end"
                      >
                        <Button
                          variant="outlined"
                          className={classes.buttonnext}
                          onClick={this.handlenext}
                        >
                          next
                        </Button>
                        <Button
                          variant="outlined"
                          className={classes.buttonprev}
                          onClick={this.handleprev}
                        >
                          previous
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                )}
                {this.state.activepage == 2 && (
                  <div className={classes.cctnResults}>
                    <Grid xs={12} md={12} className={classes.ApproveReject1}>
                      <Paper boxShadow={3}>
                        <div className={classes.cctnsearchBox}>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                20 . Declaration
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Aggreed
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                21 .Place of the Applicant
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Anantapur
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                22 . Applied Date :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                10/03/2020
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                23 .Challan Ammount :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Rs.200/-
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                24 .Challan Number :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                1234567890
                              </Typography>
                            </Grid>

                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                25 . Applied Date :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                10/03/2020
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                23 .Challan Ammount :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Rs.200/-
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                24 .Challan Number :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                1234567890
                              </Typography>
                            </Grid>

                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                25 . Applied Date :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                10/03/2020
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                26 . Applied Date :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                17/04/2020
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                27 . Name of Treasury:
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Kazhakkoottam
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                28 .Two Copies of passport size photograph of
                                applicant duly attested on back as follows:
                                “This is the photograph of Shri /
                                Smt…………………………attested.”
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Button
                                onClick={this.ViewPfd}
                                href={Pdf}
                                target="_blank"
                                style={{
                                  textAlign: "center",

                                  borderRadius: "4px",
                                  opacity: "1",

                                  fontSize: "small",
                                  textTransform: "none",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                className={classes.pdfbutton}
                              >
                                View Document
                              </Button>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                29 . Two specimen signature duly attested by a
                                Gazetted Officer :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Button
                                onClick={this.ViewPfd}
                                href={Pdf}
                                target="_blank"
                                style={{
                                  textAlign: "center",

                                  borderRadius: "4px",
                                  opacity: "1",

                                  fontSize: "small",
                                  textTransform: "none",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                className={classes.pdfbutton}
                              >
                                View Document
                              </Button>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                30 . Original permits of Wireman & Supervisors
                                Permit Number:
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Button
                                onClick={this.ViewPfd}
                                href={Pdf}
                                target="_blank"
                                style={{
                                  textAlign: "center",

                                  borderRadius: "4px",
                                  opacity: "1",

                                  fontSize: "small",
                                  textTransform: "none",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                className={classes.pdfbutton}
                              >
                                View Document
                              </Button>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                31 . Properly filled up declaration of
                                supervisors and wireman duly attested by the
                                District Electrical Inspector
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Button
                                onClick={this.ViewPfd}
                                href={Pdf}
                                target="_blank"
                                style={{
                                  textAlign: "center",

                                  borderRadius: "4px",
                                  opacity: "1",

                                  fontSize: "small",
                                  textTransform: "none",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                className={classes.pdfbutton}
                              >
                                View Document
                              </Button>
                            </Grid>
                          </Grid>
                        </div>
                      </Paper>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        alignItems="flex-end"
                        justifyContent="flex-end"
                      >
                        <Button
                          variant="outlined"
                          className={classes.buttonnext}
                          onClick={this.handlenext}
                        >
                          next
                        </Button>
                        <Button
                          variant="outlined"
                          className={classes.buttonprev}
                          onClick={this.handleprev}
                        >
                          previous
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                )}
                {this.state.activepage == 3 && (
                  <div className={classes.cctnResults}>
                    <Grid xs={12} md={12} className={classes.ApproveReject1}>
                      <Paper boxShadow={3}>
                        <div className={classes.cctnsearchBox}>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={12}>
                              <Typography
                                style={{
                                  fontSize: "1.05rem",
                                  letterSpacing: "0px",
                                  color: "#1daab1",
                                  opacity: "1",
                                  marginLeft: "-4px",
                                  fontWeight: "500",
                                  textDecorationLine: "underline",
                                }}
                              >
                                {" "}
                                Check List for the Application for Electrical
                                Contractors Licence Grade ‘A’
                              </Typography>
                            </Grid>

                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                1. (a) . Name of the Applicant
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Mohammed Gouse
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                1 (b) Address of the Applicant
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                28/408 ,old town, Anantapur
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                1 (c) Pin code
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                515001
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                1 (d) Email
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Gouse@gmail.com
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                1 (e) . Address of Registered Office in Kerala
                                State
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                O/o Inspector General of Registration,
                                Vanchiyoor, Tvpm
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                1 (f) . Name of authorized person signing
                                documents
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Rakesh Sharma
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={12}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                2 . Style of the company
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (a) Proprietary concern / partnership company
                                registered under companies Act
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                kerala
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (b) Documents to be enclosed to prove the status
                                of the firms
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Button
                                onClick={this.ViewPfd}
                                href={Pdf}
                                target="_blank"
                                style={{
                                  textAlign: "center",

                                  borderRadius: "4px",
                                  opacity: "1",

                                  fontSize: "small",
                                  textTransform: "none",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                className={classes.pdfbutton}
                              >
                                View Document
                              </Button>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (c) Documents to be enclosed Statement of
                                Accounts for last three year certified by
                                Chartered Accountant /IT statement
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Button
                                onClick={this.ViewPfd}
                                href={Pdf}
                                target="_blank"
                                style={{
                                  textAlign: "center",

                                  borderRadius: "4px",
                                  opacity: "1",

                                  fontSize: "small",
                                  textTransform: "none",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                className={classes.pdfbutton}
                              >
                                View Document
                              </Button>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                3 . Date of application
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                10/04/2020
                              </Typography>
                            </Grid>
                          </Grid>

                          <Grid
                            item
                            xs={12}
                            md={12}
                            alignItems="flex-end"
                            justifyContent="flex-end"
                          >
                            <Button
                              variant="outlined"
                              className={classes.buttonApprove}
                              onClick={this.handlenext}
                            >
                              next
                            </Button>
                            <Button
                              variant="outlined"
                              className={classes.buttonReject}
                              onClick={this.handleprev}
                            >
                              previous
                            </Button>
                          </Grid>
                        </div>
                      </Paper>
                    </Grid>
                  </div>
                )}
                {this.state.activepage == 4 && (
                  <div className={classes.cctnResults}>
                    <Grid xs={12} md={12} className={classes.ApproveReject1}>
                      <Paper boxShadow={3}>
                        <div className={classes.cctnsearchBox}>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={12}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                4 . Details of supervisory staff
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Table
                                aria-label="simple table"
                                className={this.props.classes.table}
                              >
                                <TableHead
                                  className={this.props.classes.tablehead}
                                >
                                  <TableRow>
                                    <TableCell
                                      className={this.props.classes.cell1}
                                      align="left"
                                      style={{ color: "white" }}
                                    >
                                      Sl. No.
                                    </TableCell>

                                    <TableCell
                                      align="left"
                                      style={{ color: "white" }}
                                    >
                                      Name of Person
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Qualification
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Experience Details Years
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Supervisory Permits Number
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Supervisory Permits Date
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Supervisory Permits Validity
                                    </TableCell>
                                  </TableRow>
                                </TableHead>

                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        2 Years
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>

                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        2 Years
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        2 Years
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        2 Years
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        2 Years
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        2 Years
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        2 Years
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </Grid>
                          </Grid>
                        </div>
                      </Paper>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        alignItems="flex-end"
                        justifyContent="flex-end"
                      >
                        <Button
                          variant="outlined"
                          className={classes.buttonnext}
                          onClick={this.handlenext}
                        >
                          next
                        </Button>
                        <Button
                          variant="outlined"
                          className={classes.buttonprev}
                          onClick={this.handleprev}
                        >
                          previous
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                )}
                {this.state.activepage == 5 && (
                  <div className={classes.cctnResults}>
                    <Grid xs={12} md={12} className={classes.ApproveReject1}>
                      <Paper boxShadow={3}>
                        <div className={classes.cctnsearchBox}>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={12}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                4 . Details of Wiremen employed
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Table
                                aria-label="simple table"
                                className={this.props.classes.table}
                              >
                                <TableHead
                                  className={this.props.classes.tablehead}
                                >
                                  <TableRow>
                                    <TableCell
                                      className={this.props.classes.cell1}
                                      align="left"
                                      style={{ color: "white" }}
                                    >
                                      Sl. No.
                                    </TableCell>

                                    <TableCell
                                      align="left"
                                      style={{ color: "white" }}
                                    >
                                      Name of Person
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Qualification
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Experience Details Years
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Wireman Permit Number
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Wireman Permit Date
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Wireman Permit Validity
                                    </TableCell>
                                  </TableRow>
                                </TableHead>

                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        2 Years
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>

                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        2 Years
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        2 Years
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        2 Years
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        2 Years
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        2 Years
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Ravi kumar
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Btech
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        2 Years
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </Grid>
                          </Grid>
                        </div>
                      </Paper>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        alignItems="flex-end"
                        justifyContent="flex-end"
                      >
                        <Button
                          variant="outlined"
                          className={classes.buttonnext}
                          onClick={this.handlenext}
                        >
                          next
                        </Button>
                        <Button
                          variant="outlined"
                          className={classes.buttonprev}
                          onClick={this.handleprev}
                        >
                          previous
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                )}
                {this.state.activepage == 6 && (
                  <div className={classes.cctnResults}>
                    <Grid xs={12} md={12} className={classes.ApproveReject1}>
                      <Paper boxShadow={3}>
                        <div className={classes.cctnsearchBox}>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={12}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                7 . Details of Licence already possessed in
                                Kerala State
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Table
                                aria-label="simple table"
                                className={this.props.classes.table}
                              >
                                <TableHead
                                  className={this.props.classes.tablehead}
                                >
                                  <TableRow>
                                    <TableCell
                                      className={this.props.classes.cell1}
                                      align="left"
                                      style={{ color: "white" }}
                                    >
                                      Sl. No.
                                    </TableCell>

                                    <TableCell
                                      align="left"
                                      style={{ color: "white" }}
                                    >
                                      Name and style of the firm
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Scope
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Number
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Date of issue
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Validity
                                    </TableCell>
                                  </TableRow>
                                </TableHead>

                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Volkswagen
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        specialised degree
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>

                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Volkswagen
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        specialised degree
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Volkswagen
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        specialised degree
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Volkswagen
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        specialised degree
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Volkswagen
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        specialised degree
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Volkswagen
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        specialised degree
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Volkswagen
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        specialised degree
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </Grid>
                          </Grid>
                        </div>
                      </Paper>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        alignItems="flex-end"
                        justifyContent="flex-end"
                      >
                        <Button
                          variant="outlined"
                          className={classes.buttonnext}
                          onClick={this.handlenext}
                        >
                          next
                        </Button>
                        <Button
                          variant="outlined"
                          className={classes.buttonprev}
                          onClick={this.handleprev}
                        >
                          previous
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                )}
                {this.state.activepage == 7 && (
                  <div className={classes.cctnResults}>
                    <Grid xs={12} md={12} className={classes.ApproveReject1}>
                      <Paper boxShadow={3}>
                        <div className={classes.cctnsearchBox}>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={12}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                8 . Details of licence possessed in other States
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Table
                                aria-label="simple table"
                                className={this.props.classes.table}
                              >
                                <TableHead
                                  className={this.props.classes.tablehead}
                                >
                                  <TableRow>
                                    <TableCell
                                      className={this.props.classes.cell1}
                                      align="left"
                                      style={{ color: "white" }}
                                    >
                                      Sl. No.
                                    </TableCell>

                                    <TableCell
                                      align="left"
                                      style={{ color: "white" }}
                                    >
                                      Name and style of the firm
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Scope
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Number
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Date of issue
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      style={{ color: "white" }}
                                    >
                                      Validity
                                    </TableCell>
                                  </TableRow>
                                </TableHead>

                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Volkswagen
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        specialised degree
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>

                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Volkswagen
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        specialised degree
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Volkswagen
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        specialised degree
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Volkswagen
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        specialised degree
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Volkswagen
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        specialised degree
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Volkswagen
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        specialised degree
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                                <TableBody>
                                  {/* {console.log(this.state.rows)} */}
                                  {this.state.rows.map((item, idx) => (
                                    <TableRow>
                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        1
                                      </TableCell>

                                      <TableCell
                                        align="left"
                                        style={{ color: "grey" }}
                                      >
                                        Volkswagen
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        specialised degree
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        1234567890
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/04/2020
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        style={{ color: "grey" }}
                                      >
                                        10/09/2030
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </Grid>
                          </Grid>
                        </div>
                      </Paper>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        alignItems="flex-end"
                        justifyContent="flex-end"
                      >
                        <Button
                          variant="outlined"
                          className={classes.buttonnext}
                          onClick={this.handlenext}
                        >
                          next
                        </Button>
                        <Button
                          variant="outlined"
                          className={classes.buttonprev}
                          onClick={this.handleprev}
                        >
                          previous
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                )}
                {this.state.activepage == 8 && (
                  <div className={classes.cctnResults}>
                    <Grid xs={12} md={12} className={classes.ApproveReject1}>
                      <Paper boxShadow={3}>
                        <div className={classes.cctnsearchBox}>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={12}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                9 . Drawing Office facilities
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                1 . Drawing code and accessories, computer with
                                CAD :
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                2 . Facility for taking ammonia prints and blue
                                prints, PrinterA3/ Plotter:
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                3 . Typewriter/ Computer:
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />
                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                4 . Telephone / Fax / Email:
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>

                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={12}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                11 . Library
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (a) The Central Electricity Authority (Measures
                                Relating to Safety and Electric supply)
                                Regulations, 2010
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (b) The Electricity Act, 2003
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (c) Kerala State Electricity Licensing Board
                                Rules
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />
                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (d) National Electrical Code 2011,
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (e) Electrical Inspectorate standards
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                No
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (f) Standard published by Central Board of
                                Irrigation & Power/CEA
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                No
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (g) Safety Manual
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (h) Kerala Lift and Escalators Act, 2013 and the
                                rules there under
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                No
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (i) Kerala Electricity Supply Code, 2014
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                No
                              </Typography>
                            </Grid>

                            <br></br>
                            <Divider variant="middle" />

                            <br></br>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (j) Kerala Cinema (Regulation ) Rules, 1988
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (k) Central Electricity Authority (Technical
                                Standard for Construction of Electrical plants
                                and Electrical Lines) Regulation, 2010
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                No
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (l) All-important BIS/IEC specifications as
                                directed by the Licensing Board and the
                                Electrical Inspectorate from time to time.
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>
                        </div>
                      </Paper>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        alignItems="flex-end"
                        justifyContent="flex-end"
                      >
                        <Button
                          variant="outlined"
                          className={classes.buttonnext}
                          onClick={this.handlenext}
                        >
                          next
                        </Button>
                        <Button
                          variant="outlined"
                          className={classes.buttonprev}
                          onClick={this.handleprev}
                        >
                          previous
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                )}
                {this.state.activepage == 9 && (
                  <div className={classes.cctnResults}>
                    <Grid xs={12} md={12} className={classes.ApproveReject1}>
                      <Paper boxShadow={3}>
                        <div className={classes.cctnsearchBox}>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={12}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                12 . Testing Instruments:
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (a) Insulation Tester (500 V)
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (b) Insulation Tester (1000 V)
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (c) Insulation Tester (5 kV Motorized / battery
                                operated)
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>

                          <br></br>
                          <Divider variant="middle" />

                          <br></br>

                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (d) Earth Tester with testing kit (0-10 / 100
                                Ohms with selector switch)
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (e) Tong Tester (with different ranges to
                                measure from 10 A onwards with selector switch)
                                0-800A
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (f) Voltage range (0-300V / 600V)
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />
                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (g) Phase Sequence Tester
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (h) Multimeter (Digital Multi Meter to measure
                                A.C, D.C)
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                No
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (i) Frequency Meter 45 to 55 Hz
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                No
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (j) Portable PF Meter- 5A, 240V, A/C
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>
                        </div>
                      </Paper>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        alignItems="flex-end"
                        justifyContent="flex-end"
                      >
                        <Button
                          variant="outlined"
                          className={classes.buttonnext}
                          onClick={this.handlenext}
                        >
                          next
                        </Button>
                        <Button
                          variant="outlined"
                          className={classes.buttonprev}
                          onClick={this.handleprev}
                        >
                          previous
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                )}
                {this.state.activepage == 10 && (
                  <div className={classes.cctnResults}>
                    <Grid xs={12} md={12} className={classes.ApproveReject1}>
                      <Paper boxShadow={3}>
                        <div className={classes.cctnsearchBox}>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={12}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                13 . Tools and Equipments:
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (a) Spanner Double set
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (b) Spanner Box
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (c) Spanner Ring
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>

                          <br></br>
                          <Divider variant="middle" />

                          <br></br>

                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (d) Spanner Adjustable Type
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (e) Allen Key set
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (f) Cutting pliers (Insulated)
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />
                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (g) Micrometer / Screw gauge
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (h) Nose Pliers
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                No
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (i) Measuring tape 15 M
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                No
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (j) Measuring tape 50 M
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>

                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (k) Portable compressor with spray gun
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (l) Blower
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (m) Screw Drivers of all sizes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (m) Screw Drivers of all sizes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (n) Portable welding set (100 A)
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (O) Portable welding set (100 A)
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (p) Crimping tools with dye set: 400 sq.mm (Hand
                                operated)
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (q) Crimping tools with dye set: 400 sq.mm.
                                (Hydraulic)
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (r) Rollers for cable laying
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (s) Portable grinder
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (t) Safety belt
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (u) Rubber Gloves (Electrical Grade)
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (v) Portable drill(Heavy Duty)
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                {" "}
                                (w) Portable drill(Light Duty)(t) Safety belt
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                (x) Tools for pipe threading & jointing
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                {" "}
                                (y) Chipping tools, Chisels etc.
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                {" "}
                                (z) A cable jointing facilities, Bending m/c
                                etc.
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>
                        </div>
                      </Paper>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        alignItems="flex-end"
                        justifyContent="flex-end"
                      >
                        <Button
                          variant="outlined"
                          className={classes.buttonnext}
                          onClick={this.handlenext}
                        >
                          next
                        </Button>
                        <Button
                          variant="outlined"
                          className={classes.buttonprev}
                          onClick={this.handleprev}
                        >
                          previous
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                )}
                {this.state.activepage == 11 && (
                  <div className={classes.cctnResults}>
                    <Grid xs={12} md={12} className={classes.ApproveReject1}>
                      <Paper boxShadow={3}>
                        <div className={classes.cctnsearchBox}>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={12}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                14 . The following additional facilities also
                                have to be provided for E.H.T. Contractor’s
                                Licensee:
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                1 . Facility for handling heavy machineries
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                yes
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                2 . Fabrication facilities
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  color: "#242021",
                                  float: "left",
                                  marginLeft: "1%",
                                }}
                              >
                                No
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                3 . Oil filtering and testing facilities
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                4 . Relay testing kit
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                No
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                5 . High Voltage Testing facilities
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                  float: "left",
                                  marginLeft: "1%",
                                  color: "#242021",
                                }}
                              >
                                Yes
                              </Typography>
                            </Grid>

                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                15 . Major works carried out in Kerala(List with
                                details of installation, scheme approval
                                obtained from Electrical Inspectorate, etc.)
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Button
                                onClick={this.ViewPfd}
                                href={Pdf}
                                target="_blank"
                                style={{
                                  textAlign: "center",

                                  borderRadius: "4px",
                                  opacity: "1",

                                  fontSize: "small",
                                  textTransform: "none",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                className={classes.pdfbutton}
                              >
                                View Document
                              </Button>
                            </Grid>
                          </Grid>
                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                16 . Financial Position/Bank Guarantee: Solvency
                                Certificate / Bank Guarantee of `25,000/- (for
                                HT) and `50,000 (for EHT)
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Button
                                onClick={this.ViewPfd}
                                href={Pdf}
                                target="_blank"
                                style={{
                                  textAlign: "center",

                                  borderRadius: "4px",
                                  opacity: "1",

                                  fontSize: "small",
                                  textTransform: "none",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                className={classes.pdfbutton}
                              >
                                View Document
                              </Button>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                17 . Punishment and penalties: (Details have to
                                be furnished) From Kerala State Electricity
                                Licensing Board
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Button
                                onClick={this.ViewPfd}
                                href={Pdf}
                                target="_blank"
                                style={{
                                  textAlign: "center",

                                  borderRadius: "4px",
                                  opacity: "1",

                                  fontSize: "small",
                                  textTransform: "none",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                className={classes.pdfbutton}
                              >
                                View Document
                              </Button>
                            </Grid>

                            <Grid item xs={12} md={2}>
                              <Typography
                                style={{
                                  color: "#646d7e",
                                  opacity: "1",
                                  fontWeight: "600",
                                  fontSize: "small",
                                }}
                              >
                                18 . Punishment and penalties: (Details have to
                                be furnished) From Government & Other agencies
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Button
                                onClick={this.ViewPfd}
                                href={Pdf}
                                target="_blank"
                                style={{
                                  textAlign: "center",

                                  borderRadius: "4px",
                                  opacity: "1",

                                  fontSize: "small",
                                  textTransform: "none",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                className={classes.pdfbutton}
                              >
                                View Document
                              </Button>
                            </Grid>
                          </Grid>
                        </div>
                      </Paper>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        alignItems="flex-end"
                        justifyContent="flex-end"
                      >
                        <Button
                          variant="outlined"
                          className={classes.buttonnext}
                          onClick={this.handlealert}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="outlined"
                          className={classes.buttonprev}
                          onClick={this.handlealert1}
                        >
                          Reject
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                )}
              </div>
            </Paper>
          </Grid>
          {this.state.isOpen1 ? (
            <div>
              <Dialog
                open={isOpen1}
                aria-labelledby="alert-dialog-title"
                disableBackdropClick="true"
              >
                <DialogTitle
                  style={{
                    textAlign: "left",
                    color: "#242021",
                    float: "left",
                  }}
                >
                  <Typography
                    style={{
                      textAlign: "left",
                      float: "left",
                      color: "#242021",
                      opacity: "1",
                      fontWeight: "600",
                      fontSize: "small",
                      marginTop: "2%",
                    }}
                  >
                    Reason for Rejection
                  </Typography>
                </DialogTitle>

                <DialogContent>
                  <TextField
                    type="text"
                    multiline
                    rows="9"
                    align="left"
                    variant="outlined"
                    placeholder="Type your comments"
                    className={this.props.classes.inputbase}
                  />
                </DialogContent>
                <DialogActions>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    style={{
                      textAlign: "center",

                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      onClick={this.negativeAction}
                      style={{
                        textAlign: "center",

                        borderRadius: "4px",
                        opacity: "1",

                        fontSize: "small",
                        textTransform: "none",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 0 0 -2px",
                      }}
                      className={classes.buttonprev1}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={this.positiveAction}
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
                        margin: "0 0 0 10px",
                      }}
                    >
                      Confirm
                    </Button>
                  </Grid>
                </DialogActions>
                <br></br>
              </Dialog>
            </div>
          ) : null}
          {this.state.isOpen ? (
            <div>
              <Dialog
                open={isOpen}
                aria-labelledby="alert-dialog-title"
                disableBackdropClick="true"
              >
                <br></br>

                <DialogTitle
                  style={{
                    textAlign: "center",

                    color: "#242021",
                  }}
                >
                  <Typography
                    style={{
                      color: "#242021",
                      opacity: "1",
                      fontWeight: "600",
                      fontSize: "small",
                      marginTop: "2%",
                    }}
                  >
                    {" "}
                    Are you sure to Approve
                  </Typography>
                </DialogTitle>

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
                      onClick={this.positiveAction2}
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
                        margin: "0 0 0 -2px",
                      }}
                      className={classes.buttonprev}
                    >
                      Agree
                    </Button>
                    <Button
                      onClick={this.negativeAction2}
                      style={{
                        textAlign: "center",

                        borderRadius: "4px",
                        opacity: "1",

                        fontSize: "small",
                        textTransform: "none",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 0 0 10px",
                      }}
                      className={classes.buttonprev1}
                    >
                      Disagree
                    </Button>
                  </Grid>
                </DialogActions>
                <br></br>
              </Dialog>
            </div>
          ) : null}
        </div>
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

export const StyledApplicantdetailsgradea = withStyles(styles)(
  Applicantdetailsgradea
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledApplicantdetailsgradea);
