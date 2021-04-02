export const styles = (theme) => ({
  customFileUpload: {
    border: "1px solid #ccc",
    display: "inline-block",
    padding: "8px",
    cursor: "pointer",
    width: "96%",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    userSelect: "none",
    borderRadius: "2px",
    backgroundColor: "#FFF",
  },
  PendingImage: {
    float: "right",
    marginTop: "9%",
    width: "6%",
  },
  h6: {
    fontSize: "1.25rem",
    letterSpacing: "0px",
    color: "#1daab1",
    opacity: "1",
    marginLeft: "10px",
    fontWeight: "500",
  },
  arrow: {
    opacity: "1",
    marginLeft: "-1%",
    marginBottom: "-0.3%",
  },
  ContentsText: {
    letterSpacing: "0px",
    color: "#98a1b2",
    opacity: "1",
    fontSize: "14px",
    float: "left",
    marginRight: "10px",
  },
  avatarStyle: {
    marginLeft: "20px",
    height: "110px",
    width: "110px",
    [theme.breakpoints.down("xs")]: {
      height: "110px",
      width: "110px",
    },
    backgroundColor: "#1daab1",
    boxShadow:
      "0 2px 10px 0 rgba(0, 0, 0,.14), 0 3px 5px -2px rgba(0, 0, 0,.1)",
  },
  ContentsText1: {
    letterSpacing: "0px",
    color: "#98a1b2",
    opacity: "1",
    fontSize: "14px",
    float: "left",
    // marginLeft: "120px",
  },
  dashboardContent: {
    marginTop: "50px",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
  h6: {
    fontSize: "1.25rem",
    letterSpacing: "0px",
    color: "#1daab1",
    opacity: "1",
    marginLeft: "27px",
    fontWeight: "500",
  },
  SearchIcon: {
    color: "#C4CCDC",
  },
  button: {
    float: "right",
    textAlign: "right",
    marginRight: "90%",
  },

  cctnsearchBox: {
    padding: "20px",
    margin: "10px 0",

    width: "maxcontent",
    textAlign: "Left",
    marginBottom: "20px",
    marginRight: "auto",

    // background: "#eceff4",
    // borderRadius: "5px",
    // borderRadius: "-800px",
    // borderWidth: "90%",
    // strokeWidth: "30",
  },
  buttonnext: {
    background: "#1daab1",
    borderRadius: "4px",
    opacity: "1",
    color: "#ffffff",
    fontSize: "small",
    textTransform: "none",
    float: "right",
    margin: "0 0 0 10px",
    // marginTop: "2%",
    "&:active": {
      backgroundColor: " #1daab1",
      color: "#ffffff",
    },
    "&:hover": {
      backgroundColor: " #1daab1",
      color: "#ffffff",
    },
  },
  buttonprev: {
    background: "#dce0e7",
    borderRadius: "4px",
    opacity: "1",
    color: "#949dae",
    fontSize: "small",
    textTransform: "none",
    float: "right",
    margin: "0 0 0 10px",
    // marginTop: "2%",
    "&:active": {
      backgroundColor: "#dce0e7",
      color: "#949dae",
    },
    "&:hover": {
      backgroundColor: "#dce0e7",
      color: "#949dae",
    },
  },
  buttonApprove: {
    background: "#1daab1",
    borderRadius: "4px",
    opacity: "1",
    color: "#ffffff",
    fontSize: "small",
    textTransform: "none",
    float: "right",
    margin: "50px 0 0 10px",
    // marginTop: "2%",
    "&:active": {
      backgroundColor: " #1daab1",
      color: "#ffffff",
    },
    "&:hover": {
      backgroundColor: " #1daab1",
      color: "#ffffff",
    },
  },
  buttonReject: {
    background: "#dce0e7",
    borderRadius: "4px",
    opacity: "1",
    color: "#949dae",
    fontSize: "small",
    textTransform: "none",
    float: "right",
    margin: "50px 0 0 10px",
    // marginTop: "2%",
    "&:active": {
      backgroundColor: "#dce0e7",
      color: "#949dae",
    },
    "&:hover": {
      backgroundColor: "#dce0e7",
      color: "#949dae",
    },
  },
  buttonprev1: {
    background: "#dce0e7",
    borderRadius: "4px",
    opacity: "1",
    color: "#949dae",
    fontSize: "small",
    textTransform: "none",
    float: "right",

    // marginTop: "2%",
    "&:active": {
      backgroundColor: "#dce0e7",
      color: "#949dae",
    },
    "&:hover": {
      backgroundColor: "#dce0e7",
      color: "#949dae",
    },
  },

  ApproveReject1: {
    marginBottom: "7%",
  },

  pdfbutton: {
    background: "#dce0e7",
    borderRadius: "4px",
    opacity: "1",
    color: "#242021",
    fontSize: "small",
    textTransform: "none",

    marginTop: "-2%",
    "&:active": {
      backgroundColor: "#dce0e7",
      color: "#242021",
    },
    "&:hover": {
      backgroundColor: "#dce0e7",
      color: "#242021",
    },
  },

  passportRequestBg: {
    marginBottom: "20px",
    padding: "20px",
    background: "#eceff5",
    borderRadius: "8px",
  },
  folderIcon: {
    marginRight: "10px",
    color: "white",
    height: "30px",
    width: "30px",
    padding: "5px",
    background: "#74329c 0% 0% no-repeat padding-box",
    opacity: "1",
    borderRadius: "50%",
  },
  heading: {
    letterSpacing: "0px",
    color: "#98a1b2",
    opacity: "1",
    fontSize: "14px",
    marginTop: "6px",
  },
  completedGreen: {
    color: "#65bc6b",
    margin: "6px 5px 0 auto",
  },
  subHeading: {
    letterSpacing: "0px",
    color: "#98a1b2",
    opacity: "1",
    fontSize: "14px",
    backgroundSize: "1px solid #98a1b2",
    marginTop: "6px",
  },
  avatarName: {
    color: "#98a1b2",
    opacity: "1",
    fontSize: "small",
    margin: "10px",
  },
  ContentsText: {
    letterSpacing: " 0px",
    color: "#98a1b2",
    opacity: "1",
    fontSize: "14px",
    // float: "left",
    // marginRight: "10px",
  },
  ContentsText1: {
    letterSpacing: " 0px",
    color: "#98a1b2",
    opacity: "1",
    fontSize: "14px",
    float: "right",
    marginRight: "10px",
  },
  button: {
    float: "left",
  },
  button1: {
    background: "#3d358f ",
    opacity: "1",
    letterSpacing: "0px",
    color: "#ffffff",
    fontSize: "16px",
    textTransform: "none",
  },
  inputbase: {
    width: "100%",
    height: "55%",
    textAlign: "left",
    fontSize: "small",
  },
  inputbase2: {
    width: "100%",
  },
  tablehead: {
    background: "#1daab1",
    color: "#ffffff",
  },
  TableCell: {
    color: "#ffffff",
  },

  deleteitem: {
    color: "rgb(100, 109, 126)",
  },
  secondbar: {
    color: "white",
    backgroundColor: "#424242",
    paddingTop: "30px",
    fontSize: "20px",
    paddingLeft: "2vh",
    paddingBottom: "30px",
  },

  grids: {
    width: " 60%",
    display: " flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: " 50px",
    // marginLeft: "490px"
  },
  texts: {
    marginLeft: "13%",
    fontSize: "22px",
  },
  additem: {
    background: "#1daab1",
    float: "right",
    color: "#ffffff",
    marginBottom: "2%",
    "&:active": {
      backgroundColor: " #1daab1",
      color: "#ffffff",
    },
    "&:hover": {
      backgroundColor: " #1daab1",
      color: "#ffffff",
    },
  },
  saves: {
    marginTop: " -150px",
    marginLeft: "70%",
  },
  rootpaper: {
    // marginBottom: "100px",
  },
  checked: {
    color: "#1daab1",

    "&$checked": {
      color: "#1daab1",
    },
  },
  dottedline: {
    borderStyle: "dotted",
    width: "18%",
  },
  dottedline1: {
    borderStyle: "dotted",
    width: "8%",
  },
});
