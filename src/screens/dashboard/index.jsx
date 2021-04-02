import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { find } from "lodash";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Link from "@material-ui/core/Link";
import {
  ChartDonut,
  ChartThemeColor,
  ChartThemeVariant,
} from "@patternfly/react-charts";

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
import pending from "../../assets/images/Pending.svg";
import Approve from "../../assets/images/Approved.svg";
import Reject from "../../assets/images/Rejected.svg";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";

// import UltsLogo from "../../assets/images/ults-logo.png";
import appUrls from "../../config/appUrls";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Pagination from "@material-ui/lab/Pagination";
import VisibilityIcon from "@material-ui/icons/Visibility";
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
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

// import Pagination from "@material-ui/lab/Pagination";
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
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Search } from "@material-ui/icons";
import { Doughnut } from "react-chartjs-2";
// import {
//   Chart,
//   PieSeries,
//   Title,
// } from "@devexpress/dx-react-chart-material-ui";
import DonutChart from "react-donut-chart";
// import { Animation } from "@devexpress/dx-react-chart";
// import axios from "axios";
class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [
      //   { region: "Asia", val: 4119626293 },
      //   { region: "Africa", val: 1012956064 },
      //   { region: "Northern America", val: 344124520 },
      //   { region: "Latin America and the Caribbean", val: 590946440 },
      //   { region: "Europe", val: 727082222 },
      //   { region: "Oceania", val: 35104756 },
      // ],

      posts: [],
      loading: "false",
      rows: [{}],
      activepage: 1,

      rowsPerPage: 3,
      pageNumber: 1,
      checked: true,
    };
  }
  handleTable = () => {
    this.props.navigateTo("/applicantdetails");
  };
  handleTable2 = () => {
    this.props.navigateTo("/applicantdetailsgradeb");
  };
  handleTable3 = () => {
    this.props.navigateTo("/applicantdetailsgradea");
  };
  //   getData = () => {
  //     axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
  //       console.log(response);
  //       this.setState({
  //         posts: response.data,
  //         totalCount: response.data.length,
  //       });

  //       console.log(this.state.posts);
  //     });
  //   };
  //   componentDidMount() {
  //     this.getData();
  //   }
  handleCheckbox = (event) => {
    this.setState({
      ...this.state,
      checked: event.target.checked,
    });
  };

  // handlePageChange = (event, pageNumber) => {
  //   console.log(`active page is ${pageNumber}`);
  //   this.setState({
  //     activePage: pageNumber,
  //   });
  // };

  handlePageChange = (event, pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.state.activepage = pageNumber;
    this.setState((state) => ({
      ...this.state,

      activepage: pageNumber,
    }));
    console.log("what is active page", this.state.activepage);
  };
  handleSearchChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { loading, success, data, isOpen, isOpen1, errors } = this.state;
    const { classes } = this.props;
    const indexOfLastPost = this.state.activePage * this.state.rowsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.rowsPerPage;
    const currentPosts = this.state.posts.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    const { data: chartData } = this.state;
    console.log(currentPosts);

    const options = {
      animationEnabled: true,
      height: 105,

      subtitles: [
        {
          text: "71% Positive",
          verticalAlign: "center",
          fontSize: 5,

          dockInsidePlotArea: true,
        },
      ],

      data: [
        {
          type: "doughnut",
          radius: "150%",
          innerRadius: "49%",
          showInLegend: true,
          height: "10%",
          indexLabel: "{name}: {y}",
          yValueFormatString: "#,###'%'",
          dataPoints: [
            { color: "#65BC6B", name: "Approved", y: 30 },
            { color: "#EB5757", name: "Rejected", y: 20 },
            { color: "#FFBF3A", name: "Pending", y: 40 },
          ],
        },
      ],
    };
    const state = {
      labels: ["Approve", "Reject", "Pending"],
      datasets: [
        {
          backgroundColor: ["#65BC6B", "#FF8472", "#FFBF3A"],
          hoverBackgroundColor: ["#65BC6B", "#FF8472", "#FFBF3A"],
          data: [65, 59, 80],
        },
      ],
    };
    return (
      <center>
        <div className={classes.root}>
          <CssBaseline />
          <Grid container justify="flex-start" alignItems="flex-start">
            <Typography className={classes.TravelRequestGrid}>
              Dashboard
            </Typography>
          </Grid>
          <br></br>
          <Grid
            container
            spacing={5}
            direction="row"
            justify="space-between"
            alignItems="center"
            // className={classes.ContainerStyle}
          >
            <Grid item xs>
              <Card variant="outlined" className={classes.CardStyle}>
                <CardContent className={classes.CardContent}>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={12} md={6}>
                      <Typography className={classes.Number}>4</Typography>
                      <Typography className={classes.StatusText}>
                        Pending
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <img
                        className={classes.PendingImage}
                        src={pending}
                        alt="pending"
                      />
                    </Grid>

                    <Grid>{/* <img src={"./images/Approved.svg"} /> */}</Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs>
              <Card variant="outlined" className={classes.CardStyle}>
                <CardContent className={classes.CardContent}>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={12} md={6}>
                      <Typography className={classes.Number}>4</Typography>
                      <Typography className={classes.StatusText}>
                        Approve
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <img
                        className={classes.PendingImage}
                        src={Approve}
                        alt="Approve"
                      />
                    </Grid>
                    <Grid>{/* <img src={"./images/Approved.svg"} /> */}</Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs>
              <Card variant="outlined" className={classes.CardStyle}>
                <CardContent className={classes.CardContent}>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={12} md={6}>
                      <Typography className={classes.Number}>4</Typography>
                      <Typography className={classes.StatusText}>
                        Rejected
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <img
                        className={classes.PendingImage}
                        src={Reject}
                        alt="Reject"
                      />
                    </Grid>
                    <Grid>{/* <img src={"./images/Approved.svg"} /> */}</Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs>
              <Card variant="outlined" className={classes.CardStyle1}>
                <CardContent className={classes.CardContent1}>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={12} md={12}>
                      <Doughnut
                        data={state}
                        options={{
                          legend: {
                            display: true,
                            position: "right",
                          },
                        }}
                      />
                    </Grid>{" "}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <br></br>
          <Grid container justify="flex-start" alignItems="flex-start">
            <Typography className={classes.Heading}>
              Applicant Details
            </Typography>
          </Grid>
          <br></br>
          <div className={classes.searchBtnRight}>
            <Grid item xs={12}>
              <TextField
                InputProps={{ disableUnderline: true }}
                value={this.state.searchText}
                onKeyDown={this.keyDown}
                // id="outlined-full-width"
                style={{ margin: 20 }}
                placeholder="Search here"
                // fullWidth
                margin="normal"
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
          </div>{" "}
          <Paper className={classes.OutPaper}>
            <Paper className={classes.TablePaper}>
              <Table
                aria-label="simple table"
                className={this.props.classes.table}
              >
                <TableHead className={this.props.classes.tablehead}>
                  <TableRow>
                    <TableCell
                      className={this.props.classes.cell1}
                      align="center"
                      style={{ color: "white", background: "#1daab1" }}
                    >
                      Sl. No.
                    </TableCell>

                    <TableCell
                      align="center"
                      style={{ color: "white", background: "#1daab1" }}
                    >
                      Name of Person
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ color: "white", background: "#1daab1" }}
                    >
                      Email Id
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ color: "white", background: "#1daab1" }}
                    >
                      Application Id
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ color: "white", background: "#1daab1" }}
                    >
                      Status
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ color: "white", background: "#1daab1" }}
                    >
                      Veiw/action
                    </TableCell>
                  </TableRow>
                </TableHead>
                {this.state.activepage == 1 && (
                  <>
                    <TableBody>
                      {/* {console.log(this.state.rows)} */}
                      {this.state.rows.map((item, idx) => (
                        <TableRow>
                          {" "}
                          <TableCell align="center" style={{ color: "grey" }}>
                            1
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Mohhamed Gouse
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            MohhamedGouse@gmail.com
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            6302217177
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Approved
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            <Button
                              variant="outlined"
                              className={classes.buttonprev}
                              onClick={this.handleTable}
                            >
                              <VisibilityIcon> </VisibilityIcon>
                              View Application
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    <TableBody>
                      {/* {console.log(this.state.rows)} */}
                      {this.state.rows.map((item, idx) => (
                        <TableRow>
                          <TableCell align="center" style={{ color: "grey" }}>
                            2
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Ravi kumar
                          </TableCell>

                          <TableCell align="center" style={{ color: "grey" }}>
                            Ravikumar@gmail.com
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            6302217177
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Rejected
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            <Button
                              onClick={this.handleTable2}
                              variant="outlined"
                              className={classes.buttonprev}
                            >
                              <VisibilityIcon> </VisibilityIcon>
                              View Application
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>{" "}
                    <TableBody>
                      {/* {console.log(this.state.rows)} */}
                      {this.state.rows.map((item, idx) => (
                        <TableRow>
                          <TableCell align="center" style={{ color: "grey" }}>
                            3
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            kumarsai
                          </TableCell>

                          <TableCell align="center" style={{ color: "grey" }}>
                            kumarsai@gmail.com
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            6302217177
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Pending
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            <Button
                              variant="outlined"
                              className={classes.buttonprev}
                              onClick={this.handleTable3}
                            >
                              <VisibilityIcon> </VisibilityIcon>
                              View Application
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>{" "}
                  </>
                )}
                {this.state.activepage == 2 && (
                  <>
                    <TableBody>
                      {/* {console.log(this.state.rows)} */}
                      {this.state.rows.map((item, idx) => (
                        <TableRow>
                          <TableCell align="center" style={{ color: "grey" }}>
                            4
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            kumarsai
                          </TableCell>

                          <TableCell align="center" style={{ color: "grey" }}>
                            kumarsai@gmail.com
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            6302217177
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Pending
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            <Button
                              onClick={this.handleTable3}
                              variant="outlined"
                              className={classes.buttonprev}
                            >
                              <VisibilityIcon> </VisibilityIcon>
                              View Application
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>{" "}
                    <TableBody>
                      {this.state.rows.map((item, idx) => (
                        <TableRow>
                          <TableCell align="center" style={{ color: "grey" }}>
                            5
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Ravi kumar
                          </TableCell>

                          <TableCell align="center" style={{ color: "grey" }}>
                            Ravikumar@gmail.com
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            6302217177
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Rejected
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            <Button
                              variant="outlined"
                              className={classes.buttonprev}
                              onClick={this.handleTable2}
                            >
                              <VisibilityIcon> </VisibilityIcon>
                              View Application
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>{" "}
                    <TableBody>
                      {/* {console.log(this.state.rows)} */}
                      {this.state.rows.map((item, idx) => (
                        <TableRow>
                          <TableCell align="center" style={{ color: "grey" }}>
                            6
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            MohhamedGouse
                          </TableCell>

                          <TableCell align="center" style={{ color: "grey" }}>
                            Gouse@gmail.com
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            6302217177
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Approved
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            <Button
                              onClick={this.handleTable}
                              variant="outlined"
                              className={classes.buttonprev}
                            >
                              <VisibilityIcon> </VisibilityIcon>
                              View Application
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>{" "}
                  </>
                )}
                {this.state.activepage == 3 && (
                  <>
                    <TableBody>
                      {/* {console.log(this.state.rows)} */}
                      {this.state.rows.map((item, idx) => (
                        <TableRow>
                          <TableCell align="center" style={{ color: "grey" }}>
                            7
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Ravi kumar
                          </TableCell>

                          <TableCell align="center" style={{ color: "grey" }}>
                            Ravikumar@gmail.com
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            6302217177
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Rejected
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            <Button
                              onClick={this.handleTable3}
                              variant="outlined"
                              className={classes.buttonprev}
                            >
                              <VisibilityIcon> </VisibilityIcon>
                              View Application
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>{" "}
                    <TableBody>
                      {/* {console.log(this.state.rows)} */}
                      {this.state.rows.map((item, idx) => (
                        <TableRow>
                          {" "}
                          <TableCell align="center" style={{ color: "grey" }}>
                            8
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            kumarsai
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            kumarsai@gmail.com
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            6302217177
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Pending
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            <Button
                              variant="outlined"
                              className={classes.buttonprev}
                              onClick={this.handleTable3}
                            >
                              <VisibilityIcon> </VisibilityIcon>
                              View Application
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>{" "}
                    <TableBody>
                      {/* {console.log(this.state.rows)} */}
                      {this.state.rows.map((item, idx) => (
                        <TableRow>
                          <TableCell align="center" style={{ color: "grey" }}>
                            9
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            MohhamedGouse
                          </TableCell>

                          <TableCell align="center" style={{ color: "grey" }}>
                            Gouse@gmail.com
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            6302217177
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Approved
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            <Button
                              variant="outlined"
                              className={classes.buttonprev}
                              onClick={this.handleTable}
                            >
                              <VisibilityIcon> </VisibilityIcon>
                              View Application
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>{" "}
                  </>
                )}
                {this.state.activepage == 4 && (
                  <>
                    <TableBody>
                      {/* {console.log(this.state.rows)} */}
                      {this.state.rows.map((item, idx) => (
                        <TableRow>
                          <TableCell align="center" style={{ color: "grey" }}>
                            10
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Ravi kumar
                          </TableCell>

                          <TableCell align="center" style={{ color: "grey" }}>
                            Ravikumar@gmail.com
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            6302217177
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Rejected
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            <Button
                              variant="outlined"
                              className={classes.buttonprev}
                              onClick={this.handleTable2}
                            >
                              <VisibilityIcon> </VisibilityIcon>
                              View Application
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>{" "}
                    <TableBody>
                      {/* {console.log(this.state.rows)} */}
                      {this.state.rows.map((item, idx) => (
                        <TableRow>
                          <TableCell align="center" style={{ color: "grey" }}>
                            11
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            MohhamedGouse
                          </TableCell>

                          <TableCell align="center" style={{ color: "grey" }}>
                            Gouse@gmail.com
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            6302217177
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Approved
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            <Button
                              onClick={this.handleTable}
                              variant="outlined"
                              className={classes.buttonprev}
                            >
                              <VisibilityIcon> </VisibilityIcon>
                              View Application
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>{" "}
                    <TableBody>
                      {/* {console.log(this.state.rows)} */}
                      {this.state.rows.map((item, idx) => (
                        <TableRow>
                          <TableCell align="center" style={{ color: "grey" }}>
                            12
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Ravi kumar
                          </TableCell>

                          <TableCell align="center" style={{ color: "grey" }}>
                            Ravikumar@gmail.com
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            6302217177
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Rejected
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            <Button
                              onClick={this.handleTable2}
                              variant="outlined"
                              className={classes.buttonprev}
                            >
                              <VisibilityIcon> </VisibilityIcon>
                              View Application
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>{" "}
                  </>
                )}
                {this.state.activepage == 5 && (
                  <>
                    <TableBody>
                      {/* {console.log(this.state.rows)} */}
                      {this.state.rows.map((item, idx) => (
                        <TableRow>
                          <TableCell align="center" style={{ color: "grey" }}>
                            13
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            kumarsai
                          </TableCell>

                          <TableCell align="center" style={{ color: "grey" }}>
                            kumarsai@gmail.com
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            6302217177
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Pending
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            <Button
                              variant="outlined"
                              className={classes.buttonprev}
                              onClick={this.handleTable3}
                            >
                              <VisibilityIcon> </VisibilityIcon>
                              View Application
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>{" "}
                    <TableBody>
                      {/* {console.log(this.state.rows)} */}
                      {this.state.rows.map((item, idx) => (
                        <TableRow>
                          <TableCell align="center" style={{ color: "grey" }}>
                            14
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Ravi kumar
                          </TableCell>

                          <TableCell align="center" style={{ color: "grey" }}>
                            Ravikumar@gmail.com
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            6302217177
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Rejected
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            <Button
                              onClick={this.handleTable2}
                              variant="outlined"
                              className={classes.buttonprev}
                            >
                              <VisibilityIcon> </VisibilityIcon>
                              View Application
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>{" "}
                    <TableBody>
                      {/* {console.log(this.state.rows)} */}
                      {this.state.rows.map((item, idx) => (
                        <TableRow>
                          <TableCell align="center" style={{ color: "grey" }}>
                            15
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            MohhamedGouse
                          </TableCell>

                          <TableCell align="center" style={{ color: "grey" }}>
                            Gouse@gmail.com
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            6302217177
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            Approved
                          </TableCell>
                          <TableCell align="center" style={{ color: "grey" }}>
                            <Button
                              variant="outlined"
                              className={classes.buttonprev}
                              onClick={this.handleTable}
                            >
                              <VisibilityIcon> </VisibilityIcon>
                              View Application
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </>
                )}
              </Table>
            </Paper>
            <Grid
              container
              direction="row"
              alignItems="flex-end"
              justifyContent="flex-end"
            >
              <div
                className={classes.paginationalign}
                alignItems="flex-end"
                justifyContent="flex-end"
              >
                <Grid
                  item
                  xs={12}
                  alignItems="flex-end"
                  justifyContent="flex-end"
                >
                  <Pagination
                    alignItems="flex-end"
                    justifyContent="flex-end"
                    activepage={this.state.activepage}
                    count={Math.ceil(15 / 3)}
                    rowsPerPage={this.state.rowsPerPage}
                    onChange={this.handlePageChange}
                    variant="outlined"
                    shape="rounded"
                    color="standard"
                    // className={classes.PaginationColor}
                    alignItems="left"
                    component="div"
                    classes={{
                      select: classes.PaginationColor,
                    }}
                  ></Pagination>
                </Grid>
              </div>
            </Grid>
          </Paper>
        </div>
      </center>
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

export const Styleddashboard = withStyles(styles)(dashboard);

export default connect(mapStateToProps, mapDispatchToProps)(Styleddashboard);
