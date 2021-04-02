import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import MenuList from "@material-ui/core/MenuList";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import PeopleIcon from "@material-ui/icons/People";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";

import CssBaseline from "@material-ui/core/CssBaseline";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import Tooltip from "@material-ui/core/Tooltip";
import Lock from "@material-ui/icons/LockOutlined";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Input from "@material-ui/core/Input";

import { withStyles } from "@material-ui/core/styles";
import _ from "lodash";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { Passport } from "../../assets/svg/passport";
// import { Logout } from "../../assets/svg/logout";
import { History } from "../../assets/svg/history";
import { PCC } from "../../assets/svg/pcc";
import { NOC } from "../../assets/svg/noc";
import { Report } from "../../assets/svg/report";
import { TrackChanges } from "../../assets/svg/track";
import { Upload } from "../../assets/svg/upload";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import appUrls from "../../config/appUrls";
// import { logout, logoutclicked } from "../../data/session/actions";
// import permissions from "../../config/appUrls";
import getUsertype from "../../services/getUsertype";
import IconButton from "@material-ui/core/IconButton";
import { styles } from "./styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from "@material-ui/core/InputAdornment";
import fire from "../../config/fire";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";

import Typography from "@material-ui/core/Typography";
import { Hidden } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Assessment from "@material-ui/icons/AssessmentOutlined";
import KpLogoSmall from "../../assets/images/kerala_police_logo_small.png";
import UltsLogoSmall from "../../assets/images/ults-logo-small.png";
import Gradeb from "../../screens/gradeb";
import Trackstatus from "../../screens/Trackstatus";
import logonew1 from "../../assets/images/logonew1.png";
class NavigationDrawer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
      showPassword: false,
      showNewConfirmedPassword: false,
      showConfirmPassword: false,
      data: {
        password: "",
        newPassword: "",
        confirmPassword: "",
      },
      errors: {
        password: "",
        newPassword: "",
        confirmPassword: "",
      },
      rules: {
        password: { required: true },
        newPassword: { required: true },
        confirmPassword: { required: true },
      },
    };
  }
  logout = () => {
    console.log("logout");
    // localStorage.removeItem("email");
    fire.auth().signOut();
    this.props.navigateTo("/login");
  };
  handleClickShowPassword = () => {
    this.setState((state) => ({ showPassword: !state.showPassword }));
  };

  handleClickShowConfirmPassword = () => {
    this.setState((state) => ({
      showConfirmPassword: !state.showConfirmPassword,
    }));
  };

  handleClickShowNewPassword = () => {
    this.setState((state) => ({
      showNewConfirmedPassword: !state.showNewConfirmedPassword,
    }));
  };

  handleChange = (event) => {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value },
      errors: {
        ...this.state.errors,
        [event.target.name]: "",
      },
    });
  };
  handleDrawerOpen = () => {
    this.setState({
      ...this.state,
      open: true,
    });
  };

  handleDrawerClose = () => {
    this.setState({
      ...this.state,
      open: false,
    });
  };
  onLogout = (event) => {
    this.props.navigateTo("/login");
  };
  handleMenuClick1 = () => {
    this.setState({
      ...this.state,
      value: 0,
    });
  };
  handleMenuClick2 = () => {
    this.setState({
      ...this.state,
      value: 1,
    });
  };
  handleMenuClick3 = () => {
    this.setState({
      ...this.state,
      value: 2,
    });
  };
  handleMenuClick4 = () => {
    this.setState({
      ...this.state,
      value: 3,
    });
  };
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };
  handlealert = () => {
    // this.props.signUp(data);
    this.setState((state) => ({
      ...this.state,
      isOpen1: true,
    }));
  };
  changepassword = (event) => {
    this.props.navigateTo(appUrls.GRADEB_URL);
  };

  onNavClick = (feature, event) => {
    const { navigateTo } = this.props;
    event.preventDefault();
    switch (feature) {
      case "Gradeb": {
        navigateTo(appUrls.GRADEB_URL);
        break;
      }
      case "Gradeb": {
        navigateTo(appUrls.TRACKSTATUS_URL);
        break;
      }

      default:
        return "";
    }
  };
  render() {
    const {
      width,
      userInfo,
      handleDrawerOpen,
      handleDrawerClose,

      open,
      setOpen,
      errors,
      isOpen,
      isOpen1,
      isSideDrawerOpen,
    } = this.state;
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        {this.state.isOpen1 ? (
          <div>
            <Dialog
              open={isOpen1}
              aria-labelledby="alert-dialog-title"
              disableBackdropClick="true"
            >
              <DialogTitle
                style={{
                  textAlign: "center",
                  // lineHeight: 0.6,
                  fontWeight: "900",
                  fontSize: "bold",
                  color: "#1daab1",

                  marginBottom: "-3%",
                }}
              >
                Change Password
              </DialogTitle>
              <DialogContent>
                <Grid item xs={12} md={12}>
                  <FormControl fullWidth>
                    <TextField
                      style={{
                        position: "relative",
                        minHeight: "50%",
                        minWidth: "95%",
                        background: "#ffffff 0% 0%",
                        borderRadius: " 4px",
                        opacity: "1",
                        fontSize: "small",
                        border: " 1px solid #ccc",
                        paddingRight: "24px",
                        //   padding: "3px 14px",
                        color: "#a2a2a2",
                        textAlign: "center",
                        justifyContent: "center",
                        alignSelf: "center",
                      }}
                      className={this.props.classes.centerText}
                      placeholder="Currentpassword"
                      InputProps={{ disableUnderline: true }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    ></TextField>
                  </FormControl>
                </Grid>

                <br></br>
                <Grid item xs={12} md={12}>
                  <FormControl fullWidth>
                    <TextField
                      style={{
                        position: "relative",
                        height: "50%",
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
                      placeholder="Newpassword"
                      InputProps={{ disableUnderline: true }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    ></TextField>
                  </FormControl>
                </Grid>

                <br></br>
                <Grid item xs={12} md={12}>
                  <FormControl fullWidth>
                    <TextField
                      style={{
                        position: "relative",
                        height: "90%",
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
                      placeholder="Confirmpassword"
                      InputProps={{ disableUnderline: true }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    ></TextField>
                  </FormControl>
                </Grid>
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
                    onClick={(e) => this.changepassword()}
                    href="/navigationdrawer"
                  >
                    Change password
                  </Button>
                </Grid>
              </DialogActions>
              <br></br>
            </Dialog>
          </div>
        ) : null}
        <CssBaseline />
        <AppBar
          position="fixed"
          noShadow={true}
          elevation={0}
          style={{ boxShadow: "none" }}
          className={
            isWidthUp("sm", width)
              ? clsx(classes.appBar, {
                  [classes.appBarShift]: this.state.open,
                })
              : classes.appBar
          }
        >
          <Toolbar style={{ boxShadow: "none" }} disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(
                classes.menuButton,
                this.state.open && this.props.classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography className={classes.h6} variant="h6" noWrap>
              <div className={classes.headerText}>
                {" "}
                Signed in as <span className={classes.span}>username</span>
              </div>
            </Typography> */}
            <div className={classes.logoutBtn}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <Grid item xs>
                    <Tooltip
                      title="Reset Password"
                      placement="left-start"
                      className={classes.poweredByTextStyle}
                    >
                      <IconButton
                        color="default"
                        onClick={this.handlealert}
                        className={classes.lockIcon}
                      >
                        <Lock className={classes.lockIcon} />
                      </IconButton>
                    </Tooltip>
                    {/* <LockOutlinedIcon className={classes.lockIcon} /> */}
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Button
                    onClick={this.logout}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    startIcon={<PowerSettingsNewIcon />}
                  >
                    Logout
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Toolbar>
          <Divider variant="middle" />
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.state.open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <Grid container spacing={3}>
              {/* <Grid item xs={3}>
                <img
                  className={classes.logoKpoliceSmall}
                  src={logonew1}
                  alt="logonew1"
                />
              </Grid> */}
              <Grid item xs className={classes.logoText}>
                Kerala state Electricity Licensing Board
              </Grid>
            </Grid>

            <IconButton
              className={classes.rtl}
              onClick={this.handleDrawerClose}
            >
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <List className={classes.leftMenu}>
            <MenuList className={classes.leftMenulist}>
              {["Gradeb", "Trackstatus"].map((text, index) =>
                text === "Gradeb" ? (
                  <>
                    <MenuItem
                      onClick={(e) => this.handleMenuClick1()}
                      className={classes.leftMenu1}
                    >
                      <InsertDriveFileOutlinedIcon
                        fontSize="small"
                        className={classes.LeftMenuIcons}
                      />
                      Registration form
                    </MenuItem>
                  </>
                ) : text === "Trackstatus" ? (
                  <>
                    <MenuItem
                      onClick={(e) => this.handleMenuClick2()}
                      className={classes.leftMenu1}
                    >
                      <InsertDriveFileOutlinedIcon
                        fontSize="small"
                        className={classes.LeftMenuIcons}
                      />
                      Trackstatus
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <ListItem
                      onClick={(e) => this.onNavClick(text, e)}
                      button
                      key={text}
                    >
                      <ListItemText primary={text} />
                    </ListItem>
                  </>
                )
              )}
            </MenuList>
          </List>
          <div className={classes.footerLogo}>
            <div className={classes.powerdByTextSmall}>
              Powered By
              <img
                src={UltsLogoSmall}
                className={classes.ultsLogoSmall}
                alt="Kerala Police Logo"
              />
            </div>
          </div>
        </Drawer>
        <main
          className={clsx(this.props.classes.content, {
            [this.props.classes.contentShift]: this.state.open,
          })}
        >
          {this.state.value === 0 ? <Gradeb /> : null}
          {this.state.value === 1 ? <Trackstatus /> : null}

          <div className={this.props.classes.drawerHeader} />
        </main>
      </div>
    );
  }
}

NavigationDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  openSideDrawer: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    // isLoggedIn: state.auth.isLoggedIn,
    // userInfo: state.auth.info,
    // isLoading: state.auth.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    navigateTo: (url) => dispatch(push(url)),
    // logout: () => dispatch(logout()),
    // logoutclicked: () => dispatch(logoutclicked()),
  };
}

const styledNavigationDrawer = withStyles(styles, { withTheme: true })(
  NavigationDrawer
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledNavigationDrawer);
