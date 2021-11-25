import { makeStyles } from "@material-ui/core";
import Theme from "../../assets/Themes"

const colors = Theme(localStorage.getItem("palette"))

export const useStyles = makeStyles(() => ({

  joinClass: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: "14px",
    fontWeight: 400,
    letterSpacing: "0.2px",
    lineHeight: "20px",
    padding: "24px",
    flexGrow: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  joinClassWrapper: {
    display: "flex",
    justifyContent: "space - between",
    borderBottom: "0.0625rem solid #e0e0e0",
    padding: `"0.5rem", " 1rem"`,
    width: "98vw",
  },

  joinClassWrapper2: {
    height: "48px",
    color: "#5f6368",
    fill: "#5f6368",
    display: "flex",
    alignItems: "center",
  },

  joinClassTopHead: {
    fontFamily: `"Google Sans", "Roboto", "Arial", sans - serif`,
    fontSize: "1.375rem",
    fontWeight: 400,
    lineHeight: "1.5rem",
    color: "#80868b",
    marginLeft: "1rem",
  },

  joinClassSvg: {
    cursor: "pointer",
  },

  joinClassBtn: {
    width: "80px!important",
    height: "40px!important",
  },

  joinClassForm: {
    marginTop: "1rem",
    maxWidth: "35rem",
    boxSizing: "border - box",
    padding: "1.5rem",
    width: "100 %",
    backgroundColor: "#fff",
    border: "0.0625rem solid #dadce0",
    borderRadius: "0.5rem",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  joinClassFormText: {
    color: "#7f7f7f",
    fontSize: "0.875rem",
    marginBottom: "0.5rem",
  },

  joinClassLoginInfo: {
    alignItems: "center",
    display: "flex",
    flexFlow: "row wrap",
    width: "100 %",
    justifyContent: "space - between",
  },

  joinClassLoginName: {
    letterSpacing: "0.01785714em",
    fontFamily: `"Google Sans", "Roboto", "Arial", sans - serif`,
    fontSize: " 0.875rem",
    fontWeight: 500,
    lineHeight: "1.25rem",
    color: "#3c4043",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    display: "block",
  },

  joinClassLoginEmail: {
    letterSpacing: "0.025em",
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: "1rem",
    color: "#5f6368",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    display: "block",
  },

  joinClassLoginText: {
    marginLeft: "15px",
    width: "80 %",
  },

  joinClassClassLeft: {
    display: "flex",
  }
}));