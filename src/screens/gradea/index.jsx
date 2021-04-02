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
import FormHelperText from "@material-ui/core/FormHelperText";

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
import { DatePicker } from "material-ui-pickers";
import moment from "moment";
import axios from "axios";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
class gradea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      istable: false,
      isOpen: false,
      activepage: 0,
      checked: false,
      is13opt: false,
      isopt: false,
      checkBox1: false,
      checkBox2: false,
      checkBox3: false,
      checkBox4: false,
      rows: [{}],
      rows1: [{}],
      rows2: [{}],
      rows3: [{}],
      rows4: [{}],
      values: [],
      isyesisticked: false,
      Data: {
        fileZipAgencies: null,
        fileZipLicensingBoard: null,
        fileZipFinancialPosition: null,
        fileZipMajorworks: null,
        fileZipOwnership: null,
        fileZipFabrication: null,
        fileZipFacility: null,
        fileZipDetails: null,
        fileZipStatement: null,
        fileZipStatus: null,
        fileZipSignature1: null,
        fileZipAttach: null,
        fileZipFurnishDetails: null,
        date1: null,
        expiryDate: null,
        issueDate: null,
        applicationDate: null,
        electricalContratorsName: "",
        businessPincode: "",
        businessEmail: "",
        businessPhonenumber: "",
        fullNameAndHouseAddressOfProprietor: "",
        fullNameOfAgentOrManager: "",
        nameOfThePersonWhoWillSignDocuments: "",
        detailsOfContractorsLicence: "",
        nameOfIssuingAuthority: "",
        detailsOfWorksPermitted: "",
        placeOfTheApplicant: "",
        addressOfTheApplicant: "",
        // AChallanforRs: "",
        // challanNo: "",
        // NameOfTreasury: "",
        // AChallanforRsOfStaffRegister: "",
        // challanNoOfStaffRegister: "",
        // nameOfTreasuryOfStaffRegister: "",
        // supervisorsPermitNumber: "",
        checkListNameOfTheApplicant: "",
        checkListBusinessAddress: "",
        checkListBusinessPincode: "",
        checkListBusinessEmail: "",
        checkListNameOfAuthorizedPersonSigningDocuments: "",
        checkListAddressOfRegisteredOffice: "",
        checkListProprietaryConcern: "",
        checkListDetailsOfOfficefacility: "",
      },
      errors: {
        date1: null,
        expiryDate: null,
        issueDate: null,
        applicationDate: null,
        electricalContratorsName: "",
        businessPincode: "",
        businessEmail: "",
        businessPhonenumber: "",
        fullNameAndHouseAddressOfProprietor: "",
        fullNameOfAgentOrManager: "",
        nameOfThePersonWhoWillSignDocuments: "",
        detailsOfContractorsLicence: "",
        nameOfIssuingAuthority: "",
        detailsOfWorksPermitted: "",
        placeOfTheApplicant: "",
        addressOfTheApplicant: "",
        // AChallanforRs: "",
        // challanNo: "",
        // NameOfTreasury: "",
        // AChallanforRsOfStaffRegister: "",
        // challanNoOfStaffRegister: "",
        // nameOfTreasuryOfStaffRegister: "",
        // supervisorsPermitNumber: "",
        checkListNameOfTheApplicant: "",
        checkListBusinessAddress: "",
        checkListBusinessPincode: "",
        checkListBusinessEmail: "",
        checkListAddressOfRegisteredOffice: "",
        checkListNameOfAuthorizedPersonSigningDocuments: "",
        checkListProprietaryConcern: "",
        checkListDetailsOfOfficefacility: "",
      },
      rules1: {
        electricalContratorsName: {
          required: true,
        },
        businessPincode: { required: true, pincode: true },
        businessEmail: { required: true, email: true },
      },
      rules2: {
        fullNameAndHouseAddressOfProprietor: { required: true },
        fullNameOfAgentOrManager: { required: true },
        nameOfThePersonWhoWillSignDocuments: { required: true },
        detailsOfContractorsLicence: { required: true },
      },
      rules3: {
        nameOfIssuingAuthority: { required: true },
        issueDate: { required: true },
        expiryDate: { required: true },
        detailsOfWorksPermitted: { required: true },
      },
      rules4: {
        placeOfTheApplicant: { required: true },
        addressOfTheApplicant: { required: false },
      },
      rules5: {
        checkListNameOfTheApplicant: { required: true },
        checkListBusinessAddress: { required: true },
        checkListBusinessPincode: { required: true, pincode: true },
        checkListBusinessEmail: { required: true, email: true },
        checkListAddressOfRegisteredOffice: { required: true },
        checkListNameOfAuthorizedPersonSigningDocuments: { required: true },
      },
      rules6: {
        applicationDate: { required: true },
        checkListProprietaryConcern: { required: false },
      },
      rules7: {
        checkListDetailsOfOfficefacility: { required: false },
      },
    };
  }
  handleChange = (event) => {
    this.setState({
      Data: {
        ...this.state.Data,

        [event.target.name]: event.target.value,
      },
    });
  };
  onChangeZipAgencies = (e) => {
    this.state.Data.fileZipAgencies = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipAgencies: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipLicensingBoard = (e) => {
    this.state.Data.fileZipLicensingBoard = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipLicensingBoard: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipFinancialPosition = (e) => {
    this.state.Data.fileZipFinancialPosition = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipFinancialPosition: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipMajorworks = (e) => {
    this.state.Data.fileZipMajorworks = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipMajorworks: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipOwnership = (e) => {
    this.state.Data.fileZipOwnership = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipOwnership: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipFabrication = (e) => {
    this.state.Data.fileZipFabrication = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipFabrication: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipFacility = (e) => {
    this.state.Data.fileZipFacility = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipFacility: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipDetails = (e) => {
    this.state.Data.fileZipDetails = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipDetails: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipStatement = (e) => {
    this.state.Data.fileZipStatement = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipStatement: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipStatus = (e) => {
    this.state.Data.fileZipStatus = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipStatus: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipSignature1 = (e) => {
    this.state.Data.fileZipSignature1 = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipSignature1: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipAttach = (e) => {
    this.state.Data.fileZipAttach = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipAttach: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onChangeZipFurnishDetails = (e) => {
    this.state.Data.fileZipFurnishDetails = e.target.files[0];
    console.log("you", this.state.Data);
    console.log("me", e.target.files[0]);
    this.setState({
      Data: { ...this.state.Data, fileZipFurnishDetails: e.target.files[0] },
    });
    console.log("Data", this.state.Data);
  };
  onValueChange9a = (event) => {
    this.setState({
      selectedOption9a: event.target.value,
    });
  };

  onValueChange9c = (event) => {
    this.setState({
      selectedOption9c: event.target.value,
    });
  };
  onValueChange9d = (event) => {
    this.setState({
      selectedOption9d: event.target.value,
    });
  };

  onValueChange11a = (event) => {
    this.setState({
      selectedOption11a: event.target.value,
    });
  };
  onValueChange11b = (event) => {
    this.setState({
      selectedOption11b: event.target.value,
    });
  };
  onValueChange11c = (event) => {
    this.setState({
      selectedOption11c: event.target.value,
    });
  };
  onValueChange11d = (event) => {
    this.setState({
      selectedOption11d: event.target.value,
    });
  };
  onValueChange11e = (event) => {
    this.setState({
      selectedOption11e: event.target.value,
    });
  };
  onValueChange11f = (event) => {
    this.setState({
      selectedOption11f: event.target.value,
    });
  };
  onValueChange11g = (event) => {
    this.setState({
      selectedOption11g: event.target.value,
    });
  };
  onValueChange11h = (event) => {
    this.setState({
      selectedOption11h: event.target.value,
    });
  };
  onValueChange11i = (event) => {
    this.setState({
      selectedOption11i: event.target.value,
    });
  };
  onValueChange11j = (event) => {
    this.setState({
      selectedOption11j: event.target.value,
    });
  };
  onValueChange11k = (event) => {
    this.setState({
      selectedOption11k: event.target.value,
    });
  };
  onValueChange11l = (event) => {
    this.setState({
      selectedOption11l: event.target.value,
    });
  };
  onValueChange12a = (event) => {
    this.setState({
      selectedOption12a: event.target.value,
    });
  };
  onValueChange12b = (event) => {
    this.setState({
      selectedOption12b: event.target.value,
    });
  };
  onValueChange12c = (event) => {
    this.setState({
      selectedOption12c: event.target.value,
    });
  };
  onValueChange12d = (event) => {
    this.setState({
      selectedOption12d: event.target.value,
    });
  };
  onValueChange12e = (event) => {
    this.setState({
      selectedOption12e: event.target.value,
    });
  };
  onValueChange12f = (event) => {
    this.setState({
      selectedOption12f: event.target.value,
    });
  };
  onValueChange12g = (event) => {
    this.setState({
      selectedOption12g: event.target.value,
    });
  };
  onValueChange12h = (event) => {
    this.setState({
      selectedOption12h: event.target.value,
    });
  };
  onValueChange12i = (event) => {
    this.setState({
      selectedOption12i: event.target.value,
    });
  };
  onValueChange12j = (event) => {
    this.setState({
      selectedOption12j: event.target.value,
    });
  };
  onValueChange14a = (event) => {
    this.setState({
      selectedOption14a: event.target.value,
    });
  };
  onValueChange14b = (event) => {
    this.setState({
      selectedOption14b: event.target.value,
    });
  };
  onValueChange14c = (event) => {
    this.setState({
      selectedOption14c: event.target.value,
    });
  };
  onValueChange14d = (event) => {
    this.setState({
      selectedOption14d: event.target.value,
    });
  };
  onValueChange14e = (event) => {
    this.setState({
      selectedOption14e: event.target.value,
    });
  };
  onValueChange13a = (event) => {
    this.setState({
      selectedOption13a: event.target.value,
    });
  };
  onValueChange13b = (event) => {
    this.setState({
      selectedOption13b: event.target.value,
    });
  };
  onValueChange13c = (event) => {
    this.setState({
      selectedOption13c: event.target.value,
    });
  };
  onValueChange13d = (event) => {
    this.setState({
      selectedOption13d: event.target.value,
    });
  };
  onValueChange13e = (event) => {
    this.setState({
      selectedOption13e: event.target.value,
    });
  };
  onValueChange13f = (event) => {
    this.setState({
      selectedOption13f: event.target.value,
    });
  };
  onValueChange13g = (event) => {
    this.setState({
      selectedOption13g: event.target.value,
    });
  };
  onValueChange13h = (event) => {
    this.setState({
      selectedOption13h: event.target.value,
    });
  };
  onValueChange13i = (event) => {
    this.setState({
      selectedOption13i: event.target.value,
    });
  };
  onValueChange13j = (event) => {
    this.setState({
      selectedOption13j: event.target.value,
    });
  };
  onValueChange13k = (event) => {
    this.setState({
      selectedOption13k: event.target.value,
    });
  };
  onValueChange13l = (event) => {
    this.setState({
      selectedOption13l: event.target.value,
    });
  };
  onValueChange13m = (event) => {
    this.setState({
      selectedOption13m: event.target.value,
    });
  };
  onValueChange13n = (event) => {
    this.setState({
      selectedOption13n: event.target.value,
    });
  };
  onValueChange13o = (event) => {
    this.setState({
      selectedOption13o: event.target.value,
    });
  };
  onValueChange13p = (event) => {
    this.setState({
      selectedOption13p: event.target.value,
    });
  };
  onValueChange13q = (event) => {
    this.setState({
      selectedOption13q: event.target.value,
    });
  };
  onValueChange13r = (event) => {
    this.setState({
      selectedOption13r: event.target.value,
    });
  };
  onValueChange13s = (event) => {
    this.setState({
      selectedOption13s: event.target.value,
    });
  };
  onValueChange13t = (event) => {
    this.setState({
      selectedOption13t: event.target.value,
    });
  };
  onValueChange13u = (event) => {
    this.setState({
      selectedOption13u: event.target.value,
    });
  };
  onValueChange13v = (event) => {
    this.setState({
      selectedOption13v: event.target.value,
    });
  };
  onValueChange13w = (event) => {
    this.setState({
      selectedOption13w: event.target.value,
    });
  };
  onValueChange13x = (event) => {
    this.setState({
      selectedOption13x: event.target.value,
    });
  };
  onValueChange13y = (event) => {
    this.setState({
      selectedOption13y: event.target.value,
    });
  };
  onValueChange13z = (event) => {
    this.setState({
      selectedOption13z: event.target.value,
    });
  };

  onValueChange12a = (event) => {
    this.setState({
      selectedOption12a: event.target.value,
    });
  };
  onValueChange12b = (event) => {
    this.setState({
      selectedOption12b: event.target.value,
    });
  };
  onValueChange12c = (event) => {
    this.setState({
      selectedOption12c: event.target.value,
    });
  };
  onValueChange12d = (event) => {
    this.setState({
      selectedOption12d: event.target.value,
    });
  };
  onValueChange12e = (event) => {
    this.setState({
      selectedOption12e: event.target.value,
    });
  };
  onValueChange12f = (event) => {
    this.setState({
      selectedOption12f: event.target.value,
    });
  };
  onValueChange12g = (event) => {
    this.setState({
      selectedOption12g: event.target.value,
    });
  };
  onValueChange12h = (event) => {
    this.setState({
      selectedOption12h: event.target.value,
    });
  };
  onValueChange12i = (event) => {
    this.setState({
      selectedOption12i: event.target.value,
    });
  };
  onValueChange12j = (event) => {
    this.setState({
      selectedOption12j: event.target.value,
    });
  };
  validate = (rules, data) => {
    console.log("enter to validate");
    const errors = validator(rules)(data);
    console.log("after constan erroes", errors);
    const hasErrors = find(errors, (error) => error !== "");

    this.setState({ errors });
    return !hasErrors;
  };
  handlenext = () => {
    if (this.state.activepage === 0) {
      if (this.validate(this.state.rules1, this.state.Data)) {
        this.setState({
          activepage: this.state.activepage + 1,
        });
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
      this.setState((state) => ({
        ...this.state,
        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 8) {
      if (this.validate(this.state.rules5, this.state.Data)) {
        this.setState((state) => ({
          ...this.state,
          activepage: state.activepage + 1,
        }));
      }
    } else if (this.state.activepage === 9) {
      if (this.validate(this.state.rules6, this.state.Data)) {
        this.setState((state) => ({
          ...this.state,
          activepage: state.activepage + 1,
        }));
      }
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
    } else if (this.state.activepage === 13) {
      this.setState((state) => ({
        ...this.state,
        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 14) {
      this.setState((state) => ({
        ...this.state,
        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 15) {
      this.setState((state) => ({
        ...this.state,
        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 16) {
      this.setState((state) => ({
        ...this.state,
        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 17) {
      this.setState((state) => ({
        ...this.state,
        activepage: state.activepage + 1,
      }));
    } else if (this.state.activepage === 18) {
      this.setState((state) => ({
        ...this.state,
        activepage: state.activepage + 1,
      }));
    }
  };
  handleprev = () => {
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
      if (opt12no.checked) {
        opt12no.checked = false;
      }
    }
    if (opt12no.checked && value == "No") {
      if (opt12yes.checked) {
        opt12yes.checked = false;
      }
    }
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
  onChangetable = (idx) => (event) => {
    debugger;
    const { name, value } = event.target;
    const rows = [...this.state.rows];
    var tableyes = document.getElementById("tableyes");
    var tableno = document.getElementById("tableno");
    rows[idx] = {
      [name]: value,
    };
    this.setState({
      rows,
    });

    // if (tableno.checked) {
    //   rows[idx] = {
    //     [checkBox]:'Yes',
    //   };
    //   this.setState((state) => ({
    //     ...this.state,

    //     istable: false,
    //   }));
    //   if (tableyes.checked) {
    //     tableyes.checked = false;
    //   }
    // }
  };
  //   [""0""].children[""0""].checked
  //*[@id="tableyes"]
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
  handleRemoveRow = (id) => {
    console.log(id);
    const rows = [...this.state.rows];
    rows.splice(id, 1);
    this.setState({ rows });
  };
  handleAddRow = () => {
    let test = [...this.state.rows];
    test.push({ name: "", qualification: "", Class: "", status: "" });
    this.setState({ rows: test });
  };
  handleChange2 = (index) => (e) => {
    const { name, value } = e.target;
    const rows1 = [...this.state.rows1];
    rows1[index] = {
      ...this.state.rows1[index],
      [name]: value,
    };
    this.setState({
      rows1,
    });
  };
  handleRemoveRow1 = (id) => {
    console.log(id);
    const rows1 = [...this.state.rows1];
    rows1.splice(id, 1);
    this.setState({ rows1 });
  };
  handleAddRow1 = () => {
    let test = [...this.state.rows1];
    test.push({
      name: "",
      Qualification: "",
      Experience: "",
      WiremanPermitNo: "",
      WiremanPermitDate: "",
      WiremanPermitValidity: "",
    });
    this.setState({ rows1: test });
  };
  handleChange3 = (index) => (e) => {
    const { name, value } = e.target;
    const rows2 = [...this.state.rows2];
    rows2[index] = {
      ...this.state.rows2[index],
      [name]: value,
    };
    this.setState({
      rows2,
    });
  };
  handleRemoveRow2 = (id) => {
    console.log(id);
    const rows2 = [...this.state.rows2];
    rows2.splice(id, 1);
    this.setState({ rows2 });
  };
  handleAddRow2 = () => {
    let test = [...this.state.rows2];
    test.push({
      name: "",
      Qualification: "",
      Experience: "",
      supervisoryPermitNo: "",
      supervisoryPermitDate: "",
      supervisoryPermitValidity: "",
    });
    this.setState({ rows2: test });
  };
  handleChange4 = (index) => (e) => {
    const { name, value } = e.target;
    const rows3 = [...this.state.rows3];
    rows3[index] = {
      ...this.state.rows3[index],
      [name]: value,
    };
    this.setState({
      rows3,
    });
  };
  handleRemoveRow3 = (id) => {
    console.log(id);
    const rows3 = [...this.state.rows3];
    rows3.splice(id, 1);
    this.setState({ rows3 });
  };
  handleAddRow3 = () => {
    let test = [...this.state.rows3];
    test.push({
      NameAndStyleOfTheFirm: "",
      Scope: "",
      No: "",
      DateOfIssue: "",
      Validity: "",
    });
    this.setState({ rows3: test });
  };
  handleChange5 = (index) => (e) => {
    const { name, value } = e.target;
    const rows4 = [...this.state.rows3];
    rows4[index] = {
      ...this.state.rows4[index],
      [name]: value,
    };
    this.setState({
      rows4,
    });
  };
  handleRemoveRow4 = (id) => {
    console.log(id);
    const rows4 = [...this.state.rows4];
    rows4.splice(id, 1);
    this.setState({ rows4 });
  };
  handleAddRow4 = () => {
    let test = [...this.state.rows4];
    test.push({
      NameAndStyleOfTheFirm: "",
      Scope: "",
      No: "",
      DateOfIssue: "",
      Validity: "",
    });
    this.setState({ rows4: test });
  };

  handleCheck = () => {
    this.setState((state) => ({ checked: !this.state.checked }));
  };
  handlealert = () => {
    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        this.state.Data,
        this.state.rows1,
        this.state.rows2,
        this.state.rows3,
        this.state.rows4
      )
      .then((res) => {
        console.log(res);
        console.log(this.state.Data);
        console.log(this.state.rows);
      });
    // this.props.signUp(data);
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
  render() {
    const { classes } = this.props;
    const { loading, success, data, isOpen, errors } = this.state;

    return (
      <>
        <div className={classes.dashboardContent}>
          <Grid item xs={12} md={12}>
            <Typography className={classes.h6} variant="h6">
              Electrical contractor license Application for Grade-A
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
                            error={errors.businessEmail ? true : false}
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
                      {/* <Grid item xs={12} md={6}>
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
                        ></TextField>
                      </Grid> */}
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          4 . Whether the Applicant is company Registered under
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
                          5 . If so Furnish Details and Documents to prove the
                          status of firm
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipFurnishDetails}
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
                          6 . Whether the Company has a Registered office in
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
                          7 . Full name and house address of Proprietor or
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
                          8 . Full name of Agent or Manager (in the case of
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
                          9 . Whether the applicant is a manufacturing firm or
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
                          10 . Name of the person who will sign documents on
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
                            error={
                              errors.nameOfThePersonWhoWillSignDocuments
                                ? true
                                : false
                            }
                            name="nameOfThePersonWhoWillSignDocuments"
                            onChange={(e) => this.handleChange(e)}
                            value={
                              this.state.Data
                                .nameOfThePersonWhoWillSignDocuments
                            }
                          ></TextField>
                        </FormControl>

                        {errors.nameOfThePersonWhoWillSignDocuments ? (
                          <FormHelperText className={classes.error}>
                            {errors.nameOfThePersonWhoWillSignDocuments}
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
                          11 . Whether a contractor’s licence has been
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
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          12 . If yes mention the details
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
                              errors.detailsOfContractorsLicence ? true : false
                            }
                            name="detailsOfContractorsLicence"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.detailsOfContractorsLicence}
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
                          13 . Whether a contractor’s Licence has been issued
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
                                  error={errors.issueDate ? true : false}
                                  // error={errors.to_date ? true : false}
                                  value={this.state.Data.issueDate}
                                  onChange={(date) =>
                                    this.handleDateChange("issueDate", date)
                                  }
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
                                  error={errors.expiryDate ? true : false}
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
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          14 . Whether adequate drawing office facilities for
                          preparation of drawings, blue prints etc. is
                          available.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div onChange={this.handleopt14}>
                          {" "}
                          <input
                            id="opt14yes"
                            type="radio"
                            value="Yes"
                            name="opt14"
                          />{" "}
                          Yes{" "}
                          <input
                            id="opt14no"
                            type="radio"
                            value="No"
                            name="opt14"
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
                          </Grid>
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
                          Attach the declarations from them in the form appended
                          if yes metioned in the above table
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipAttach}
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
                          Declaration :
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Checkbox
                          // type="checkbox"
                          className={classes.checked}
                          id="checkBox1"
                          name="checkBox1"
                          defaultChecked={false}
                        />
                        <label
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          Documents in support of the statements made herein are
                          furnished. Particulars of the testing instruments in
                          my/our possession with the test reports thereof are
                          attached.
                        </label>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Checkbox
                          // type="checkbox"
                          className={classes.checked}
                          id="checkBox2"
                          name="checkBox2"
                          defaultChecked={false}
                        />
                        <label
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          I / We hereby declare that the staff specified in
                          column 13 is intended exclusively for attending to the
                          work under the Licensing Board Rules and under
                          Regulation29 of the CEA (Measures relating to Safety
                          and Electric Supply) regulation2010. The service of
                          the staff will not be utilized for routine operations
                          in the establishment nor they will be mixed up with
                          the staff employed under Regulation 3of the Central
                          Electricity Authority (Measures relating to Safety and
                          Electric Supply) Regulation, 2010.
                        </label>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Checkbox
                          // type="checkbox"
                          className={classes.checked}
                          id="checkBox3"
                          name="checkBox3"
                          defaultChecked={false}
                        />
                        <label
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          I / We hereby declare that I/We have in my/our
                          possession a latest copy of the Kerala State
                          Electricity Licensing Board Rules, The Electricity
                          Act, 2003, the Central Electricity Authority (Measures
                          Relating to Safety and Electric Supply) Regulations,
                          2010, Central Electricity Authority (Technical
                          Standard for Construction of Electrical plants and
                          Electrical Lines) Regulation, 2010, Kerala Lift &
                          Escalators Act, 2013 and the rules there under as well
                          as relevant codes of Practice and Standards of BIS/IEC
                          relating to Electrical Installations. I/We fully
                          understand the terms and conditions under which an
                          electrical contractor’s licence is granted, a breach
                          of which will render the licence liable to
                          cancellation.
                        </label>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Checkbox
                          // type="checkbox"
                          className={classes.checked}
                          id="checkBox4"
                          name="checkBox4"
                          defaultChecked={false}
                        />
                        <label
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
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
                              name="date1"
                              id="date-picker-dialog"
                              format="dd/MM/yyyy"
                              disableOpenOnEnter
                              // error={errors.to_date ? true : false}
                              value={this.state.Data.date1}
                              onChange={(date) =>
                                this.handleDateChange("date1", date)
                              }
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                              InputProps={{ disableUnderline: true }}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              error={errors.date1 ? true : false}
                            />
                          </MuiPickersUtilsProvider>
                        </FormControl>

                        {errors.date1 ? (
                          <FormHelperText className={classes.error}>
                            {errors.date1}
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
                          onChange={this.onChangeZipSignature1}
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
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          . Applies to production units or manufacturing
                          concerns only
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Typography className={classes.h6In} variant="h6">
                          Instructions for the Grant of Contractor’s Licence
                          Grade ‘A’
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
                          (a) Class ‘A’ Contractor’s licence shall be granted
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
                          No other mode of remittance is permitted. Drafts
                          issued by the Bank one month prior to the date of
                          application may not ordinarily be honored.
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
                          (c) Nature of work:
                          <br></br>
                          The Class ‘A’ Contractor can carry out erection and
                          installation of all types of electrical installation
                          works as specified in the licence.
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
                          1. One Supervisor holding Supervisory Permit Grade ‘A’
                          issued by the Kerala State Electricity Licensing
                          Board.
                          <br></br>
                          2. Five wiremen for HT and Six wiremen for EHT,
                          holding wiremen permits granted by the Kerala State
                          Electricity Licensing Board.
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
                          (e) instruments:
                          <br></br>
                          1. One number 500 V megger
                          <br></br>
                          2. One number 1000 V megger
                          <br></br>
                          3. 5000 V Megger (motorized / electronic type)
                          <br></br>
                          4. One number phase sequence tester.
                          <br></br>
                          5. One number Earth tester with testing kit 0 – 01 /
                          100 Ohm with selector switch
                          <br></br>
                          6. Two numbers of Neon tester
                          <br></br>
                          7. Frequency meter 45 to 55 Hz
                          <br></br>
                          8. Power factor meter 5A, 240 V AC
                          <br></br>
                          9. Multimeter (Digital Type) AC / DC
                          <br></br>
                          10. Tong Tester - 800 A Voltage range 0 - 300V / 600V
                          <br></br>
                          11. Portable PF meter 5 A, 240 V AC
                          <br></br>
                          12. All wiring tools, an d any other instruments which
                          may be considered necessary by the Board
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
                          (f) The applicant should have adequate office
                          facilities for the preparation of drawings, blue
                          prints etc. Also applicant should have library
                          facility.
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
                          (g) Production units or manufacturing concerns should
                          segregate the staff employed for the purpose of
                          contractor’s licence from the staff engaged for
                          routine operations of the factories. The staff
                          employed under the Licensing Board Rules and under
                          regulation 3 of the Central Electricity Authority
                          (Measures Relating to Safety and Electric Supply)
                          Regulations, 2010 shall not on any account be mixed
                          up. Failure to keep separate staff for the purpose of
                          the Licensing Board Rules and, the regulation 29 of
                          Central Electricity Authority (Measures Relating to
                          Safety and Electric Supply) Regulations, 2010 shall be
                          deemed to constitute violation of the rules and shall
                          render the licence is liable for cancellation.
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
                          (h) An Original Bank guarantee for the sum `25,000/-
                          for HT and `50,000/- for EHT Contractor’s Licence for
                          a period of 3 years.
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
                          (i) Properly filled up declaration of Supervisors and
                          Wiremen duly attested by the Electrical Inspector
                          (Court fee stamp for `5 should be affixed on each
                          declaration)
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
          {this.state.activepage == 8 && (
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
                          Check List for the Application for Electrical
                          Contractors Licence Grade ‘A’
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
                          1. (a) Name of the Applicant
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
                              errors.checkListNameOfTheApplicant ? true : false
                            }
                            name="checkListNameOfTheApplicant"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.checkListNameOfTheApplicant}
                          ></TextField>
                        </FormControl>
                        {errors.checkListNameOfTheApplicant ? (
                          <FormHelperText className={classes.error}>
                            {errors.checkListNameOfTheApplicant}
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
                          (b) Business Address
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
                              errors.checkListBusinessAddress ? true : false
                            }
                            name="checkListBusinessAddress"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.checkListBusinessAddress}
                          ></TextField>
                        </FormControl>
                        {errors.checkListBusinessAddress ? (
                          <FormHelperText className={classes.error}>
                            {errors.checkListBusinessAddress}
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
                          (c) Business Pincode
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
                              errors.checkListBusinessPincode ? true : false
                            }
                            name="checkListBusinessPincode"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.checkListBusinessPincode}
                          ></TextField>
                        </FormControl>
                        {errors.checkListBusinessPincode ? (
                          <FormHelperText className={classes.error}>
                            {errors.checkListBusinessPincode}
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
                          (d) Business Email
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
                            error={errors.checkListBusinessEmail ? true : false}
                            name="checkListBusinessEmail"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.checkListBusinessEmail}
                          ></TextField>
                        </FormControl>
                        {errors.checkListBusinessEmail ? (
                          <FormHelperText className={classes.error}>
                            {errors.checkListBusinessEmail}
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
                          (e) Address of Registered Office in Kerala State
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
                            error={
                              errors.checkListAddressOfRegisteredOffice
                                ? true
                                : false
                            }
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="checkListAddressOfRegisteredOffice"
                            onChange={(e) => this.handleChange(e)}
                            value={
                              this.state.Data.checkListAddressOfRegisteredOffice
                            }
                          ></TextField>
                        </FormControl>
                        {errors.checkListAddressOfRegisteredOffice ? (
                          <FormHelperText className={classes.error}>
                            {errors.checkListAddressOfRegisteredOffice}
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
                          (f) Name of authorized person signing documents
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
                              errors.checkListNameOfAuthorizedPersonSigningDocuments
                                ? true
                                : false
                            }
                            name="checkListNameOfAuthorizedPersonSigningDocuments"
                            onChange={(e) => this.handleChange(e)}
                            value={
                              this.state.Data
                                .checkListNameOfAuthorizedPersonSigningDocuments
                            }
                          ></TextField>
                        </FormControl>
                        {errors.checkListNameOfAuthorizedPersonSigningDocuments ? (
                          <FormHelperText className={classes.error}>
                            {
                              errors.checkListNameOfAuthorizedPersonSigningDocuments
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
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                          }}
                        >
                          2 . Style of the Company
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
                          (a) Proprietary concern / partnership company
                          registered under companies Act
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
                              errors.checkListProprietaryConcern ? true : false
                            }
                            name="checkListProprietaryConcern"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.Data.checkListProprietaryConcern}
                          ></TextField>
                        </FormControl>
                        {errors.checkListProprietaryConcern ? (
                          <FormHelperText className={classes.error}>
                            {errors.checkListProprietaryConcern}
                          </FormHelperText>
                        ) : (
                          ""
                        )}
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
                          (b) Documents to be enclosed:
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
                          . to prove the status of the firms
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipStatus}
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
                          . Statement of Accounts for last three year certified
                          by Chartered Accountant /IT statement
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipStatement}
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
                          3 . Date of application
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
                              name="applicationDate"
                              error={errors.applicationDate ? true : false}
                              id="date-picker-dialog"
                              format="dd/MM/yyyy"
                              disableOpenOnEnter
                              // error={errors.to_date ? true : false}
                              value={this.state.Data.applicationDate}
                              onChange={(date) =>
                                this.handleDateChange("applicationDate", date)
                              }
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
                        {errors.applicationDate ? (
                          <FormHelperText className={classes.error}>
                            {errors.applicationDate}
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

          {this.state.activepage == 10 && (
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
                          4 . Details of supervisory staff
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <Button
                          // size="medium"
                          onClick={this.handleAddRow2}
                          className={this.props.classes.additem}
                        >
                          Add person
                          <AddIcon className={this.props.classes.AddIcon} />
                        </Button>
                        <center>
                          <Table
                            aria-label="simple table"
                            className={this.props.classes.table}
                          >
                            <TableHead className={this.props.classes.tablehead}>
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
                                  Experience Details Years
                                </TableCell>
                                <TableCell
                                  className={this.props.classes.TableCell}
                                  align="left"
                                >
                                  Supervisory permit No
                                </TableCell>
                                <TableCell
                                  className={this.props.classes.TableCell}
                                  align="left"
                                >
                                  Supervisory permit Date
                                </TableCell>
                                <TableCell
                                  className={this.props.classes.TableCell}
                                  align="left"
                                >
                                  Supervisory permit Validity
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
                              {this.state.rows2.map((item, idx) => (
                                <TableRow>
                                  <TableCell align="left">{idx + 1}</TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      type="text"
                                      name="name"
                                      multiline
                                      // rowsMax="3"
                                      align="left"
                                      value={item.name}
                                      variant="outlined"
                                      onChange={this.handleChange3(idx)}
                                      className={this.props.classes.inputbase}
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
                                      onChange={this.handleChange3(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      multiline
                                      type="text"
                                      align="left"
                                      name="Experience"
                                      value={item.Experience}
                                      variant="outlined"
                                      onChange={this.handleChange3(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      multiline
                                      type="text"
                                      align="left"
                                      name="supervisoryPermitNo"
                                      value={item.supervisoryPermitNo}
                                      variant="outlined"
                                      onChange={this.handleChange3(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      multiline
                                      type="text"
                                      align="left"
                                      name="supervisoryPermitDate"
                                      value={item.supervisoryPermitDate}
                                      variant="outlined"
                                      onChange={this.handleChange3(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      multiline
                                      type="text"
                                      align="left"
                                      name=" supervisoryPermitValidity"
                                      value={item.supervisoryPermitValidity}
                                      variant="outlined"
                                      onChange={this.handleChange3(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>

                                  <TableCell align="left">
                                    <DeleteIcon
                                      className={this.props.classes.deleteitem}
                                      onClick={(e) =>
                                        this.handleRemoveRow2(idx)
                                      }
                                    ></DeleteIcon>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </center>
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
          {this.state.activepage == 11 && (
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
                          4 . Details of Wireman employed
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <Button
                          // size="medium"
                          onClick={this.handleAddRow1}
                          className={this.props.classes.additem}
                        >
                          Add person
                          <AddIcon className={this.props.classes.AddIcon} />
                        </Button>
                        <center>
                          <Table
                            aria-label="simple table"
                            className={this.props.classes.table}
                          >
                            <TableHead className={this.props.classes.tablehead}>
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
                                  Experience Details Years
                                </TableCell>
                                <TableCell
                                  className={this.props.classes.TableCell}
                                  align="left"
                                >
                                  Wireman permit No
                                </TableCell>
                                <TableCell
                                  className={this.props.classes.TableCell}
                                  align="left"
                                >
                                  Wireman permit Date
                                </TableCell>
                                <TableCell
                                  className={this.props.classes.TableCell}
                                  align="left"
                                >
                                  Wireman permit Validity
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
                              {this.state.rows1.map((item, idx) => (
                                <TableRow>
                                  <TableCell align="left">{idx + 1}</TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      type="text"
                                      name="name"
                                      multiline
                                      // rowsMax="3"
                                      align="left"
                                      value={item.name}
                                      variant="outlined"
                                      onChange={this.handleChange2(idx)}
                                      className={this.props.classes.inputbase}
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
                                      onChange={this.handleChange2(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      multiline
                                      type="text"
                                      align="left"
                                      name="Experience"
                                      value={item.Experience}
                                      variant="outlined"
                                      onChange={this.handleChange2(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      multiline
                                      type="text"
                                      align="left"
                                      name="WiremanPermitNo"
                                      value={item.WiremanPermitNo}
                                      variant="outlined"
                                      onChange={this.handleChange2(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      multiline
                                      type="text"
                                      align="left"
                                      name="WiremanPermitDate"
                                      value={item.WiremanPermitDate}
                                      variant="outlined"
                                      onChange={this.handleChange2(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      multiline
                                      type="text"
                                      align="left"
                                      name="WiremanPermitValidity"
                                      value={item.WiremanPermitValidity}
                                      variant="outlined"
                                      onChange={this.handleChange2(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>

                                  <TableCell align="left">
                                    <DeleteIcon
                                      className={this.props.classes.deleteitem}
                                      onClick={(e) =>
                                        this.handleRemoveRow1(idx)
                                      }
                                    ></DeleteIcon>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </center>
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
          {this.state.activepage == 12 && (
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
                          6 . Details of other staff and apprentices (List to be
                          attached):
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipDetails}
                        />
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
                          7 . Details of Licence already possessed in Kerala
                          State
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <Button
                          // size="medium"
                          onClick={this.handleAddRow3}
                          className={this.props.classes.additem}
                        >
                          Add person
                          <AddIcon className={this.props.classes.AddIcon} />
                        </Button>
                        <center>
                          <Table
                            aria-label="simple table"
                            className={this.props.classes.table}
                          >
                            <TableHead className={this.props.classes.tablehead}>
                              <TableRow>
                                <TableCell
                                  align="left"
                                  className={this.props.classes.TableCell}
                                >
                                  sl no
                                </TableCell>
                                <TableCell
                                  align="left"
                                  className={this.props.classes.TableCell}
                                >
                                  Name and style of the firm
                                </TableCell>
                                <TableCell
                                  className={this.props.classes.TableCell}
                                  align="left"
                                >
                                  Scope
                                </TableCell>
                                <TableCell
                                  className={this.props.classes.TableCell}
                                  align="left"
                                >
                                  No.
                                </TableCell>
                                <TableCell
                                  className={this.props.classes.TableCell}
                                  align="left"
                                >
                                  Date of issue
                                </TableCell>
                                <TableCell
                                  className={this.props.classes.TableCell}
                                  align="left"
                                >
                                  Validity
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
                              {this.state.rows3.map((item, idx) => (
                                <TableRow>
                                  <TableCell align="left">{idx + 1}</TableCell>

                                  <TableCell align="left" name="value">
                                    <TextField
                                      type="text"
                                      name="NameAndStyleOfTheFirm"
                                      multiline
                                      // rowsMax="3"
                                      align="left"
                                      value={item.NameAndStyleOfTheFirm}
                                      variant="outlined"
                                      onChange={this.handleChange4(idx)}
                                      className={this.props.classes.inputbase}
                                    />
                                  </TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      multiline
                                      type="text"
                                      align="left"
                                      name="Scope"
                                      value={item.Scope}
                                      variant="outlined"
                                      onChange={this.handleChange4(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      multiline
                                      type="text"
                                      align="left"
                                      name="No"
                                      value={item.No}
                                      variant="outlined"
                                      onChange={this.handleChange4(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      multiline
                                      type="text"
                                      align="left"
                                      name="DateOfIssue"
                                      value={item.DateOfIssue}
                                      variant="outlined"
                                      onChange={this.handleChange4(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      multiline
                                      type="text"
                                      align="left"
                                      name=" Validity"
                                      value={item.Validity}
                                      variant="outlined"
                                      onChange={this.handleChange4(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>
                                  <TableCell align="left">
                                    <DeleteIcon
                                      className={this.props.classes.deleteitem}
                                      onClick={(e) =>
                                        this.handleRemoveRow3(idx)
                                      }
                                    ></DeleteIcon>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </center>
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
          {this.state.activepage == 13 && (
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
                          8 . Details of licence possessed in other States
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <Button
                          // size="medium"
                          onClick={this.handleAddRow4}
                          className={this.props.classes.additem}
                        >
                          Add person
                          <AddIcon className={this.props.classes.AddIcon} />
                        </Button>
                        <center>
                          <Table
                            aria-label="simple table"
                            className={this.props.classes.table}
                          >
                            <TableHead className={this.props.classes.tablehead}>
                              <TableRow>
                                <TableCell
                                  align="left"
                                  className={this.props.classes.TableCell}
                                >
                                  sl no
                                </TableCell>
                                <TableCell
                                  align="left"
                                  className={this.props.classes.TableCell}
                                >
                                  Name and style of the firm
                                </TableCell>
                                <TableCell
                                  className={this.props.classes.TableCell}
                                  align="left"
                                >
                                  Scope
                                </TableCell>
                                <TableCell
                                  className={this.props.classes.TableCell}
                                  align="left"
                                >
                                  No.
                                </TableCell>
                                <TableCell
                                  className={this.props.classes.TableCell}
                                  align="left"
                                >
                                  Date of issue
                                </TableCell>
                                <TableCell
                                  className={this.props.classes.TableCell}
                                  align="left"
                                >
                                  Validity
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
                              {this.state.rows4.map((item, idx) => (
                                <TableRow>
                                  <TableCell align="left">{idx + 1}</TableCell>

                                  <TableCell align="left" name="value">
                                    <TextField
                                      type="text"
                                      name="NameAndStyleOfTheFirm"
                                      multiline
                                      // rowsMax="3"
                                      align="left"
                                      value={item.NameAndStyleOfTheFirm}
                                      variant="outlined"
                                      onChange={this.handleChange5(idx)}
                                      className={this.props.classes.inputbase}
                                    />
                                  </TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      multiline
                                      type="text"
                                      align="left"
                                      name="Scope"
                                      value={item.Scope}
                                      variant="outlined"
                                      onChange={this.handleChange5(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      multiline
                                      type="text"
                                      align="left"
                                      name="No"
                                      value={item.No}
                                      variant="outlined"
                                      onChange={this.handleChange5(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      multiline
                                      type="text"
                                      align="left"
                                      name="DateOfIssue"
                                      value={item.DateOfIssue}
                                      variant="outlined"
                                      onChange={this.handleChange5(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>
                                  <TableCell align="left" name="value">
                                    <TextField
                                      multiline
                                      type="text"
                                      align="left"
                                      name=" Validity"
                                      value={item.Validity}
                                      variant="outlined"
                                      onChange={this.handleChange5(idx)}
                                      className={this.props.classes.inputbase2}
                                    >
                                      {/* {idx + 1} */}
                                    </TextField>
                                  </TableCell>
                                  <TableCell align="left">
                                    <DeleteIcon
                                      className={this.props.classes.deleteitem}
                                      onClick={(e) =>
                                        this.handleRemoveRow4(idx)
                                      }
                                    ></DeleteIcon>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </center>
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
          {this.state.activepage == 14 && (
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
                            color: "#1daab1",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "bold",
                            textDecorationLine: "underline",
                          }}
                        >
                          9 . Drawing Office facilities
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (a) Drawing code and accessories, computer with CAD
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="9ayes"
                            checked={this.state.selectedOption9a === "9ayes"}
                            onChange={this.onValueChange9a}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="9ano"
                            checked={this.state.selectedOption9a === "9ano"}
                            onChange={this.onValueChange9a}
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
                            marginLeft: "4%",
                          }}
                        >
                          (b) Facility for taking ammonia prints and blue
                          prints, PrinterA3/ Plotter
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipFacility}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (c) Typewriter/ Computer
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="9cyes"
                            checked={this.state.selectedOption9c === "9cyes"}
                            onChange={this.onValueChange9c}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="9cno"
                            checked={this.state.selectedOption9c === "9cno"}
                            onChange={this.onValueChange9c}
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
                            marginLeft: "4%",
                          }}
                        >
                          (d) Telephone / Fax / Email
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="9dyes"
                            checked={this.state.selectedOption9d === "9dyes"}
                            onChange={this.onValueChange9d}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="9dno"
                            checked={this.state.selectedOption9d === "9dno"}
                            onChange={this.onValueChange9d}
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
                          10 . Details of Office facility :
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            rows="5"
                            multiline
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
                            name="checkListDetailsOfOfficefacility"
                            onChange={(e) => this.handleChange(e)}
                            value={
                              this.state.Data.checkListDetailsOfOfficefacility
                            }
                            error={
                              errors.checkListDetailsOfOfficefacility
                                ? true
                                : false
                            }
                          ></TextField>
                        </FormControl>
                        {errors.checkListDetailsOfOfficefacility ? (
                          <FormHelperText className={classes.error}>
                            {errors.checkListDetailsOfOfficefacility}
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
          {this.state.activepage == 15 && (
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
                            textDecorationLine: "underline",
                            color: "#1daab1",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "normal",
                          }}
                        >
                          11 . Library
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (a) The Central Electricity Authority (Measures
                          Relating to Safety and Electric supply) Regulations,
                          2010
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="11ayes"
                            checked={this.state.selectedOption11a === "11ayes"}
                            onChange={this.onValueChange11a}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="11ano"
                            checked={this.state.selectedOption11a === "11ano"}
                            onChange={this.onValueChange11a}
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
                            marginLeft: "4%",
                          }}
                        >
                          (b) The Electricity Act, 2003
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="11byes"
                            checked={this.state.selectedOption11b === "11byes"}
                            onChange={this.onValueChange11b}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="11bno"
                            checked={this.state.selectedOption11b === "11bno"}
                            onChange={this.onValueChange11b}
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
                            marginLeft: "4%",
                          }}
                        >
                          (c) Kerala State Electricity Licensing Board Rules
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="11cyes"
                            checked={this.state.selectedOption11c === "11cyes"}
                            onChange={this.onValueChange11c}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="11cno"
                            checked={this.state.selectedOption11c === "11cno"}
                            onChange={this.onValueChange11c}
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
                            marginLeft: "4%",
                          }}
                        >
                          (d) National Electrical Code 2011,
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="11dyes"
                            checked={this.state.selectedOption11d === "11dyes"}
                            onChange={this.onValueChange11d}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="11dno"
                            checked={this.state.selectedOption11d === "11dno"}
                            onChange={this.onValueChange11d}
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
                            marginLeft: "4%",
                          }}
                        >
                          (e)Electrical Inspectorate standards
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="11eyes"
                            checked={this.state.selectedOption11e === "11eyes"}
                            onChange={this.onValueChange11e}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="11eno"
                            checked={this.state.selectedOption11e === "11eno"}
                            onChange={this.onValueChange11e}
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
                            marginLeft: "4%",
                          }}
                        >
                          (f) Standard published by Central Board of Irrigation
                          & Power/CEA
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="11fyes"
                            checked={this.state.selectedOption11f === "11fyes"}
                            onChange={this.onValueChange11f}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="11fno"
                            checked={this.state.selectedOption11f === "11fno"}
                            onChange={this.onValueChange11f}
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
                            marginLeft: "4%",
                          }}
                        >
                          (g) Safety Manual
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="11gyes"
                            checked={this.state.selectedOption11g === "11gyes"}
                            onChange={this.onValueChange11g}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="11gno"
                            checked={this.state.selectedOption11g === "11gno"}
                            onChange={this.onValueChange11g}
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
                            marginLeft: "4%",
                          }}
                        >
                          (h) Kerala Lift and Escalators Act, 2013 and the rules
                          there under
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="11hyes"
                            checked={this.state.selectedOption11h === "11hyes"}
                            onChange={this.onValueChange11h}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="11hno"
                            checked={this.state.selectedOption11h === "11hno"}
                            onChange={this.onValueChange11h}
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
                            marginLeft: "4%",
                          }}
                        >
                          (i) Kerala Electricity Supply Code, 2014
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="11iyes"
                            checked={this.state.selectedOption11i === "11iyes"}
                            onChange={this.onValueChange11i}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="11ino"
                            checked={this.state.selectedOption11i === "11ino"}
                            onChange={this.onValueChange11i}
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
                            marginLeft: "4%",
                          }}
                        >
                          (j) Kerala Cinema (Regulation ) Rules, 1988
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="11jyes"
                            checked={this.state.selectedOption11j === "11jyes"}
                            onChange={this.onValueChange11j}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="11jno"
                            checked={this.state.selectedOption11j === "11jno"}
                            onChange={this.onValueChange11j}
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
                            marginLeft: "4%",
                          }}
                        >
                          (k) Central Electricity Authority (Technical Standard
                          for Construction of Electrical plants and Electrical
                          Lines) Regulation, 2010
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="11kyes"
                            checked={this.state.selectedOption11k === "11kyes"}
                            onChange={this.onValueChange11k}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="11kno"
                            checked={this.state.selectedOption11k === "11kno"}
                            onChange={this.onValueChange11k}
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
                            marginLeft: "4%",
                          }}
                        >
                          (l) All-important BIS/IEC specifications as directed
                          by the Licensing Board and the Electrical Inspectorate
                          from time to time.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="11lyes"
                            checked={this.state.selectedOption11l === "11lyes"}
                            onChange={this.onValueChange11l}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="11lno"
                            checked={this.state.selectedOption11l === "11lno"}
                            onChange={this.onValueChange11l}
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

          {this.state.activepage == 16 && (
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
                            color: "#1daab1",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "normal",
                            textDecorationLine: "underline",
                          }}
                        >
                          12 . Testing Instruments
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (a) Insulation Tester (500 V)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="12ayes"
                            checked={this.state.selectedOption12a === "12ayes"}
                            onChange={this.onValueChange12a}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="12ano"
                            checked={this.state.selectedOption12a === "12ano"}
                            onChange={this.onValueChange12a}
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
                            marginLeft: "4%",
                          }}
                        >
                          (b) Insulation Tester (1000 V)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="12byes"
                            checked={this.state.selectedOption12b === "12byes"}
                            onChange={this.onValueChange12b}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="12bno"
                            checked={this.state.selectedOption12b === "12bno"}
                            onChange={this.onValueChange12b}
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
                            marginLeft: "4%",
                          }}
                        >
                          (c) Insulation Tester (5 kV Motorized / battery
                          operated)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="12cyes"
                            checked={this.state.selectedOption12c === "12cyes"}
                            onChange={this.onValueChange12c}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="12cno"
                            checked={this.state.selectedOption12c === "12cno"}
                            onChange={this.onValueChange12c}
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
                            marginLeft: "4%",
                          }}
                        >
                          (d) Earth Tester with testing kit (0-10 / 100 Ohms
                          with selector switch)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="12dyes"
                            checked={this.state.selectedOption12d === "12dyes"}
                            onChange={this.onValueChange12d}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="12dno"
                            checked={this.state.selectedOption12d === "12dno"}
                            onChange={this.onValueChange12d}
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
                            marginLeft: "4%",
                          }}
                        >
                          (e) Tong Tester (with different ranges to measure from
                          10 A onwards with selector switch) 0-800A
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="12eyes"
                            checked={this.state.selectedOption12e === "12eyes"}
                            onChange={this.onValueChange12e}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="12eno"
                            checked={this.state.selectedOption12e === "12eno"}
                            onChange={this.onValueChange12e}
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
                            marginLeft: "4%",
                          }}
                        >
                          (f) Voltage range (0-300V / 600V)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="12fyes"
                            checked={this.state.selectedOption12f === "12fyes"}
                            onChange={this.onValueChange12f}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="12fno"
                            checked={this.state.selectedOption12f === "12fno"}
                            onChange={this.onValueChange12f}
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
                            marginLeft: "4%",
                          }}
                        >
                          (g) Phase Sequence Tester
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="12gyes"
                            checked={this.state.selectedOption12g === "12gyes"}
                            onChange={this.onValueChange12g}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="12gno"
                            checked={this.state.selectedOption12g === "12gno"}
                            onChange={this.onValueChange12g}
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
                            marginLeft: "4%",
                          }}
                        >
                          (h) Multimeter (Digital Multi Meter to measure A.C,
                          D.C)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="12hyes"
                            checked={this.state.selectedOption12h === "12hyes"}
                            onChange={this.onValueChange12h}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="12hno"
                            checked={this.state.selectedOption12h === "12hno"}
                            onChange={this.onValueChange12h}
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
                            marginLeft: "4%",
                          }}
                        >
                          (i) Frequency Meter 45 to 55 Hz
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="12iyes"
                            checked={this.state.selectedOption12i === "12iyes"}
                            onChange={this.onValueChange12i}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="12ino"
                            checked={this.state.selectedOption12i === "12ino"}
                            onChange={this.onValueChange12i}
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
                            marginLeft: "4%",
                          }}
                        >
                          (j) Portable PF Meter- 5A, 240V, A/C
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="12jyes"
                            checked={this.state.selectedOption12j === "12jyes"}
                            onChange={this.onValueChange12j}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="12jno"
                            checked={this.state.selectedOption12j === "12jno"}
                            onChange={this.onValueChange12j}
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
          {this.state.activepage == 17 && (
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
                            color: "#1daab1",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "normal",
                            textDecorationLine: "underline",
                          }}
                        >
                          13 . Tools and Equipments:
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (a) Spanner Double set
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13ayes"
                            checked={this.state.selectedOption13a === "13ayes"}
                            onChange={this.onValueChange13a}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13ano"
                            checked={this.state.selectedOption13a === "13ano"}
                            onChange={this.onValueChange13a}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (b) Spanner Box
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13byes"
                            checked={this.state.selectedOption13b === "13byes"}
                            onChange={this.onValueChange13b}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13bno"
                            checked={this.state.selectedOption13b === "13bno"}
                            onChange={this.onValueChange13b}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (c) Spanner Ring
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13cyes"
                            checked={this.state.selectedOption13c === "13cyes"}
                            onChange={this.onValueChange13c}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13cno"
                            checked={this.state.selectedOption13c === "13cno"}
                            onChange={this.onValueChange13c}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (d) Spanner Adjustable Type
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13dyes"
                            checked={this.state.selectedOption13d === "13dyes"}
                            onChange={this.onValueChange13d}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13dno"
                            checked={this.state.selectedOption13d === "13dno"}
                            onChange={this.onValueChange13d}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (e) Allen Key set
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13eyes"
                            checked={this.state.selectedOption13e === "13eyes"}
                            onChange={this.onValueChange13e}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13eno"
                            checked={this.state.selectedOption13e === "13eno"}
                            onChange={this.onValueChange13e}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (f) Cutting pliers (Insulated)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13fyes"
                            checked={this.state.selectedOption13f === "13fyes"}
                            onChange={this.onValueChange13f}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13fno"
                            checked={this.state.selectedOption13f === "13fno"}
                            onChange={this.onValueChange13f}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (g) Micrometer / Screw gauge
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13gyes"
                            checked={this.state.selectedOption13g === "13gyes"}
                            onChange={this.onValueChange13g}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13gno"
                            checked={this.state.selectedOption13g === "13gno"}
                            onChange={this.onValueChange13g}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (h) Nose Pliers
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13hyes"
                            checked={this.state.selectedOption13h === "13hyes"}
                            onChange={this.onValueChange13h}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13hno"
                            checked={this.state.selectedOption13h === "13hno"}
                            onChange={this.onValueChange13h}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (i) Measuring tape 15 M
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13iyes"
                            checked={this.state.selectedOption13i === "13iyes"}
                            onChange={this.onValueChange13i}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13ino"
                            checked={this.state.selectedOption13i === "13ino"}
                            onChange={this.onValueChange13i}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (j) Measuring tape 50 M
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13jyes"
                            checked={this.state.selectedOption13j === "13jyes"}
                            onChange={this.onValueChange13j}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13jno"
                            checked={this.state.selectedOption13j === "13jno"}
                            onChange={this.onValueChange13j}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (k) Portable compressor with spray gun
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13kyes"
                            checked={this.state.selectedOption13k === "13kyes"}
                            onChange={this.onValueChange13k}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13kno"
                            checked={this.state.selectedOption13k === "13kno"}
                            onChange={this.onValueChange13k}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (l) Blower
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13lyes"
                            checked={this.state.selectedOption13l === "13lyes"}
                            onChange={this.onValueChange13l}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13lno"
                            checked={this.state.selectedOption13l === "13lno"}
                            onChange={this.onValueChange13l}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (m) Screw Drivers of all sizes
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13myes"
                            checked={this.state.selectedOption13m === "13myes"}
                            onChange={this.onValueChange13m}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13mno"
                            checked={this.state.selectedOption13m === "13mno"}
                            onChange={this.onValueChange13m}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (n) Portable welding set (100 A)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13nyes"
                            checked={this.state.selectedOption13n === "13nyes"}
                            onChange={this.onValueChange13n}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13nno"
                            checked={this.state.selectedOption13n === "13nno"}
                            onChange={this.onValueChange13n}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (O) Portable welding set (100 A)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13oyes"
                            checked={this.state.selectedOption13o === "13oyes"}
                            onChange={this.onValueChange13o}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13ono"
                            checked={this.state.selectedOption13o === "13ono"}
                            onChange={this.onValueChange13o}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (p) Crimping tools with dye set: 400 sq.mm (Hand
                          operated)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13pyes"
                            checked={this.state.selectedOption13p === "13pyes"}
                            onChange={this.onValueChange13p}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13pno"
                            checked={this.state.selectedOption13p === "13pno"}
                            onChange={this.onValueChange13p}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (q) Crimping tools with dye set: 400 sq.mm.
                          (Hydraulic)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13qyes"
                            checked={this.state.selectedOption13q === "13qyes"}
                            onChange={this.onValueChange13q}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13qno"
                            checked={this.state.selectedOption13q === "13qno"}
                            onChange={this.onValueChange13q}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (r) Rollers for cable laying
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13ryes"
                            checked={this.state.selectedOption13r === "13ryes"}
                            onChange={this.onValueChange13r}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13rno"
                            checked={this.state.selectedOption13r === "13rno"}
                            onChange={this.onValueChange13r}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (s) Portable grinder
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13syes"
                            checked={this.state.selectedOption13s === "13syes"}
                            onChange={this.onValueChange13s}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13sno"
                            checked={this.state.selectedOption13s === "13sno"}
                            onChange={this.onValueChange13s}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (t) Safety belt
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13tyes"
                            checked={this.state.selectedOption13t === "13tyes"}
                            onChange={this.onValueChange13t}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13tno"
                            checked={this.state.selectedOption13t === "13tno"}
                            onChange={this.onValueChange13t}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (u) Rubber Gloves (Electrical Grade)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13uyes"
                            checked={this.state.selectedOption13u === "13uyes"}
                            onChange={this.onValueChange13u}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13uno"
                            checked={this.state.selectedOption13u === "13uno"}
                            onChange={this.onValueChange13u}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (v) Portable drill(Heavy Duty)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13vyes"
                            checked={this.state.selectedOption13v === "13vyes"}
                            onChange={this.onValueChange13v}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13vno"
                            checked={this.state.selectedOption13v === "13vno"}
                            onChange={this.onValueChange13v}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (w) Portable drill(Light Duty)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13wyes"
                            checked={this.state.selectedOption13w === "13wyes"}
                            onChange={this.onValueChange13w}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13wno"
                            checked={this.state.selectedOption13w === "13wno"}
                            onChange={this.onValueChange13w}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (x) Tools for pipe threading & jointing
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13xyes"
                            checked={this.state.selectedOption13x === "13xyes"}
                            onChange={this.onValueChange13x}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13xno"
                            checked={this.state.selectedOption13x === "13xno"}
                            onChange={this.onValueChange13x}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (y) Chipping tools, Chisels etc.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13yyes"
                            checked={this.state.selectedOption13y === "13yyes"}
                            onChange={this.onValueChange13y}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13yno"
                            checked={this.state.selectedOption13y === "13yno"}
                            onChange={this.onValueChange13y}
                          />{" "}
                          No{" "}
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (z) A cable jointing facilities, Bending m/c etc.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="13zyes"
                            checked={this.state.selectedOption13z === "13zyes"}
                            onChange={this.onValueChange13z}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="13zno"
                            checked={this.state.selectedOption13z === "13zno"}
                            onChange={this.onValueChange13z}
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
                          Fabrication and material handling facility. (Agreement
                          in proforma to be furnished)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipFabrication}
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
          {this.state.activepage == 18 && (
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
                            color: "#1daab1",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "normal",
                            textDecorationLine: "underline",
                          }}
                        >
                          14 . The following additional facilities also have to
                          be provided for E.H.T. Contractor’s Licensee
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          style={{
                            color: "#646d7e",
                            opacity: "1",
                            fontWeight: "600",
                            fontSize: "small",
                            marginLeft: "4%",
                          }}
                        >
                          (a) Facility for handling heavy machineries
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="14ayes"
                            checked={this.state.selectedOption14a === "14ayes"}
                            onChange={this.onValueChange14a}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="14ano"
                            checked={this.state.selectedOption14a === "14ano"}
                            onChange={this.onValueChange14a}
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
                            marginLeft: "4%",
                          }}
                        >
                          (b) Fabrication facilities
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="14byes"
                            checked={this.state.selectedOption14b === "14byes"}
                            onChange={this.onValueChange14b}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="14bno"
                            checked={this.state.selectedOption14b === "14bno"}
                            onChange={this.onValueChange14b}
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
                            marginLeft: "4%",
                          }}
                        >
                          (c) Oil filtering and testing facilities
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="14cyes"
                            checked={this.state.selectedOption14c === "14cyes"}
                            onChange={this.onValueChange14c}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="14cno"
                            checked={this.state.selectedOption14c === "14cno"}
                            onChange={this.onValueChange14c}
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
                            marginLeft: "4%",
                          }}
                        >
                          (d) Relay testing kit
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="14dyes"
                            checked={this.state.selectedOption14d === "14dyes"}
                            onChange={this.onValueChange14d}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="14dno"
                            checked={this.state.selectedOption14d === "14dno"}
                            onChange={this.onValueChange14d}
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
                            marginLeft: "4%",
                          }}
                        >
                          (e) High Voltage Testing facilities
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div>
                          {" "}
                          <input
                            type="radio"
                            value="14eyes"
                            checked={this.state.selectedOption14e === "14eyes"}
                            onChange={this.onValueChange14e}
                          />{" "}
                          Yes{" "}
                          <input
                            type="radio"
                            value="14eno"
                            checked={this.state.selectedOption14e === "14eno"}
                            onChange={this.onValueChange14e}
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
                          (Ownership certificate of work shop from local
                          authority/SIDCO or any authority shall be furnished
                          for EHT
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipOwnership}
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
                          15 . Major works carried out in Kerala: (List with
                          details of installation, scheme approval obtained from
                          Electrical Inspectorate, etc.)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipMajorworks}
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
                          16 . Financial Position/Bank Guarantee: Solvency
                          Certificate / Bank Guarantee of `25,000/- (for HT) and
                          `50,000 (for EHT)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipFinancialPosition}
                        />
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
                          17 . Punishment and penalties: (Details have to be
                          furnished)
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
                          (a) From Kerala State Electricity Licensing Board
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipLicensingBoard}
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
                          (b) From Government & Other agencies.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <input
                          className={classes.customFileUpload}
                          type="file"
                          onChange={this.onChangeZipAgencies}
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

gradea.propTypes = {
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

export const styledgradea = withStyles(styles)(gradea);

export default connect(mapStateToProps, mapDispatchToProps)(styledgradea);
