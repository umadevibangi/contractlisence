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

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
class trackstatus extends React.Component {
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
    };
  }

  render() {
    const useStyles = makeStyles((theme) => ({
      root: {
        width: "100%",
      },
      button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      actionsContainer: {
        marginBottom: theme.spacing(2),
      },
      resetContainer: {
        padding: theme.spacing(3),
      },
    }));
    const { classes } = this.props;
    const { activeStep, setActiveStep } = this.state;
    const steps = getSteps();
    // const classes = useStyles();
    // const [activeStep, setActiveStep] = React.useState(0);

    function getSteps() {
      return ["Select campaign settings", "Create an ad group", "Create an ad"];
    }

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
      setActiveStep(0);
    };

    return (
      <>
        <div className={classes.dashboardContent}>
          <Grid item xs={12} md={12}>
            <Typography className={classes.h6} variant="h6">
              Trackstatus
            </Typography>
          </Grid>
          <div className={classes.cctnResults}>
            {/* <Grid item xs={12}>
              <EmptyListing emptyText="Your application status will appear here" />
            </Grid> */}
            <Grid xs={12} md={12}>
              <Paper boxShadow={3}>
                <div className={classes.cctnsearchBox}>
                  <Grid xs={12} md={12}>
                    <div className={classes.cctnsearchBox}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            InputProps={{ disableUnderline: true }}
                            onKeyDown={this.keyDown}
                            //   id="outlined-full-width"
                            //   style={{ margin: 8 }}
                            placeholder="Search here"
                            //   fullWidth
                            margin="normal"
                            placeholder="Enter Application ID"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className={classes.selectEmpty}
                            InputProps={{
                              disableUnderline: true,
                              endAdornment: (
                                <InputAdornment position="end">
                                  <SearchIcon className={classes.SearchIcon} />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Button
                            className={classes.clearSearchBtn}
                            variant="contained"
                            // color="primary"
                          >
                            search
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>

                  <Grid container direction="row" spacing={3}>
                    <Grid item xs={12}>
                      <div className={classes.cctnsearchBox}>
                        <Stepper
                          //   connector={<Connector />}
                          activeStep={activeStep}
                          orientation="vertical"
                        >
                          {steps.map((label, index) => (
                            <Step
                              style={{
                                color: "secondary",

                                // opacity: "1",
                              }}
                              key={label}
                            >
                              <StepLabel
                                style={{
                                  color: "secondary",

                                  // opacity: "1",
                                }}
                              ></StepLabel>
                              <StepContent>
                                <Grid container spacing={3}>
                                  <Grid item xs={12} md={12}>
                                    <Paper className={classes.papercontent}>
                                      <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                          <Typography
                                            style={{
                                              color: "#646d7e",
                                              // opacity: "1",
                                            }}
                                          >
                                            Application submitted
                                          </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                          <Typography
                                            style={{
                                              color: "#646d7e",
                                              // opacity: "1",
                                            }}
                                          >
                                            Date : 10/09/2020
                                          </Typography>
                                        </Grid>
                                      </Grid>
                                    </Paper>
                                  </Grid>
                                </Grid>
                              </StepContent>
                            </Step>
                          ))}
                        </Stepper>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Paper>
            </Grid>
          </div>
        </div>
      </>
    );
  }
}
trackstatus.propTypes = {
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

export const styledtrackstatus = withStyles(styles)(trackstatus);

export default connect(mapStateToProps, mapDispatchToProps)(styledtrackstatus);
