import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import moment from "moment";
import { styles } from "./styles";
import Fab from "@material-ui/core/Fab";

import getUsertype from "../../services/getUsertype";
import { push } from "connected-react-router";
import appUrls from "../../config/appUrls";
import { connect } from "react-redux";
import validator from "../../services/validator";
import { find } from "lodash";
import StepConnector from "@material-ui/core/StepConnector";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
// import OtpInput from "react-otp-input";
import StepContent from "@material-ui/core/StepContent";
// import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import Grid from "@material-ui/core/Grid";
import axios from "axios";
import AddIcon from "@material-ui/icons/Add";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Check from "@material-ui/icons/Check";
import clsx from "clsx";

import { shadows } from "@material-ui/system";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import { Label } from "@material-ui/icons";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { DatePicker } from "material-ui-pickers";
import moment from "moment";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
class gradec extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      istable: false,
      isOpen: false,
      activepage: 0,
      checked: false,
      is13opt: false,
      rows: [{}],
      isyesisticked: false,
      Data: {
        fileZipsign: null,
        fileZipself: null,
        fileZipspecimansign: null,
        fileZipphotographs: null,
        fileZipChelanreceipt: null,
        fileZipExperience: null,
        fileZipSignature: null,
        formDate: null,
        challanaDate: null,
        feeDate: null,
        dob: null,
        fileZip: "file",
        nameOfApplicant: "",
        gender: "",
        ApplicantsFather: "",
        AddressOfApplicant: "",
        PincodeOfPermanentAddress: "",
        AddressOfCommunication: "",
        pincodeOfCommunicationAddress: "",
        DistrictOfTheApplicant: "",
        ageOfTheApplicant: "",
        generalEducationalQualification: "",
        challanAmmount: "",
        ChallanNo: "",
        nameOfTreasury: "",
        PlaceOfTheApplicant: "",
        nameIsToCertifyAndAddress: "",
        workPlace: "",
        years: "",
        hisCharacterAndConduct: "",
        place: "",
        selectedFile: null,
      },
      errors: {
        formDate: null,
        challanaDate: null,
        feeDate: null,
        dob: null,
        fileZip: "file",
        nameOfApplicant: "",
        gender: "",
        ApplicantsFather: "",
        AddressOfApplicant: "",
        PincodeOfPermanentAddress: "",
        AddressOfCommunication: "",
        pincodeOfCommunicationAddress: "",
        DistrictOfTheApplicant: "",
        ageOfTheApplicant: "",
        generalEducationalQualification: "",
        challanAmmount: "",
        ChallanNo: "",
        nameOfTreasury: "",
        PlaceOfTheApplicant: "",
        nameIsToCertifyAndAddress: "",
        workPlace: "",
        years: "",
        hisCharacterAndConduct: "",
        place: "",
        selectedFile: null,
      },
      rules1: {
        nameOfApplicant: {
          required: true,
        },
        gender: {
          required: true,
        },
        ApplicantsFather: {
          required: true,
        },
        AddressOfApplicant: {
          required: true,
        },
        PincodeOfPermanentAddress: {
          required: true,
          pincode: true,
          // numeric: true,
        },
        AddressOfCommunication: {
          required: true,
        },
        pincodeOfCommunicationAddress: {
          required: true,
          pincode: true,
        },
      },
      rules2: {
        DistrictOfTheApplicant: {
          required: true,
        },
        ageOfTheApplicant: {
          required: true,
          numeric: false,
        },
        generalEducationalQualification: {
          required: true,
        },
      },
      rules3: {
        PlaceOfTheApplicant: {
          required: true,
        },
        challanaDate: {
          required: true,
        },
        challanAmmount: {
          required: true,
          numeric: true,
        },
        ChallanNo: {
          required: true,
          numeric: true,
        },
        nameOfTreasury: {
          required: true,
        },
      },
      rules4: {},
      rules5: {
        nameIsToCertifyAndAddress: {
          required: false,
        },
        workPlace: {
          required: false,
        },
        years: {
          required: false,
          numeric: false,
        },
        hisCharacterAndConduct: {
          required: false,
        },
        place: {
          required: true,
        },
      },
    };

    this.onChangeZip = this.onChangeZip.bind(this);
  }
  validate = (rules, data) => {
    console.log("enter to validate");
    const errors = validator(rules)(data);
    console.log("after constan erroes", errors);
    const hasErrors = find(errors, (error) => error !== "");

    this.setState({ errors });
    return !hasErrors;
  };
  onChangeZipsign = (e) => {
    this.state.Data.fileZipsign = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipsign: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipself = (e) => {
    this.state.Data.fileZipself = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipself: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipspecimansign = (e) => {
    this.state.Data.fileZipspecimansign = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipspecimansign: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipphotographs = (e) => {
    this.state.Data.fileZipphotographs = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipphotographs: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipChelanreceipt = (e) => {
    this.state.Data.fileZipChelanreceipt = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipChelanreceipt: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipExperience = (e) => {
    this.state.Data.fileZipExperience = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipExperience: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipSignature = (e) => {
    this.state.Data.fileZipSignature = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipSignature: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZip(e) {
    // this.setState({
    //   Data: { ...this.state.Data, fileZip: e.target.files[0] },
    // });
    if (e.target.files[0]) {
      this.state.Data.fileZip = e.target.files[0];
    }
  }

  handlenext = () => {
    if (this.state.activepage === 0) {
      if (this.validate(this.state.rules1, this.state.Data)) {
        console.log("uma");
        this.setState((state) => ({
          ...this.state,

          activepage: state.activepage + 1,
        }));
        console.log("srvan");
      }
    } else if (this.state.activepage === 1) {
      if (this.validate(this.state.rules2, this.state.Data)) {
        this.setState((state) => ({
          ...this.state,
          activepage: state.activepage + 1,
        }));
      }
    } else if (this.state.activepage === 2) {
      if (this.validate(this.state.rules3, this.state.Data)) {
        this.setState((state) => ({
          ...this.state,
          activepage: state.activepage + 1,
        }));
      }
    } else if (this.state.activepage === 3) {
      if (this.validate(this.state.rules4, this.state.Data)) {
        this.setState((state) => ({
          ...this.state,
          activepage: state.activepage + 1,
        }));
      }
    } else if (this.state.activepage === 4) {
      if (this.validate(this.state.rules5, this.state.Data)) {
        this.setState((state) => ({
          ...this.state,
          activepage: state.activepage + 1,
        }));
      }
    }
  };
  handleprev = () => {
    this.setState({
      activepage: this.state.activepage - 1,
    });
  };

  handleopt14 = (event) => {
    var value = event.target.value;
    var opt14yes = document.getElementById("opt14yes");
    var opt14no = document.getElementById("opt14no");
    if (opt14yes.checked && value == "Yes") {
      if (opt14no.checked) {
        opt14no.checked = false;
      }
    }
    if (opt14no.checked && value == "No") {
      if (opt14yes.checked) {
        opt14yes.checked = false;
      }
    }
  };

  handleAddRow = () => {
    const item = {
      name: "",
      mobile: "",
    };
    this.setState({
      rows: [...this.state.rows, item],
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1),
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };

  handleCheck = () => {
    this.setState((state) => ({ checked: !this.state.checked }));
  };
  handlealert = () => {
    // this.props.signUp(data);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state.Data)
      .then((res) => {
        console.log(res);
        console.log(this.state.Data);
      });
    if (this.validate(this.state.rules5, this.state.Data)) {
      this.setState((state) => ({
        ...this.state,
        isOpen: true,
      }));
    }
  };
  handleDateChange = (name, date) => {
    this.setState({
      Data: {
        ...this.state.Data,
        [name]: moment(date).format("YYYY-MM-DD"),
      },
    });
  };
  handleChange = (event) => {
    this.setState({
      Data: {
        ...this.state.Data,

        [event.target.name]: event.target.value,
      },
    });
  };
  handleTrack = () => {
    this.props.navigateTo("/navigationdrawer");
  };
  render() {
    const { classes } = this.props;
    const { loading, success, data, isOpen, errors } = this.state;

    return (
      <>
        <div className={classes.dashboardContent}>
          <Grid item xs={12} md={12}>
            <Typography className={classes.h6} variant="h6">
              Electrical contractor license Application for Grade-C
            </Typography>
          </Grid>
          {this.state.activepage == 0 && (
            <div className={classes.cctnResults}>
              {/* <Grid item xs={12}>
              <EmptyListing emptyText="Your application status will appear here" />
            </Grid> */}
              <Grid xs={12} md={12}>
                <Paper boxShadow={3}>
                  <div className={classes.cctnsearchBox}>
                    <Grid container direction="row" spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          1. Name of Applicant
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            style={{
                              position: "relative",
                              minWidth: "95%",
                              background: "#ffffff 0% 0%",
                              borderRadius: " 4px",
                              opacity: "1",
                              fontSize: "small",
                              border: " 1px solid #ccc",
                              paddingRight: "24px",
                              //   padding: "3px 14px",
                              color: "#a2a2a2",
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="nameOfApplicant"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.nameOfApplicant}
                            error={errors.nameOfApplicant ? true : false}
                          ></TextField>
                        </FormControl>
                        {errors.nameOfApplicant ? (
                          <FormHelperText className={classes.error}>
                            {errors.nameOfApplicant}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          2 . Gender of the Applicant
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            style={{
                              position: "relative",
                              minWidth: "95%",
                              background: "#ffffff 0% 0%",
                              borderRadius: " 4px",
                              opacity: "1",
                              fontSize: "small",
                              border: " 1px solid #ccc",
                              paddingRight: "24px",
                              //   padding: "3px 14px",
                              color: "#a2a2a2",
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            error={errors.gender ? true : false}
                            name="gender"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.gender}
                          ></TextField>
                        </FormControl>
                        {errors.gender ? (
                          <FormHelperText className={classes.error}>
                            {errors.gender}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          3 . Name of the Applicant's father
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            style={{
                              position: "relative",
                              minWidth: "95%",
                              background: "#ffffff 0% 0%",
                              borderRadius: " 4px",
                              opacity: "1",
                              fontSize: "small",
                              border: " 1px solid #ccc",
                              paddingRight: "24px",
                              //   padding: "3px 14px",
                              color: "#a2a2a2",
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="ApplicantsFather"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.ApplicantsFather}
                            error={errors.ApplicantsFather ? true : false}
                          ></TextField>
                        </FormControl>
                        {errors.ApplicantsFather ? (
                          <FormHelperText className={classes.error}>
                            {errors.ApplicantsFather}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          4 . Address of the Applicant
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            rows="5"
                            multiline
                            style={{
                              position: "relative",
                              minWidth: "95%",
                              background: "#ffffff 0% 0%",
                              borderRadius: " 4px",
                              opacity: "1",
                              fontSize: "small",
                              border: " 1px solid #ccc",
                              paddingRight: "24px",
                              //   padding: "3px 14px",
                              color: "#a2a2a2",
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="AddressOfApplicant"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.AddressOfApplicant}
                            error={errors.AddressOfApplicant ? true : false}
                          ></TextField>
                        </FormControl>
                        {errors.AddressOfApplicant ? (
                          <FormHelperText className={classes.error}>
                            {errors.AddressOfApplicant}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          5 . Pincode of Permanent Address
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            style={{
                              position: "relative",
                              minWidth: "95%",
                              background: "#ffffff 0% 0%",
                              borderRadius: " 4px",
                              opacity: "1",
                              fontSize: "small",
                              border: " 1px solid #ccc",
                              paddingRight: "24px",
                              //   padding: "3px 14px",
                              color: "#a2a2a2",
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="PincodeOfPermanentAddress"
                            onChange={(e) => this.handleChange(e)}
                            error={
                              errors.PincodeOfPermanentAddress ? true : false
                            }
                            value={this.state.Data.PincodeOfPermanentAddress}
                          ></TextField>
                        </FormControl>
                        {errors.PincodeOfPermanentAddress ? (
                          <FormHelperText className={classes.error}>
                            {errors.PincodeOfPermanentAddress}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          7 . Address of Communication
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            rows="5"
                            multiline
                            style={{
                              position: "relative",
                              minWidth: "95%",
                              background: "#ffffff 0% 0%",
                              borderRadius: " 4px",
                              opacity: "1",
                              fontSize: "small",
                              border: " 1px solid #ccc",
                              paddingRight: "24px",
                              //   padding: "3px 14px",
                              color: "#a2a2a2",
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="AddressOfCommunication"
                            onChange={(e) => this.handleChange(e)}
                            error={errors.AddressOfCommunication ? true : false}
                            value={this.state.Data.AddressOfCommunication}
                          ></TextField>
                        </FormControl>
                        {errors.AddressOfCommunication ? (
                          <FormHelperText className={classes.error}>
                            {errors.AddressOfCommunication}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          8 . Pincode of Communication Address
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            style={{
                              position: "relative",
                              minWidth: "95%",
                              background: "#ffffff 0% 0%",
                              borderRadius: " 4px",
                              opacity: "1",
                              fontSize: "small",
                              border: " 1px solid #ccc",
                              paddingRight: "24px",
                              //   padding: "3px 14px",
                              color: "#a2a2a2",
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="pincodeOfCommunicationAddress"
                            error={
                              errors.pincodeOfCommunicationAddress
                                ? true
                                : false
                            }
                            onChange={(e) => this.handleChange(e)}
                            value={
                              this.state.Data.pincodeOfCommunicationAddress
                            }
                          ></TextField>
                        </FormControl>
                        {errors.pincodeOfCommunicationAddress ? (
                          <FormHelperText className={classes.error}>
                            {errors.pincodeOfCommunicationAddress}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
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
                          className={classes.buttonnext}
                          onClick={this.handlenext}
                        >
                          next
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </Paper>
              </Grid>
            </div>
          )}
          {this.state.activepage == 1 && (
            <div className={classes.cctnResults}>
              {/* <Grid item xs={12}>
              <EmptyListing emptyText="Your application status will appear here" />
            </Grid> */}
              <Grid xs={12} md={12}>
                <Paper boxShadow={3}>
                  <div className={classes.cctnsearchBox}>
                    <Grid container direction="row" spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          9 . District of the Applicant
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            style={{
                              position: "relative",
                              minWidth: "95%",
                              background: "#ffffff 0% 0%",
                              borderRadius: " 4px",
                              opacity: "1",
                              fontSize: "small",
                              border: " 1px solid #ccc",
                              paddingRight: "24px",
                              //   padding: "3px 14px",
                              color: "#a2a2a2",
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="DistrictOfTheApplicant"
                            onChange={(e) => this.handleChange(e)}
                            error={errors.DistrictOfTheApplicant ? true : false}
                            value={this.state.Data.DistrictOfTheApplicant}
                          ></TextField>
                        </FormControl>
                        {errors.DistrictOfTheApplicant ? (
                          <FormHelperText className={classes.error}>
                            {errors.DistrictOfTheApplicant}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          10 . Date of Birth
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <MuiPickersUtilsProvider
                            style={{ color: "#ffd500" }}
                            utils={DateFnsUtils}
                          >
                            <KeyboardDatePicker
                              style={{
                                position: "relative",
                                minWidth: "95%",
                                background: "#ffffff 0% 0%",
                                borderRadius: " 4px",
                                opacity: "1",
                                fontSize: "small",
                                border: " 1px solid #ccc",
                                paddingRight: "24px",
                                //   padding: "3px 14px",
                                color: "#a2a2a2",
                              }}
                              margin="dense"
                              disableToolbar
                              name="dob"
                              id="date-picker-dialog"
                              format="dd/MM/yyyy"
                              disableOpenOnEnter
                              // error={errors.to_date ? true : false}
                              value={this.state.Data.dob}
                              onChange={(date) =>
                                this.handleDateChange("dob", date)
                              }
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                              InputProps={{ disableUnderline: true }}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              error={errors.dob ? true : false}
                            />
                          </MuiPickersUtilsProvider>{" "}
                        </FormControl>
                        {errors.dob ? (
                          <FormHelperText className={classes.error}>
                            {errors.dob}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          11 . Age of the Applicant
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            style={{
                              position: "relative",
                              minWidth: "95%",
                              background: "#ffffff 0% 0%",
                              borderRadius: " 4px",
                              opacity: "1",
                              fontSize: "small",
                              border: " 1px solid #ccc",
                              paddingRight: "24px",
                              //   padding: "3px 14px",
                              color: "#a2a2a2",
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="ageOfTheApplicant"
                            error={errors.ageOfTheApplicant ? true : false}
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.ageOfTheApplicant}
                          ></TextField>
                        </FormControl>
                        {errors.ageOfTheApplicant ? (
                          <FormHelperText className={classes.error}>
                            {errors.ageOfTheApplicant}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          12 . General Educational Qualification of the
                          Applicant
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            rows="5"
                            multiline
                            style={{
                              position: "relative",
                              minWidth: "95%",
                              background: "#ffffff 0% 0%",
                              borderRadius: " 4px",
                              opacity: "1",
                              fontSize: "small",
                              border: " 1px solid #ccc",
                              paddingRight: "24px",
                              //   padding: "3px 14px",
                              color: "#a2a2a2",
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="generalEducationalQualification"
                            error={
                              errors.generalEducationalQualification
                                ? true
                                : false
                            }
                            onChange={(e) => this.handleChange(e)}
                            value={
                              this.state.Data.generalEducationalQualification
                            }
                          ></TextField>
                        </FormControl>
                        {errors.generalEducationalQualification ? (
                          <FormHelperText className={classes.error}>
                            {errors.generalEducationalQualification}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          13 . Technical Qualification of the Applicant
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            rows="5"
                            multiline
                            style={{
                              position: "relative",
                              minWidth: "95%",
                              background: "#ffffff 0% 0%",
                              borderRadius: " 4px",
                              opacity: "1",
                              fontSize: "small",
                              border: " 1px solid #ccc",
                              paddingRight: "24px",
                              //   padding: "3px 14px",
                              color: "#a2a2a2",
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            error={
                              errors.technicalEducationalQualification
                                ? true
                                : false
                            }
                            name="technicalEducationalQualification"
                            onChange={(e) => this.handleChange(e)}
                            value={
                              this.state.Data.technicalEducationalQualification
                            }
                          ></TextField>
                        </FormControl>
                        {errors.technicalEducationalQualification ? (
                          <FormHelperText className={classes.error}>
                            {errors.technicalEducationalQualification}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          14 . Have you presented the three-year experience
                          certificate from Kerala State Electricity Board Ltd.
                          Executive Engineer or from the person who has been
                          authorized from the Licensee
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div onChange={this.handleopt14}>
                          {" "}
                          <input
                            type="radio"
                            value="Yes"
                            id="opt14yes"
                            name="opt14"
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="No"
                            id="opt14no"
                            name="opt14"
                          />{" "}
                          No{" "}
                        </div>
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
                </Paper>
              </Grid>
            </div>
          )}
          {this.state.activepage == 2 && (
            <div className={classes.cctnResults}>
              {/* <Grid item xs={12}>
              <EmptyListing emptyText="Your application status will appear here" />
            </Grid> */}
              <Grid xs={12} md={12}>
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
                          10 . Details of Fee
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          Challan Amount
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <FormControl fullWidth>
                          <TextField
                            style={{
                              position: "relative",
                              minWidth: "95%",
                              background: "#ffffff 0% 0%",
                              borderRadius: " 4px",
                              opacity: "1",
                              fontSize: "small",
                              border: " 1px solid #ccc",
                              // paddingRight: "24px",
                              //   padding: "3px 14px",
                              color: "#a2a2a2",
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="challanAmmount"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.challanAmmount}
                            error={errors.challanAmmount ? true : false}
                          ></TextField>
                        </FormControl>
                        {errors.challanAmmount ? (
                          <FormHelperText className={classes.error}>
                            {errors.challanAmmount}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          Challan No
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <FormControl fullWidth>
                          <TextField
                            style={{
                              position: "relative",
                              minWidth: "95%",
                              background: "#ffffff 0% 0%",
                              borderRadius: " 4px",
                              opacity: "1",
                              fontSize: "small",
                              border: " 1px solid #ccc",
                              // paddingRight: "24px",
                              //   padding: "3px 14px",
                              color: "#a2a2a2",
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="ChallanNo"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.ChallanNo}
                            error={errors.ChallanNo ? true : false}
                          ></TextField>
                        </FormControl>
                        {errors.ChallanNo ? (
                          <FormHelperText className={classes.error}>
                            {errors.ChallanNo}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          Date
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <FormControl fullWidth>
                          <MuiPickersUtilsProvider
                            style={{ color: "#ffd500" }}
                            utils={DateFnsUtils}
                          >
                            <KeyboardDatePicker
                              style={{
                                position: "relative",
                                minWidth: "95%",
                                background: "#ffffff 0% 0%",
                                borderRadius: " 4px",
                                opacity: "1",
                                fontSize: "small",
                                border: " 1px solid #ccc",
                                // paddingRight: "24px",
                                //   padding: "3px 14px",
                                color: "#a2a2a2",
                              }}
                              InputProps={{ disableUnderline: true }}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              disableToolbar
                              name="challanaDate"
                              id="date-picker-dialog"
                              format="dd/MM/yyyy"
                              disableOpenOnEnter
                              // error={errors.to_date ? true : false}
                              value={this.state.Data.challanaDate}
                              onChange={(date) =>
                                this.handleDateChange("challanaDate", date)
                              }
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                              error={errors.challanaDate ? true : false}
                            />
                          </MuiPickersUtilsProvider>
                        </FormControl>
                        {errors.challanaDate ? (
                          <FormHelperText className={classes.error}>
                            {errors.challanaDate}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          Name of Treasury
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <FormControl fullWidth>
                          <TextField
                            style={{
                              position: "relative",
                              minWidth: "95%",
                              background: "#ffffff 0% 0%",
                              borderRadius: " 4px",
                              opacity: "1",
                              fontSize: "small",
                              border: " 1px solid #ccc",
                              // paddingRight: "24px",
                              //   padding: "3px 14px",
                              color: "#a2a2a2",
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="nameOfTreasury"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.nameOfTreasury}
                            error={errors.nameOfTreasury ? true : false}
                          ></TextField>
                        </FormControl>
                        {errors.nameOfTreasury ? (
                          <FormHelperText className={classes.error}>
                            {errors.nameOfTreasury}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Typography className={classes.h6D} variant="h6">
                          Declaration :
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Checkbox
                          // type="checkbox"
                          className={classes.checked}
                          id="scales"
                          name="scales"
                          defaultChecked={this.state.checked}
                          onChange={this.handleCheck}
                        />
                        <label
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          I hereby declare that the particulars stated above are
                          correct to the best of my knowledge. I also agree to
                          the cancellation of my permit / Competency Certificate
                          that may be issued to me in pursuance of this
                          application in case the particulars furnished in the
                          application are found incorrect or false.
                        </label>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          place of the Applicant
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            style={{
                              position: "relative",
                              minWidth: "95%",
                              background: "#ffffff 0% 0%",
                              borderRadius: " 4px",
                              opacity: "1",
                              fontSize: "small",
                              border: " 1px solid #ccc",
                              paddingRight: "24px",
                              //   padding: "3px 14px",
                              color: "#a2a2a2",
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="PlaceOfTheApplicant"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.PlaceOfTheApplicant}
                            error={errors.PlaceOfTheApplicant ? true : false}
                          ></TextField>
                        </FormControl>
                        {errors.PlaceOfTheApplicant ? (
                          <FormHelperText className={classes.error}>
                            {errors.PlaceOfTheApplicant}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          Date
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <MuiPickersUtilsProvider
                            style={{ color: "#ffd500" }}
                            utils={DateFnsUtils}
                          >
                            <KeyboardDatePicker
                              style={{
                                position: "relative",
                                minWidth: "95%",
                                background: "#ffffff 0% 0%",
                                borderRadius: " 4px",
                                opacity: "1",
                                fontSize: "small",
                                border: " 1px solid #ccc",
                                paddingRight: "24px",
                                //   padding: "3px 14px",
                                color: "#a2a2a2",
                              }}
                              margin="dense"
                              disableToolbar
                              name="feeDate"
                              id="date-picker-dialog"
                              format="dd/MM/yyyy"
                              disableOpenOnEnter
                              // error={errors.to_date ? true : false}
                              value={this.state.Data.feeDate}
                              onChange={(date) =>
                                this.handleDateChange("feeDate", date)
                              }
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                              InputProps={{ disableUnderline: true }}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              error={errors.feeDate ? true : false}
                            />
                          </MuiPickersUtilsProvider>
                        </FormControl>
                        {errors.feeDate ? (
                          <FormHelperText className={classes.error}>
                            {errors.feeDate}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          Signature of the Applicant
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipSignature}
                        />
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
                </Paper>
              </Grid>
            </div>
          )}
          {this.state.activepage == 3 && (
            <div className={classes.cctnResults}>
              {/* <Grid item xs={12}>
              <EmptyListing emptyText="Your application status will appear here" />
            </Grid> */}
              <Grid xs={12} md={12}>
                <Paper boxShadow={3}>
                  <div className={classes.cctnsearchBox}>
                    <Grid container direction="row" spacing={3}>
                      <Grid item xs={12} md={12}>
                        <Typography className={classes.h6In} variant="h6">
                          Instructions for the Grant of Contractor’s Licence
                          Grade ‘C’
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          Qualification : A minimum three years’ experience in
                          the installation of Distribution Transformer and High
                          Tension/Low Tension lines of Kerala State Electricity
                          Board Ltd/other Licensee
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          Documents to be forwarded along with the application:
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          (a) Minimum Three Years Work Experience Certificate
                          from Executive Engineer, Kerala State Electricity
                          Board Ltd or Competent Authority of Licensee.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipExperience}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          (b)Original Chelan receipt for the remittance of the
                          fee prescribed, remitted in a Government Treasury
                          under the head of account “0043 – 00 – 800- – 99”.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipChelanreceipt}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          (c)Two passport size photographs attested by a
                          Gazetted Officer / Executive Engineer, Kerala State
                          Electricity Board Ltd. (to be attested on the back
                          side) stating that this is the true photograph of Shri
                          / Smt...........................................)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipphotographs}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          (d)Two specimen signatures duly attested by a Gazetted
                          Officer / Executive Engineer, Kerala State Electricity
                          Board Ltd.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipspecimansign}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          (e)Self-addressed and stamped envelope of size 20 cm x
                          14 cm (Stamps worth Rs...........)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipself}
                        />
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
                </Paper>
              </Grid>
            </div>
          )}
          {this.state.activepage == 4 && (
            <div className={classes.cctnResults}>
              {/* <Grid item xs={12}>
              <EmptyListing emptyText="Your application status will appear here" />
            </Grid> */}
              <Grid xs={12} md={12}>
                <Paper boxShadow={3}>
                  <div className={classes.cctnsearchBox}>
                    <Grid container direction="row" spacing={3}>
                      <Grid item xs={12} md={12}>
                        <Typography className={classes.h6D} variant="h6">
                          Form of Experience Certificate
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          {/* This is to certify that
                          <br></br>
                          <br></br> */}
                          <FormControl fullWidth>
                            <a style={{ marginLeft: ".5rem" }}>
                              Sri
                              <a style={{ marginLeft: ".5rem" }}></a>
                              <TextField
                                style={{
                                  textAlign: "center",
                                  opacity: "1",
                                  width: "80%",
                                  fontSize: "small",
                                  marginTop: "-0.8%",
                                  borderBottomStyle: "dashed",
                                }}
                                error={
                                  errors.nameIsToCertifyAndAddress
                                    ? true
                                    : false
                                }
                                name="nameIsToCertifyAndAddress"
                                onChange={(e) => this.handleChange(e)}
                                value={
                                  this.state.Data.nameIsToCertifyAndAddress
                                }
                              ></TextField>
                              (name and address)
                            </a>
                          </FormControl>
                          {errors.nameIsToCertifyAndAddress ? (
                            <FormHelperText className={classes.error}>
                              {errors.nameIsToCertifyAndAddress}
                            </FormHelperText>
                          ) : (
                            ""
                          )}
                          <br></br>
                          <br></br>
                          <FormControl fullWidth>
                            <a style={{ marginLeft: ".5rem" }}>
                              has been working in the
                              <a style={{ marginLeft: ".5rem" }}></a>
                              <TextField
                                style={{
                                  textAlign: "center",
                                  opacity: "1",
                                  width: "60%",
                                  fontSize: "small",
                                  marginTop: "-0.8%",
                                  borderBottomStyle: "dashed",
                                }}
                                name="workPlace"
                                error={errors.workPlace ? true : false}
                                onChange={(e) => this.handleChange(e)}
                                value={this.state.Data.workPlace}
                              ></TextField>
                              of Kerala State Electricity Board Ltd
                            </a>
                          </FormControl>
                          {errors.workPlace ? (
                            <FormHelperText className={classes.error}>
                              {errors.workPlace}
                            </FormHelperText>
                          ) : (
                            ""
                          )}
                          <br></br>
                          <br></br>
                          <FormControl fullWidth>
                            <a style={{ marginLeft: ".5rem" }}>
                              Licensee for the last
                              <a style={{ marginLeft: ".5rem" }}></a>
                              <TextField
                                style={{
                                  textAlign: "center",
                                  opacity: "1",
                                  width: "20%",
                                  fontSize: "small",
                                  marginTop: "-0.8%",
                                  borderBottomStyle: "dashed",
                                }}
                                error={errors.years ? true : false}
                                name="years"
                                onChange={(e) => this.handleChange(e)}
                                value={this.state.Data.years}
                              ></TextField>
                              Years (specify year and months completed) He has
                              got experience in the constructionworkof
                              LowTension
                              <br></br>
                              <br></br>
                              High Tension lines/ Distribution Transformers
                              (score off whichever is not applicable) and
                              connected electrics His Character and
                              <br></br>
                              <br></br>
                            </a>
                          </FormControl>
                          {errors.years ? (
                            <FormHelperText className={classes.error}>
                              {errors.years}
                            </FormHelperText>
                          ) : (
                            ""
                          )}
                          <FormControl fullWidth>
                            <a style={{ marginLeft: ".5rem" }}>
                              conduct are
                              <a style={{ marginLeft: ".5rem" }}></a>
                              <TextField
                                style={{
                                  textAlign: "center",
                                  opacity: "1",
                                  width: "40%",
                                  fontSize: "small",
                                  marginTop: "-0.8%",
                                  borderBottomStyle: "dashed",
                                }}
                                error={
                                  errors.hisCharacterAndConduct ? true : false
                                }
                                name="hisCharacterAndConduct"
                                onChange={(e) => this.handleChange(e)}
                                value={this.state.Data.hisCharacterAndConduct}
                              ></TextField>
                            </a>
                          </FormControl>
                          {errors.hisCharacterAndConduct ? (
                            <FormHelperText className={classes.error}>
                              {errors.hisCharacterAndConduct}
                            </FormHelperText>
                          ) : (
                            ""
                          )}
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          Place of the Applicant
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            style={{
                              position: "relative",
                              minWidth: "95%",
                              background: "#ffffff 0% 0%",
                              borderRadius: " 4px",
                              opacity: "1",
                              fontSize: "small",
                              border: " 1px solid #ccc",
                              paddingRight: "24px",
                              //   padding: "3px 14px",
                              color: "#a2a2a2",
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="place"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.place}
                            error={errors.place ? true : false}
                          ></TextField>
                        </FormControl>
                        {errors.place ? (
                          <FormHelperText className={classes.error}>
                            {errors.place}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          Date of issue
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <MuiPickersUtilsProvider
                            style={{ color: "#ffd500" }}
                            utils={DateFnsUtils}
                          >
                            <KeyboardDatePicker
                              style={{
                                position: "relative",
                                minWidth: "95%",
                                background: "#ffffff 0% 0%",
                                borderRadius: " 4px",
                                opacity: "1",
                                fontSize: "small",
                                border: " 1px solid #ccc",
                                paddingRight: "24px",
                                //   padding: "3px 14px",
                                color: "#a2a2a2",
                              }}
                              margin="dense"
                              disableToolbar
                              name="formDate"
                              id="date-picker-dialog"
                              format="dd/MM/yyyy"
                              disableOpenOnEnter
                              // error={errors.to_date ? true : false}
                              value={this.state.Data.formDate}
                              onChange={(date) =>
                                this.handleDateChange("formDate", date)
                              }
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                              InputProps={{ disableUnderline: true }}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              error={errors.formDate ? true : false}
                            />
                          </MuiPickersUtilsProvider>
                        </FormControl>
                        {errors.formDate ? (
                          <FormHelperText className={classes.error}>
                            {errors.formDate}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          Signature of Executive Engineer of Kerala State
                          Electricity Board Ltd / Authorized Person of Licensee
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipsign}
                        />
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
                          className={classes.buttonnext}
                          onClick={this.handlealert}
                        >
                          Submit
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
                </Paper>
              </Grid>
            </div>
          )}

          {this.state.isOpen ? (
            <div>
              <Dialog
                open={isOpen}
                aria-labelledby="alert-dialog-title"
                disableBackdropClick="true"
              >
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
                  Your application is successfully registered
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
                    Your application number is 1234567. You can track your
                    application with the provided application number{" "}
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
                      onClick={this.handleTrack}
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
                      ok
                    </Button>
                  </Grid>
                </DialogActions>
                <br></br>
              </Dialog>
            </div>
          ) : null}
        </div>
      </>
    );
  }
}

gradec.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    // userInfo: state.auth.info,
    // isLoading: state.pcc.isLoading,
    // error: state.pcc.error,
    // message: state.pcc.message,
    // applicationNumber: state.pcc.applicationNumber,
    // savePCC: state.pcc.savePCC,
    // fetchUserDetails: state.pcc.fetchUserDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // setHeader: (data) => dispatch(setHeader(data)),
    // navigateTo: (url) => dispatch(push(url)),
    // applyPCC: (data) => dispatch(applyPCC(data)),
    // fetchUserData: (data) => dispatch(fetchUserData(data)),
    // showAlert: (messageInfo) => dispatch(showAlert(messageInfo)),
  };
}

export const styledgradec = withStyles(styles)(gradec);

export default connect(mapStateToProps, mapDispatchToProps)(styledgradec);
