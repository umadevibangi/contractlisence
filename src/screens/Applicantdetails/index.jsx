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
import Approve from "../../assets/images/Approved.svg";
import Reject from "../../assets/images/Rejected.svg";
import password1 from "../../assets/images/password1.png";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
class Applicantdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  handlearrow = () => {
    this.props.navigateTo("/dashboard");
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
          <Typography className={classes.h6} variant="h6">
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
                      M
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
                      Mohammed Gouse
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
                        MohammedGouse@gmail.com
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
                        marginLeft: "1%",
                        marginTop: "10%",
                      }}
                    >
                      Approved
                    </Typography>
                    <img
                      className={classes.PendingImage}
                      src={Approve}
                      alt="Approve"
                    />
                  </Grid>
                </Grid>
                <br></br>
                <br></br>
                <Divider variant="middle" />
                <br></br>
                <br></br>
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
                              1 . Name of Applicant :
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
                              2 . Applicants Gender :
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
                              Male
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
                              3 . Name of Father :
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
                              Mohammed shakeer
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
                              4 . Permanent Address & Pincode :
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
                              28/408 , Sai nagar , near Power Office ,
                              Anantapur,515001
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
                              5 . Address for Communication & Pincode
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
                              28/408 , Sai nagar , near Power Office , Anantapur
                              ,515001
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
                              6 . Applicant's District:
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
                              Anantapur
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
                              7 . Date of Birth :
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
                              10/04/1986
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
                              8 . Age of the Applicant :
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
                              35
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
                              9 . General Educational Qualifications:
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
                              Completed 10th at chaithanya school , Inter in
                              Narayana college , Btech in Srit college Anantapur
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
                              10 . Technical Educational Qualifications:
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
                              Successfully Worked as an Electrician’s Helper
                              ,Completed Vocational Training ,
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
                              11 . Have you presented the three-year experience
                              certificate from Kerala State Electricity Board
                              Ltd. Executive Engineer or from the person who has
                              been authorized from the Licensee :
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
                              12 . Challan Ammount
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
                              Rs 200/-
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
                              13 . Challan Number :
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
                              14 . Applied Date :
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
                              10/04/1986
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
                              15 . Name of Treasury:
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
                              Cannanore
                            </Typography>
                          </Grid>

                          <br></br>
                          <Divider variant="middle" />

                          <br></br>
                          {/* <Button
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
                              margin: "0 0 0 10px",
                            }}
                            className={classes.buttonprev1}
                          >
                            pdf
                          </Button> */}
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
                              16 . Signature of Applicant
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
                              17 . Minimum Three Years Work Experience
                              Certificate from Executive Engineer, Kerala State
                              Electricity Board Ltd or Competent Authority of
                              Licensee.
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
                              18 . Original Chelan receipt for the remittance of
                              the fee prescribed, remitted in a Government
                              Treasury under the head of account “0043 – 00 –
                              800- – 99”. :
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
                              19 .Two passport size photographs attested by a
                              Gazetted Officer / Executive Engineer, Kerala
                              State Electricity Board Ltd. (to be attested on
                              the back side) stating that this is the true
                              photograph of Shri /
                              Smt...........................................
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
                              20 .Two specimen signatures duly attested by a
                              Gazetted Officer / Executive Engineer, Kerala
                              State Electricity Board Ltd.
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
                              21 . Self-addressed and stamped envelope of size
                              20 cm x 14 cm (Stamps worth Rs...........):
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
                              22 . NameIsToCertify :
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
                              MohammedGouse
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
                              23 . Applicant workPlace :
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
                              Kerala
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
                              24 . Number of Years:
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
                              5 years
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
                              25 . His Character & Conduct :
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
                              26 . Signature of Executive Engineer of Kerala
                              State Electricity Board Ltd / Authorized Person of
                              Licensee
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
                              27 . Official Seal
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
                        {/* <Grid
                          item
                          xs={12}
                          md={12}
                          alignItems="flex-end"
                          justifyContent="flex-end"
                        >
                          <Button
                            variant="outlined"
                            className={classes.buttonReject}
                            onClick={this.handlealert1}
                          >
                            Reject
                          </Button>
                          <Button
                            variant="outlined"
                            className={classes.buttonApprove}
                            onClick={this.handlealert}
                          >
                            Approve
                          </Button>
                        </Grid> */}
                      </div>
                    </Paper>
                  </Grid>
                </div>
              </div>
            </Paper>
          </Grid>
          {/* {this.state.isOpen1 ? (
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
                      onClick={this.positiveAction}
                      href="/login"
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
                        margin: "0 0 0 -2px",
                      }}
                      className={classes.buttonprev}
                    >
                      Agree
                    </Button>
                    <Button
                      onClick={this.positiveAction}
                      href="/login"
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
          ) : null} */}
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

export const StyledApplicantdetails = withStyles(styles)(Applicantdetails);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledApplicantdetails);
