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
import FormHelperText from "@material-ui/core/FormHelperText";

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
import AddIcon from "@material-ui/icons/Add";

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
import "date-fns";
import { DatePicker } from "material-ui-pickers";
import moment from "moment";
import axios from "axios";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
class gradeb extends React.Component {
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
      isopt: false,
      checkBox1: false,
      checkBox2: false,
      checkBox3: false,
      checkBox4: false,
      // inputFields: [
      //   {
      //     index: Math.random(),
      //     name: "",
      //     Class: "",
      //     qualification: "",
      //     status: "",
      //   },
      // ],

      values: [],

      Data: {
        fileZipopt6: null,
        fileZiptable: null,
        fileZipsign: null,
        fileZipphotograph: null,
        fileZipspecimansign: null,
        fileZipwiremanpermits: null,
        fileZipdulyattested: null,
        fileZipTongTester: null,
        fileZipInsulation: null,
        fileZipLv: null,
        fileZip1000v: null,
        fileZipEarthTester: null,
        fileZipindicator: null,
        fileZipNeonTester: null,
        fileZipCrimping: null,
        fileZipMultimeter: null,
        fileZipinstallations: null,
        opt6input: null,
        fileZip: null,
        challanDate1: null,
        challanDate: null,
        issueDate: null,
        expiryDate: null,
        Date1: null,
        // name: "",
        // qualification: "",
        // Class: "",
        // status: "",
        electricalContratorsName: "",
        businessPincode: "",
        businessEmail: "",
        businessPhonenumber: "",
        fullNameAndHouseAddressOfProprietor: "",
        fullNameOfAgentOrManager: "",
        nameOfThePersonWhoWillSignDocumentsOnBehalfOfTheContractor: "",
        detailsOfContractorsLicence: "",
        nameOfIssuingAuthority: "",
        detailsOfWorksPermitted: "",
        placeOfTheApplicant: "",
        addressOfTheApplicant: "",
        challanAmmount: "",
        challanNo: "",
        NameOfTreasury: "",
        AChallanforRsOfStaffRegister: "",
        challanNoOfStaffRegister: "",
        nameOfTreasuryOfStaffRegister: "",
        supervisorsPermitNumber: "",
      },
      errors: {
        challanDate1: null,
        challanDate: null,
        issueDate: null,
        expiryDate: null,
        Date1: null,
        electricalContratorsName: "",
        businessPincode: "",
        businessEmail: "",
        businessPhonenumber: "",
        fullNameAndHouseAddressOfProprietor: "",
        fullNameOfAgentOrManager: "",
        nameOfThePersonWhoWillSignDocumentsOnBehalfOfTheContractor: "",
        detailsOfContractorsLicence: "",
        nameOfIssuingAuthority: "",
        detailsOfWorksPermitted: "",
        placeOfTheApplicant: "",
        addressOfTheApplicant: "",
        challanAmmount: "",
        challanNo: "",
        NameOfTreasury: "",
        AChallanforRsOfStaffRegister: "",
        challanNoOfStaffRegister: "",
        nameOfTreasuryOfStaffRegister: "",
        supervisorsPermitNumber: "",
      },
      rules1: {
        electricalContratorsName: {
          required: true,
        },
        businessPincode: {
          required: true,
          pincode: true,
        },
        businessEmail: {
          required: true,
          email: true,
        },
        businessPhonenumber: {
          required: true,
          number: true,
          mobile: true,
        },
      },
      rules2: {
        fullNameAndHouseAddressOfProprietor: {
          required: true,
        },
        fullNameOfAgentOrManager: {
          required: true,
        },
        nameOfThePersonWhoWillSignDocumentsOnBehalfOfTheContractor: {
          required: true,
        },
      },
      rules3: {
        detailsOfContractorsLicence: {
          required: false,
        },
        nameOfIssuingAuthority: {
          required: true,
        },
        detailsOfWorksPermitted: {
          required: true,
        },
      },
      rules4: {
        placeOfTheApplicant: {
          required: true,
        },
        addressOfTheApplicant: {
          required: true,
        },
      },
      rules5: {
        challanAmmount: {
          required: true,
        },
        challanNo: {
          required: true,
        },
        NameOfTreasury: {
          required: true,
        },
        AChallanforRsOfStaffRegister: {
          required: true,
          number: true,
        },
        challanNoOfStaffRegister: {
          required: true,
          number: true,
        },
        nameOfTreasuryOfStaffRegister: {
          required: true,
        },
      },
      rules6: {
        supervisorsPermitNumber: {
          required: false,
        },
      },
    };
  }
  onChangeZipopt6 = (e) => {
    this.state.Data.fileZipopt6 = e.target.files[0];

    this.setState({
      Data: { ...this.state.Data, fileZipopt6: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZiptable = (e) => {
    this.state.Data.fileZiptable = e.target.files[0];

    this.setState({
      Data: { ...this.state.Data, fileZiptable: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipsign = (e) => {
    this.state.Data.fileZipsign = e.target.files[0];

    this.setState({
      Data: { ...this.state.Data, fileZipsign: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipphotograph = (e) => {
    this.state.Data.fileZipphotograph = e.target.files[0];

    this.setState({
      Data: { ...this.state.Data, fileZipphotograph: e.target.files[0] },
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
  onChangeZipwiremanpermits = (e) => {
    this.state.Data.fileZipwiremanpermits = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipwiremanpermits: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipdulyattested = (e) => {
    this.state.Data.fileZipdulyattested = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipdulyattested: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipTongTester = (e) => {
    this.state.Data.fileZipTongTester = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipTongTester: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipInsulation = (e) => {
    this.state.Data.fileZipInsulation = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipInsulation: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipLv = (e) => {
    this.state.Data.fileZipLv = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipLv: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZip1000v = (e) => {
    this.state.Data.fileZip1000v = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZip1000v: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipEarthTester = (e) => {
    this.state.Data.fileZipEarthTester = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipEarthTester: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipindicator = (e) => {
    this.state.Data.fileZipindicator = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipindicator: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipNeonTester = (e) => {
    this.state.Data.fileZipNeonTester = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipNeonTester: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipCrimping = (e) => {
    this.state.Data.fileZipCrimping = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipCrimping: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipMultimeter = (e) => {
    this.state.Data.fileZipMultimeter = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipMultimeter: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipinstallations = (e) => {
    this.state.Data.fileZipinstallations = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipinstallations: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  handleChange = (event) => {
    this.setState({
      Data: {
        ...this.state.Data,

        [event.target.name]: event.target.value,
      },
    });
  };
  handleChange1 = (index) => (e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[index] = {
      ...this.state.rows[index],
      [name]: value,
    };
    this.setState({
      rows,
    });
  };
  handleAddRow = () => {
    let test = [...this.state.rows];
    test.push({ name: "", qualification: "", Class: "", status: "" });
    this.setState({ rows: test });
  };
  handleRemoveRow = (id) => {
    console.log(id);
    const rows = [...this.state.rows];
    rows.splice(id, 1);
    this.setState({ rows });
  };

  // addNewRow = (e) => {
  //   this.setState((prevState) => ({
  //     inputFields: [
  //       ...prevState.inputFields,
  //       {
  //         index: Math.random(),
  //         firstName: "",
  //         qualification: "",
  //         status: "",
  //       },
  //     ],
  //   }));
  // };

  deleteRow = (index) => {
    this.setState({
      inputFields: this.state.inputFields.filter(
        (s, sindex) => index !== sindex
      ),
    });
  };
  clickOnDelete(record) {
    this.setState({
      inputFields: this.state.inputFields.filter((r) => r !== record),
    });
  }
  handlenext = () => {
    console.log("zip", this.state.Data);
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
      if (this.state.is13opt) {
        if (this.validate(this.state.rules3, this.state.Data)) {
          this.setState((state) => ({
            ...this.state,
            activepage: state.activepage + 1,
          }));
        }
      } else {
        this.setState((state) => ({
          ...this.state,
          activepage: state.activepage + 1,
        }));
      }
    } else if (this.state.activepage === 3) {
      this.setState((state) => ({
        ...this.state,
        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 4) {
      var count = 0;
      var checkBox1 = document.getElementById("checkBox1");
      var checkBox2 = document.getElementById("checkBox2");
      var checkBox3 = document.getElementById("checkBox3");
      var checkBox4 = document.getElementById("checkBox4");

      if (
        checkBox1.checked == false ||
        checkBox2.checked == false ||
        checkBox3.checked == false ||
        checkBox4.checked == false
      ) {
        count = 1;
      }

      if (count == 1) {
        alert(
          "Please read the Declaration Carefully and Accept the Terms & Conditions "
        );
      } else {
        this.setState((state) => ({
          ...this.state,

          activepage: state.activepage + 1,
        }));
      }
    } else if (this.state.activepage === 5) {
      if (this.validate(this.state.rules4, this.state.Data)) {
        this.setState((state) => ({
          ...this.state,
          activepage: state.activepage + 1,
        }));
      }
    } else if (this.state.activepage === 6) {
      this.setState((state) => ({
        ...this.state,
        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 7) {
      if (this.validate(this.state.rules5, this.state.Data)) {
        this.setState((state) => ({
          ...this.state,
          activepage: state.activepage + 1,
        }));
      }
    } else if (this.state.activepage === 8) {
      if (this.validate(this.state.rules6, this.state.Data)) {
        this.setState((state) => ({
          ...this.state,
          activepage: state.activepage + 1,
        }));
      }
    } else if (this.state.activepage === 9) {
      this.setState((state) => ({
        ...this.state,
        activepage: state.activepage + 1,
      }));
      // } else if (this.state.activepage === 10) {
      //   this.setState((state) => ({
      //     ...this.state,
      //     activepage: state.activepage + 1,
      //   }));
    }
  };
  validate = (rules, data) => {
    console.log("enter to validate");
    const errors = validator(rules)(data);
    console.log("after constan erroes", errors);
    const hasErrors = find(errors, (error) => error !== "");

    this.setState({ errors });
    return !hasErrors;
  };
  handleprev = () => {
    console.log("prevzip", this.state.Data);
    this.setState({
      activepage: this.state.activepage - 1,
    });
  };
  handleopt7 = (event) => {
    var value = event.target.value;
    var opt7yes = document.getElementById("opt7yes");
    var opt7no = document.getElementById("opt7no");
    if (opt7yes.checked && value == "Yes") {
      if (opt7no.checked) {
        opt7no.checked = false;
      }
    }
    if (opt7no.checked && value == "No") {
      if (opt7yes.checked) {
        opt7yes.checked = false;
      }
    }
  };
  handleopt5 = (event) => {
    var value = event.target.value;
    var opt5yes = document.getElementById("opt5yes");
    var opt5no = document.getElementById("opt5no");
    if (opt5yes.checked && value == "Yes") {
      if (opt5no.checked) {
        opt5no.checked = false;
      }
    }
    if (opt5no.checked && value == "No") {
      if (opt5yes.checked) {
        opt5yes.checked = false;
      }
    }
  };

  handleopt10 = (event) => {
    var value = event.target.value;
    var opt10yes = document.getElementById("opt10yes");
    var opt10no = document.getElementById("opt10no");
    if (opt10yes.checked && value == "Yes") {
      if (opt10no.checked) {
        opt10no.checked = false;
      }
    }
    if (opt10no.checked && value == "No") {
      if (opt10yes.checked) {
        opt10yes.checked = false;
      }
    }
  };
  handleopt12 = (event) => {
    var value = event.target.value;
    var opt12yes = document.getElementById("opt12yes");
    var opt12no = document.getElementById("opt12no");
    if (opt12yes.checked && value == "Yes") {
      this.setState((state) => ({
        ...this.state,

        isopt: true,
      }));
      if (opt12no.checked) {
        opt12no.checked = false;
      }
    }
    if (opt12no.checked && value == "No") {
      this.setState((state) => ({
        ...this.state,

        isopt: false,
      }));
      if (opt12yes.checked) {
        opt12yes.checked = false;
      }
    }
  };
  handleopt15 = (event) => {
    var value = event.target.value;
    var opt15yes = document.getElementById("opt15yes");
    var opt15no = document.getElementById("opt15no");
    if (opt15yes.checked && value == "Yes") {
      if (opt15no.checked) {
        opt15no.checked = false;
      }
    }
    if (opt15no.checked && value == "No") {
      if (opt15yes.checked) {
        opt15yes.checked = false;
      }
    }
  };
  onChange13opt = (event) => {
    console.log("uma");
    var value = event.target.value;

    var a = document.getElementById("yesopt");
    var b = document.getElementById("noopt");
    if (a.checked && value == "Yes") {
      this.setState((state) => ({
        ...this.state,

        is13opt: true,
      }));
      if (b.checked) {
        b.checked = false;
      }
    }
    if (b.checked && value == "No") {
      this.setState((state) => ({
        ...this.state,

        is13opt: false,
      }));
      if (a.checked) {
        a.checked = false;
      }
    }
  };
  onChangetable = (event) => {
    var value = event.target.value;

    var tableyes = document.getElementById("tableyes");
    var tableno = document.getElementById("tableno");
    if (tableyes.checked && value == "Yes") {
      this.setState((state) => ({
        ...this.state,
        istable: true,
      }));
      if (tableno.checked) {
        tableno.checked = false;
      }
    }
    if (tableno.checked && value == "No") {
      this.setState((state) => ({
        ...this.state,

        istable: false,
      }));
      if (tableyes.checked) {
        tableyes.checked = false;
      }
    }
  };

  // handleChange = (index) => (e) => {
  //   const { name, value } = e.target;
  //   const rows = [...this.state.rows];
  //   rows[index] = {
  //     ...this.state.rows[index],
  //     [name]: value,
  //   };
  //   this.setState({
  //     rows,
  //   });
  // };

  // handleAddRow = () => {
  //   let test = [...this.state.rows];
  //   test.push({ name: "", Qualification: "", Class: "", declaration: "" });
  //   this.setState({ rows: test });
  // };
  // handleRemoveRow = (idx) => {
  //   const rows = [...this.state.rows];
  //   rows.splice(idx, 1);
  //   this.setState({ rows });
  // };
  handleCheck = () => {
    console.log(this.state.checked);
    this.setState((state) => ({ checked: !this.state.checked }));
  };
  handlealert = () => {
    // this.props.signUp(data);
    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        this.state.Data,
        this.state.rows
      )
      .then((res) => {
        console.log(res);
        console.log(this.state.Data);
        console.log(this.state.rows);
      });
    this.setState((state) => ({
      ...this.state,
      isOpen: true,
    }));
  };
  handleDateChange = (name, date) => {
    this.setState({
      Data: {
        ...this.state.Data,
        [name]: moment(date).format("YYYY-MM-DD"),
      },
    });
  };
  onValueChange11l = (event) => {
    this.setState({
      selectedOption11l: event.target.value,
    });
  };
  handleTrack = () => {
    this.props.navigateTo("/navigationdrawer");
  };
  render() {
    let { inputFields } = this.state;
    const { classes } = this.props;
    const { loading, success, data, isOpen, errors } = this.state;

    return (
      <>
        <div className={classes.dashboardContent}>
          <Grid item xs={12} md={12}>
            <Typography className={classes.h6} variant="h6">
              Electrical contractor license Application for Grade-B
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
                          1 . Name of the electrical contrators license Applied
                          for
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
                            error={
                              errors.electricalContratorsName ? true : false
                            }
                            name="electricalContratorsName"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.electricalContratorsName}
                          ></TextField>
                        </FormControl>
                        {errors.electricalContratorsName ? (
                          <FormHelperText className={classes.error}>
                            {errors.electricalContratorsName}
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
                          2 . Business Pincode
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
                            error={errors.businessPincode ? true : false}
                            name="businessPincode"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.businessPincode}
                          ></TextField>
                        </FormControl>
                        {errors.businessPincode ? (
                          <FormHelperText className={classes.error}>
                            {errors.businessPincode}
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
                          3 . Business Email
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
                            error={errors.nameOfApplicant ? true : false}
                            name="businessEmail"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.businessEmail}
                          ></TextField>
                        </FormControl>
                        {errors.businessEmail ? (
                          <FormHelperText className={classes.error}>
                            {errors.businessEmail}
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
                          4 . Business Phonenumber
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
                            name="businessPhonenumber"
                            error={errors.businessPhonenumber ? true : false}
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.businessPhonenumber}
                          ></TextField>
                        </FormControl>
                        {errors.businessPhonenumber ? (
                          <FormHelperText className={classes.error}>
                            {errors.businessPhonenumber}
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
                          5 . Whether the Applicant is company Registered under
                          the Companies Act or Constituted under any other
                          enactment.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div onChange={this.handleopt5}>
                          {" "}
                          <input
                            type="radio"
                            value="Yes"
                            id="opt5yes"
                            name="opt5"
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="No"
                            id="opt5no"
                            name="opt5"
                          />{" "}
                          No{" "}
                        </div>
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
                          6 . If so Furnish Details and Documents to prove the
                          status of firm
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          name="opt6input"
                          onChange={this.onChangeZipopt6}
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
                          7 . Whether the Company has a Registered office in
                          kerala
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div onChange={this.handleopt7}>
                          {" "}
                          <input
                            id="opt7yes"
                            type="radio"
                            value="Yes"
                            name="opt7"
                          />{" "}
                          Yes{" "}
                          <input
                            id="opt7no"
                            type="radio"
                            value="No"
                            name="opt7"
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
                          8 . Full name and house address of Proprietor or
                          partners
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            rows="5"
                            multiline
                            style={{
                              overflow: "hidden",
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
                              errors.fullNameAndHouseAddressOfProprietor
                                ? true
                                : false
                            }
                            name="fullNameAndHouseAddressOfProprietor"
                            onChange={(e) => this.handleChange(e)}
                            value={
                              this.state.Data
                                .fullNameAndHouseAddressOfProprietor
                            }
                          ></TextField>
                        </FormControl>
                        {errors.fullNameAndHouseAddressOfProprietor ? (
                          <FormHelperText className={classes.error}>
                            {errors.fullNameAndHouseAddressOfProprietor}
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
                          9 . Full name of Agent or Manager (in the case of
                          limited Company)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            style={{
                              height: "90%",
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
                              errors.fullNameOfAgentOrManager ? true : false
                            }
                            name="fullNameOfAgentOrManager"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.fullNameOfAgentOrManager}
                          ></TextField>
                        </FormControl>
                        {errors.fullNameOfAgentOrManager ? (
                          <FormHelperText className={classes.error}>
                            {errors.fullNameOfAgentOrManager}
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
                          10 . Whether the applicant is a manufacturing firm or
                          production unit.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div onChange={this.handleopt10}>
                          {" "}
                          <input
                            id="opt10yes"
                            type="radio"
                            value="Yes"
                            name="opt10"
                          />{" "}
                          production unit
                          <input
                            id="opt10no"
                            type="radio"
                            value="No"
                            name="opt10"
                          />
                          Firm unit{" "}
                        </div>
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
                          11 . Name of the person who will sign documents on
                          behalf of the contractor (Not applicable to individual
                          contractors).
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
                            name="nameOfThePersonWhoWillSignDocumentsOnBehalfOfTheContractor"
                            onChange={(e) => this.handleChange(e)}
                            value={
                              this.state.Data
                                .nameOfThePersonWhoWillSignDocumentsOnBehalfOfTheContractor
                            }
                            error={
                              errors.nameOfThePersonWhoWillSignDocumentsOnBehalfOfTheContractor
                                ? true
                                : false
                            }
                          ></TextField>
                        </FormControl>
                        {errors.nameOfThePersonWhoWillSignDocumentsOnBehalfOfTheContractor ? (
                          <FormHelperText className={classes.error}>
                            {
                              errors.nameOfThePersonWhoWillSignDocumentsOnBehalfOfTheContractor
                            }
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
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          12 . Whether a contractor’s licence has been
                          previously granted in the same name
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div onChange={this.handleopt12}>
                          {" "}
                          <input
                            id="opt12yes"
                            type="radio"
                            value="Yes"
                            name="opt12"
                          />{" "}
                          Yes{" "}
                          <input
                            id="opt12no"
                            type="radio"
                            value="No"
                            name="opt12"
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      {this.state.isopt ? (
                        <>
                          <Grid item xs={12} md={6}>
                            <Typography
                              style={{
                                color: "#646d7e",
                                opacity: "1",
                                fontWeight: "600",
                                fontSize: "small",
                              }}
                            >
                              13 . If yes mention the details
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
                                error={
                                  errors.detailsOfContractorsLicence
                                    ? true
                                    : false
                                }
                                name="detailsOfContractorsLicence"
                                onChange={(e) => this.handleChange(e)}
                                value={
                                  this.state.Data.detailsOfContractorsLicence
                                }
                              ></TextField>
                            </FormControl>
                            {errors.detailsOfContractorsLicence ? (
                              <FormHelperText className={classes.error}>
                                {errors.detailsOfContractorsLicence}
                              </FormHelperText>
                            ) : (
                              ""
                            )}
                          </Grid>
                        </>
                      ) : null}
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          14 . Whether a contractor’s Licence has been issued
                          under this name by any other Licensing Board, if so,
                          please
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div
                          onChange={this.onChange13opt}

                          //   ondblclick={this.ondblclickradio}
                        >
                          {" "}
                          <input
                            type="radio"
                            value="Yes"
                            id="yesopt"
                            name="opt13"
                          />{" "}
                          Yes{" "}
                          <input
                            id="noopt"
                            type="radio"
                            value="No"
                            name="opt13"
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      {this.state.is13opt ? (
                        <>
                          <Grid item xs={12} md={6}>
                            <Typography
                              style={{
                                color: "#646d7e",
                                opacity: "1",
                                fontWeight: "600",
                                fontSize: "small",
                              }}
                            >
                              1 . Name of issuing Authority:
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
                                error={
                                  errors.nameOfIssuingAuthority ? true : false
                                }
                                name="nameOfIssuingAuthority"
                                onChange={(e) => this.handleChange(e)}
                                value={this.state.Data.nameOfIssuingAuthority}
                              ></TextField>
                            </FormControl>
                            {errors.nameOfIssuingAuthority ? (
                              <FormHelperText className={classes.error}>
                                {errors.nameOfIssuingAuthority}
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
                              2 . Date of issue:
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
                                  name="issueDate"
                                  id="date-picker-dialog"
                                  format="dd/MM/yyyy"
                                  disableOpenOnEnter
                                  // error={errors.to_date ? true : false}
                                  value={this.state.Data.issueDate}
                                  onChange={(date) =>
                                    this.handleDateChange("issueDate", date)
                                  }
                                  error={errors.issueDate ? true : false}
                                  KeyboardButtonProps={{
                                    "aria-label": "change date",
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </MuiPickersUtilsProvider>
                            </FormControl>
                            {errors.issueDate ? (
                              <FormHelperText className={classes.error}>
                                {errors.issueDate}
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
                              3 . Date of expiry of Licence
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
                                  name="expiryDate"
                                  id="date-picker-dialog"
                                  format="dd/MM/yyyy"
                                  disableOpenOnEnter
                                  // error={errors.to_date ? true : false}
                                  value={this.state.Data.expiryDate}
                                  onChange={(date) =>
                                    this.handleDateChange("expiryDate", date)
                                  }
                                  KeyboardButtonProps={{
                                    "aria-label": "change date",
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  error={errors.expiryDate ? true : false}
                                />
                              </MuiPickersUtilsProvider>
                            </FormControl>
                            {errors.expiryDate ? (
                              <FormHelperText className={classes.error}>
                                {errors.expiryDate}
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
                              4 . Details of works permitted to be undertaken
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
                                error={
                                  errors.detailsOfWorksPermitted ? true : false
                                }
                                name="detailsOfWorksPermitted"
                                onChange={(e) => this.handleChange(e)}
                                value={this.state.Data.detailsOfWorksPermitted}
                              ></TextField>
                            </FormControl>
                            {errors.detailsOfWorksPermitted ? (
                              <FormHelperText className={classes.error}>
                                {errors.detailsOfWorksPermitted}
                              </FormHelperText>
                            ) : (
                              ""
                            )}
                          </Grid>
                        </>
                      ) : null}

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
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          15 . Whether the staff indicated below are exclusively
                          earmarked for the work under the Licensing Board rules
                          and Regulation 29 of the Central Electricity Authority
                          (Measures Relating to Safety and Electric Supply)
                          Regulations, 2010.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div onChange={this.handleopt15}>
                          {" "}
                          <input
                            id="opt15yes"
                            type="radio"
                            value="Yes"
                            name="opt15"
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="No"
                            name="opt15"
                            id="opt15no"
                          />{" "}
                          No{" "}
                        </div>
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
                          16 . Name of all persons employed in full time basis
                          having technical qualifications and experience that
                          are approved by the Board for the grant of Grade ‘B’
                          licence.
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <div className={classes.cctnsearchBox}>
                          <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} md={12}>
                              <Button
                                // size="medium"
                                onClick={this.handleAddRow}
                                className={this.props.classes.additem}
                              >
                                Add person
                                <AddIcon
                                  className={this.props.classes.AddIcon}
                                />
                              </Button>
                              <center>
                                <Table
                                  aria-label="simple table"
                                  className={this.props.classes.table}
                                >
                                  <TableHead
                                    className={this.props.classes.tablehead}
                                  >
                                    <TableRow>
                                      <TableCell
                                        className={this.props.classes.TableCell}
                                        align="left"
                                      >
                                        Sl no
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        className={this.props.classes.TableCell}
                                      >
                                        {" "}
                                        Name{" "}
                                      </TableCell>
                                      <TableCell
                                        className={this.props.classes.TableCell}
                                        align="left"
                                      >
                                        Qualification
                                      </TableCell>
                                      <TableCell
                                        className={this.props.classes.TableCell}
                                        align="left"
                                      >
                                        Class of certificate and permit with
                                        their number and date issued by the
                                        Board{" "}
                                      </TableCell>
                                      <TableCell
                                        className={this.props.classes.TableCell}
                                        align="left"
                                      >
                                        Whether declarations from them in the
                                        form appended have been attached (yes or
                                        no)
                                      </TableCell>
                                      <TableCell
                                        className={this.props.classes.TableCell}
                                        align="left"
                                      >
                                        Delete
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {/* {console.log(this.state.rows)} */}
                                    {this.state.rows.map((item, idx) => (
                                      <TableRow>
                                        <TableCell align="left">
                                          {idx + 1}
                                        </TableCell>
                                        <TableCell align="left" name="value">
                                          <TextField
                                            type="text"
                                            name="name"
                                            multiline
                                            // rowsMax="3"
                                            align="left"
                                            value={item.name}
                                            variant="outlined"
                                            onChange={this.handleChange1(idx)}
                                            className={
                                              this.props.classes.inputbase
                                            }
                                          />
                                        </TableCell>
                                        <TableCell align="left" name="value">
                                          <TextField
                                            multiline
                                            type="text"
                                            align="left"
                                            name="Qualification"
                                            value={item.Qualification}
                                            variant="outlined"
                                            onChange={this.handleChange1(idx)}
                                            className={
                                              this.props.classes.inputbase2
                                            }
                                          >
                                            {/* {idx + 1} */}
                                          </TextField>
                                        </TableCell>
                                        <TableCell align="left" name="value">
                                          <TextField
                                            multiline
                                            type="text"
                                            align="left"
                                            name="Class"
                                            value={item.Class}
                                            variant="outlined"
                                            onChange={this.handleChange1(idx)}
                                            className={
                                              this.props.classes.inputbase2
                                            }
                                          >
                                            {/* {idx + 1} */}
                                          </TextField>
                                        </TableCell>
                                        <TableCell align="left" name="value">
                                          <TextField
                                            multiline
                                            type="text"
                                            align="left"
                                            name="status"
                                            value={item.status}
                                            variant="outlined"
                                            onChange={this.handleChange1(idx)}
                                            className={
                                              this.props.classes.inputbase2
                                            }
                                          >
                                            {/* {idx + 1} */}
                                          </TextField>{" "}
                                        </TableCell>
                                        <TableCell align="left">
                                          <DeleteIcon
                                            className={
                                              this.props.classes.deleteitem
                                            }
                                            onClick={(e) =>
                                              this.handleRemoveRow(idx)
                                            }
                                          ></DeleteIcon>
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </center>
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
                                Attach the declarations from them in the form
                                appended if yes metioned in the above table
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <input
                                className={classes.customFileUpload}
                                type="file"
                                onChange={this.onChangeZiptable}
                              />
                            </Grid>
                          </Grid>
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
                          Declaration :
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <label
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          <Checkbox
                            // type="checkbox"
                            className={classes.checked}
                            id="checkBox1"
                            name="checkBox1"
                            defaultChecked={false}
                            // onChange={this.handleCheck}
                          />
                          I / We hereby declare that the staff specified in
                          column 12 is intended exclusively for attending to the
                          work under the Licensing Board Rules and under
                          regulation 29 of the CEA (Measures relating to safety
                          and Electric Supply) regulation2010. The service of
                          the staff will not be utilized for routine operations
                          in the establishment nor will they be mixed up with
                          the staff employed under rule regulation 3 of the
                          Central Electricity Authority (Measures relating to
                          safety and Electric Supply) regulation2010.
                        </label>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <label
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          <Checkbox
                            // type="checkbox"
                            className={classes.checked}
                            id="checkBox2"
                            name="checkBox2"
                            defaultChecked={false}
                            // onChange={this.handleCheck}
                          />
                          I / We hereby declare that I/We have in my/our
                          possession a latest copy of the Kerala State
                          Electricity Licensing Board Rules, Electricity Act,
                          2003,the Central Electricity Authority (Measures
                          Relating to safety and Electric Supply) Regulations,
                          2010, Central Electricity Authority (Technical
                          Standard for Construction of Electrical plants and
                          Electrical Lines) Regulation, 2010 , Kerala Lift and
                          Escalators Act, 2013 and the rules there under as well
                          as relevant codes of Practice and Standards of BIS/IEC
                          relating to Electrical Installations.
                        </label>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <label
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          <Checkbox
                            // type="checkbox"
                            className={classes.checked}
                            id="checkBox3"
                            name="checkBox3"
                            defaultChecked={false}
                            // onChange={this.handleCheck}
                          />
                          I / We fully understand the terms and conditions under
                          which an electrical contractor’s licence is granted, a
                          breach of which will render the licence liable to
                          cancellation.
                        </label>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <label
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          <Checkbox
                            // type="checkbox"
                            className={classes.checked}
                            id="checkBox4"
                            name="checkBox4"
                            defaultChecked={false}
                            // onChange={this.handleCheck}
                          />
                          I / We hereby also declare that the particulars stated
                          above are correct to the best of my/our knowledge and
                          belief. I also agree to maintain such registers and
                          records as ma y be prescribed by the Board in the
                          forms specified for the purpose.
                        </label>
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
          {this.state.activepage == 5 && (
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
                            error={errors.placeOfTheApplicant ? true : false}
                            name="placeOfTheApplicant"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.placeOfTheApplicant}
                          ></TextField>
                        </FormControl>
                        {errors.placeOfTheApplicant ? (
                          <FormHelperText className={classes.error}>
                            {errors.placeOfTheApplicant}
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
                              name="Date1"
                              id="date-picker-dialog"
                              format="dd/MM/yyyy"
                              disableOpenOnEnter
                              // error={errors.to_date ? true : false}
                              value={this.state.Data.Date1}
                              onChange={(date) =>
                                this.handleDateChange("Date1", date)
                              }
                              error={errors.Date1 ? true : false}
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                              InputProps={{ disableUnderline: true }}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </MuiPickersUtilsProvider>
                        </FormControl>
                        {errors.Date1 ? (
                          <FormHelperText className={classes.error}>
                            {errors.Date1}
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
                          onChange={this.onChangeZipsign}
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
                          Address of the Applicant
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
                            error={errors.addressOfTheApplicant ? true : false}
                            name="addressOfTheApplicant"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.addressOfTheApplicant}
                          ></TextField>
                        </FormControl>
                        {errors.addressOfTheApplicant ? (
                          <FormHelperText className={classes.error}>
                            {errors.addressOfTheApplicant}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Typography className={classes.h6In} variant="h6">
                          Instructions for the Grant of Contractor’s Licence
                          Grade ‘B’
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
                          (a) Class ‘B’ Contractor’s licence shall be granted
                          only to a person or a firm having a registered Office
                          in Kerala, unless exempted from this requirement by
                          the Board.
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
                          (b) The fee should be paid by means of challan
                          remitted at any Govt. Treasury or through
                          Janasevanakendram in favor of the Secretary, Kerala
                          State Electricity Licensing Board, Thiruvananthapuram.
                          The fee once remitted into the treasury will not be
                          refunded or adjusted against any other purpose.
                        </Typography>
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
          {this.state.activepage == 6 && (
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
                          (c) Nature of work: To carry out Low Voltage and
                          Medium Voltage electrical installation works as
                          specified in the License. The Board however reserves
                          the right to reduce or enhance this limit if found
                          necessary subsequently.
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
                          (d) Establishment:
                          <br></br>
                          The applicant shall employ solely for the purpose of
                          contract works the following minimum of staff on full
                          time basis.
                          <br></br>
                          1. One Supervisor holding Supervisory Permit Grade ‘B’
                          issued by the Kerala State Electricity Licensing
                          Board.
                          <br></br>
                          2. Two numbers Wiremen for up to 50 kW, three numbers
                          Wiremen for 150 kW, four numbers Wiremen for 250 kW.
                          Wiremen should possess the Wiremen Permit issued by
                          the Board.
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
                          (e) The applicant shall possess the following
                          instruments:
                          <br></br>
                          1. Insulation tester 500 V ((1000 V insulation tester
                          also required for the scope above 50 kW)
                          <br></br>
                          2. Earth tester
                          <br></br>
                          3. Phase sequence indicator (scope above 150kW)
                          <br></br>
                          4. Tong Tester - 600 V,300A
                          <br></br>
                          5. Neon testers & Multimeter
                          <br></br>
                          6. All Wiring Tools.
                          <br></br>
                          Crimping Tool - 25 mm2 for 25 kW
                          <br></br>
                          Crimping Tool - 150 mm2 for 50 kW Crimping Tool - 400
                          mm2 for 150kW & 250 kW
                          <br></br>
                          Any other instruments which may be considered
                          necessary by the Board.
                        </Typography>
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
          {this.state.activepage == 7 && (
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
                          The instruments shall be got tested at any of the
                          Laboratory attached to the Department of Electrical
                          Inspectorate or such other laboratory approved by the
                          Board. Initially before the issue of licence and
                          thereafter at specified intervals and the test report
                          produced to the Licensing Board for perusal and
                          return.
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
                          (f) Production units or manufacturing concerns should
                          segregate the staff employed for the purpose of
                          contractor’s licence from the staff engaged for
                          routine operations of the factories. The staff
                          employed under the Licensing Board Rules and under
                          Regulation 3 of the Central Electricity Authority
                          (Measures Relating to Safety and Electric Supply)
                          Regulation, 2010 shall not on any account be mixed up.
                          Failure to keep separate staff for the purpose of the
                          Licensing Board Rules and Regulation 29 of the Central
                          Electricity Authority (Measures Relating to Safety and
                          Electric Supply) Regulation, 2010 shall be deemed to
                          constitute violation of the rules and shall render the
                          licence is liable for cancellation.
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
                          (g) The applicant should have adequate office
                          facilities for the preparation of drawings, blue
                          prints etc. Also applicant should have library
                          facility.
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
                          A Challan Ammount As License fee
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
                            error={errors.challanAmmount ? true : false}
                            name="challanAmmount"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.challanAmmount}
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

                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          Challan Number of License fee
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
                            error={errors.challanNo ? true : false}
                            name="challanNo"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.challanNo}
                          ></TextField>
                        </FormControl>

                        {errors.challanNo ? (
                          <FormHelperText className={classes.error}>
                            {errors.challanNo}
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
                          Applied Date
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
                              InputProps={{ disableUnderline: true }}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              error={errors.challanDate ? true : false}
                              disableToolbar
                              name="challanDate"
                              id="date-picker-dialog"
                              format="dd/MM/yyyy"
                              disableOpenOnEnter
                              // error={errors.to_date ? true : false}
                              value={this.state.Data.challanDate}
                              onChange={(date) =>
                                this.handleDateChange("challanDate", date)
                              }
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                            />
                          </MuiPickersUtilsProvider>
                        </FormControl>
                        {errors.challanDate ? (
                          <FormHelperText className={classes.error}>
                            {errors.challanDate}
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
                          Name of Treasury
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
                            error={errors.NameOfTreasury ? true : false}
                            name="NameOfTreasury"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.NameOfTreasury}
                          ></TextField>
                        </FormControl>
                        {errors.NameOfTreasury ? (
                          <FormHelperText className={classes.error}>
                            {errors.NameOfTreasury}
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
                          A Challan Ammount for the Staff Register
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
                            error={
                              errors.AChallanforRsOfStaffRegister ? true : false
                            }
                            name="AChallanforRsOfStaffRegister"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.AChallanforRsOfStaffRegister}
                          ></TextField>
                        </FormControl>
                        {errors.AChallanforRsOfStaffRegister ? (
                          <FormHelperText className={classes.error}>
                            {errors.AChallanforRsOfStaffRegister}
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
                          Challan Number of Staff Registered
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
                            error={
                              errors.challanNoOfStaffRegister ? true : false
                            }
                            name="challanNoOfStaffRegister"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.challanNoOfStaffRegister}
                          ></TextField>
                        </FormControl>
                        {errors.challanNoOfStaffRegister ? (
                          <FormHelperText className={classes.error}>
                            {errors.challanNoOfStaffRegister}
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
                          Applied Date
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
                              InputProps={{ disableUnderline: true }}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              error={errors.challanDate1 ? true : false}
                              disableToolbar
                              name="challanDate1"
                              id="date-picker-dialog"
                              format="dd/MM/yyyy"
                              disableOpenOnEnter
                              // error={errors.to_date ? true : false}
                              value={this.state.Data.challanDate1}
                              onChange={(date) =>
                                this.handleDateChange("challanDate1", date)
                              }
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                            />
                          </MuiPickersUtilsProvider>
                        </FormControl>
                        {errors.challanDate1 ? (
                          <FormHelperText className={classes.error}>
                            {errors.challanDate1}
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
                          Name of Treasury
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
                            error={
                              errors.nameOfTreasuryOfStaffRegister
                                ? true
                                : false
                            }
                            name="nameOfTreasuryOfStaffRegister"
                            onChange={(e) => this.handleChange(e)}
                            value={
                              this.state.Data.nameOfTreasuryOfStaffRegister
                            }
                          ></TextField>
                        </FormControl>
                        {errors.nameOfTreasuryOfStaffRegister ? (
                          <FormHelperText className={classes.error}>
                            {errors.nameOfTreasuryOfStaffRegister}
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
          {this.state.activepage == 8 && (
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
                          Two Copies of passport size photograph of applicant
                          duly attested on back as follows: “This is the
                          photograph of Shri / Smt.............…attested.”
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipphotograph}
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
                          Two specimen signature duly attested by a Gazetted
                          Officer.
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
                          A self-addressed and sufficiently stamped envelop
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZip}
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
                          Supervisors Permit Number
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
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
                          name="supervisorsPermitNumber"
                          onChange={(e) => this.handleChange(e)}
                          value={this.state.Data.supervisorsPermitNumber}
                        ></TextField>
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
                          Original permits of Wireman
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipwiremanpermits}
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
                          Properly filled up declaration of supervisors and
                          wireman duly attested by the District Electrical
                          Inspector (Court fee stamp for ` 5 should be affixed
                          on each declaration)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipdulyattested}
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
          {this.state.activepage == 9 && (
            <div className={classes.cctnResults}>
              {/* <Grid item xs={12}>
              <EmptyListing emptyText="Your application status will appear here" />
            </Grid> */}
              <Grid xs={12} md={12}>
                <Paper boxShadow={3}>
                  <div className={classes.cctnsearchBox}>
                    <Grid container direction="row" spacing={3}>
                      <Grid item xs={12} md={12}>
                        <Typography className={classes.h6V} variant="h6">
                          Valid Test Reports of following instruments:
                          <br></br>
                          (Specify the Make, Serial No., Range, No. and Date of
                          Test Reports:)
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
                          1. Tong Tester 300A,600V.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipTongTester}
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
                          2. Insulation Tester 500 V / 1000 V.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipInsulation}
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
                          3. 500V for scope of LV / MV installations up to 25 kW
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipLv}
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
                          4. 1000 V (Also required for scope of LV / MV
                          installations up to 50 kW. and above)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZip1000v}
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
                          5. Earth Tester (For All Scope)
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipEarthTester}
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
          {this.state.activepage == 10 && (
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
                          6. Phase sequence indicator (In the case of all MV
                          installations 150 kW MV Installations and 250 kW)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipindicator}
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
                          7. Neon-Tester
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipNeonTester}
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
                          8. Crimping Tools (For all scope)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipCrimping}
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
                          9. Multimeter
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipMultimeter}
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
                          Inspection Report from Electrical Inspector/Dy Chief
                          Electrical Inspector regarding the facilities provided
                          in the prescribed format. (All LT and MV Electrical
                          Installations upto and including 250 kW including
                          Generator installations up to and including 250 kVA)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipinstallations}
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
                      href="/navigationdrawer"
                      onClick={this.handleTrack}
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

gradeb.propTypes = {
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

export const styledgradeb = withStyles(styles)(gradeb);

export default connect(mapStateToProps, mapDispatchToProps)(styledgradeb);
