export const styles = (theme) => ({
  root: {
    minWidth: 300,
    marginRight: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 2,
  },
  Pie: {
    width: "8%",
    height: "4%",
  },
  buttonprev: {
    background: "#dce0e7",
    borderRadius: "4px",
    opacity: "1",
    color: "black",
    fontSize: "small",
    textTransform: "none",
    float: "right",
    margin: "0 0 0 10px",
  },
  tablehead: {
    background: "#1daab1",
    color: "#ffffff",
  },
  TableCell: {
    color: "#ffffff",
  },
  Pie1: {
    marginBottom: "80%",
  },
  CardStyle: {
    borderRadius: "20px",

    boxShadow: "0px 3px 6px #AFB4C929",

    opacity: "1",

    "&:hover": {
      boxShadow: "20px 10px 10px #AFB4C933",
    },
  },
  CardStyle1: {
    borderRadius: "20px",

    boxShadow: "0px 3px 6px #AFB4C929",

    opacity: "1",
    width: "92%",
    height: "-100%",
    "&:hover": {
      boxShadow: "20px 10px 10px #AFB4C933",
    },
  },
  CardContent1: {
    height: "100%",
    marginRight: theme.spacing.unit * 1,
    marginLeft: theme.spacing.unit * 1,
    shadowColor: "#2E9298",
    shadowOffset: { width: "10", height: "3" },
    shadowRadius: "30",
    shadowOpacity: "1.0",
  },
  NotifyIcon: {
    width: theme.spacing(10),
    height: theme.spacing(7),
    // marginLeft: theme.spacing.unit * 13,
  },
  CardContent: {
    marginRight: theme.spacing.unit * 1,
    marginLeft: theme.spacing.unit * 1,
    shadowColor: "#2E9298",
    shadowOffset: { width: "10", height: "3" },
    shadowRadius: "30",
    shadowOpacity: "1.0",
  },
  Number: {
    fontSize: "50px",
    fontFamily: " Roboto,Medium",
    letterSpacing: "0px",
    color: "#242021",
    opacity: "1",
  },
  StatusText: {
    fontSize: "18px",
    letterSpacing: "0px",
    fontFamily: "Roboto,Medium",
    color: "#242021",
  },
  TravelRequestGrid: {
    marginTop: theme.spacing.unit * 1,
    textalign: "left",
    marginRight: theme.spacing.unit * 1,
    color: "#1daab1",
    fontSize: "20px",
    fontWeight: "bold",
    opacity: "1",
  },
  Heading: {
    textalign: "left",
    marginRight: theme.spacing.unit * 1,
    color: "#1daab1",
    fontSize: "20px",
    fontWeight: "bold",
    opacity: "1",
  },
  TravelRequests: {
    marginTop: theme.spacing.unit * 3,
  },
  TravelRequestPaper: {
    width: "98%",
    backgroundColor: "white",
  },
  TravelRequestHeading: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 5,
  },
  h6: {
    fontSize: "1.25rem",
    letterSpacing: "0px",
    color: "#1daab1",
    opacity: "1",
    marginLeft: "27px",
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  tablehead: {
    color: "#242021",
    fontFamily: "Roboto,Medium",
    fontSize: "14px",
    fontWeight: "bold",
  },
  TableBodyStyle: {
    backgroundColor: "#F5F6FA",
    color: "#242021",
    fontFamily: "Roboto,Regular",
    fontSize: "14px",
  },
  ViewGrid: {
    marginLeft: theme.spacing.unit * 6,
    marginRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 8,
  },

  ViewRightGrid: {
    marginTop: theme.spacing.unit * 6,
  },
  BackArrow: {
    marginLeft: theme.spacing.unit * 3,
    color: "#A2B6C5",
    marginTop: theme.spacing.unit * 1,
  },
  TravelText: {
    marginLeft: theme.spacing.unit * 3,
    color: "#242021",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "24px",
    opacity: 1,
  },
  ViewGrid: {
    marginTop: theme.spacing.unit * 5,
  },
  DialogTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    opacity: "1",
    fontFamily: "Roboto",
  },
  DialogButton: {
    backgroundColor: "#692495",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: "12px",
    width: "8vw",

    "&:hover": {
      backgroundColor: "#C5D4DF",
      color: "#242021",
    },
  },
  DialogButton2: {
    backgroundColor: "#C5D4DF",
    color: "#242021",
    fontFamily: "Roboto",

    fontSize: "12px",
    width: "8vw",

    "&:hover": {
      backgroundColor: "#692495",
      color: "#FFFFFF",
    },
  },

  ApproveButton: {
    backgroundColor: "#692495",
    color: "#FFFFFF",
    fontFamily: "Roboto",

    fontSize: "12px",
    marginLeft: theme.spacing.unit * 3,
    "&:hover": {
      backgroundColor: "#C5D4DF",
      color: "#242021",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30vw",
    },
    [theme.breakpoints.up("md")]: {
      width: "10vw",
    },
  },
  ForwardButton: {
    backgroundColor: "#C5D4DF",
    color: "#242021",
    fontFamily: "Roboto",

    fontSize: "12px",
    "&:hover": {
      backgroundColor: "#692495",
      color: "#FFFFFF",
    },
    [theme.breakpoints.down("sm")]: {
      width: "47vw",
    },
    [theme.breakpoints.up("md")]: {
      width: "12vw",
    },
  },
  ForwardCEOButton: {
    backgroundColor: "#C5D4DF",
    color: "#242021",
    fontFamily: "Roboto",

    fontSize: "12px",
    "&:hover": {
      backgroundColor: "#692495",
      color: "#FFFFFF",
    },
    [theme.breakpoints.down("sm")]: {
      width: "47vw",
      marginLeft: theme.spacing.unit * 3,
    },
    [theme.breakpoints.up("md")]: {
      width: "12vw",
    },
  },
  RejectButton: {
    backgroundColor: "#C5D4DF",
    color: "#242021",
    fontFamily: "Roboto",

    fontSize: "12px",
    "&:hover": {
      backgroundColor: "#692495",
      color: "#FFFFFF",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30vw",
    },
    [theme.breakpoints.up("md")]: {
      width: "6vw",
      marginRight: theme.spacing.unit * 2,
    },
  },
  DialogTextField: {
    width: "25vw",
    // height: "25vh",
  },
  BoxStyle: {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 3px 6px #AFB4C929",
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 4,
    borderRadius: "15px",
    width: "95%",
  },
  EmployeeImage: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  },
  PendingIcon: {
    marginRight: theme.spacing.unit * 3,
    // marginBottom: theme.spacing.unit * 2,
  },
  PendingTypography: {
    color: "#242021",
    fontFamily: "Roboto",

    fontSize: "12px",
  },
  AvatarGrid: {
    marginLeft: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 2,
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing.unit * 1,
    },
  },
  TyoGrid: {
    marginRight: theme.spacing.unit * 6,
    marginTop: theme.spacing.unit * 4,
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing.unit * 3,
    },
  },
  NameTypo: {
    color: "#242021",
    fontWeight: "bold",
    fontSize: "16px",
    fontFamily: "Roboto",
    opacity: "1",
  },
  EmailTypo: {
    color: "#242021",
    opacity: "0.5",
    fontWeight: "Regular",
    fontSize: "14px",
    fontFamily: "Roboto",
    marginTop: theme.spacing.unit * 0.2,
  },
  EmailGrid: {
    marginTop: theme.spacing.unit * 1,
  },
  IdTypo: {
    color: "#242021",
    fontWeight: "bold",
    fontSize: "16px",
    fontFamily: "Roboto",
    opacity: "1",
  },
  DividerStyle: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: "#C5D4DF",
    height: "1px",
  },
  MainDetailsGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  DetailsGrid1: {
    marginLeft: theme.spacing.unit * 5,
  },
  DetailsGrid2: {
    marginLeft: theme.spacing.unit * 5,
  },
  GridDividerStyle: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    backgroundColor: "#C5D4DF",
    height: "1px",
  },
  DescriptionText: {
    marginLeft: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 3,
    color: "#242021",
    fontWeight: "bold",
    fontSize: "16px",
    fontFamily: "Roboto",
    opacity: "1",
  },
  TablePaper: {
    marginTop: theme.spacing.unit * 1,
    borderRadius: "20px",
    width: "96%",

    boxShadow: "0px 3px 6px #AFB4C929",

    opacity: "1",
  },
  OutPaper: {
    borderRadius: "20px",
  },
  paginationalign: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    float: "left",
    marginLeft: "76%",
  },
  PaginationColor: {
    color: "primary",
  },
  selectEmpty: {
    position: "relative",
    minWidth: "135%",
    background: "#ffffff 0% 0%",
    borderRadius: "4px",
    opacity: "1",
    marginTop: "8px",
    fontSize: "small",
    border: " 1px solid #ccc",
    padding: "3px 14px",
    color: "#a2a2a2",
  },
  searchBtnRight: {
    width: "max-content",
    textAlign: "right",
    marginBottom: "5px",
    marginRight: "auto",
    float: "left",
    marginLeft: "0.4%",
  },
  GridBoxCheck: {
    marginRight: theme.spacing.unit * 83,
  },
  CheckBox: {
    // marginRight: theme.spacing.unit * -43,
    marginTop: theme.spacing.unit * 3,
  },
  SearchBoxCheck: {
    marginLeft: theme.spacing.unit * 103,
  },
  SearchBox: {
    marginTop: theme.spacing.unit * -6,
    marginBottom: theme.spacing.unit * 4,
  },
});
