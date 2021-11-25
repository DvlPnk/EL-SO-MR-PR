import { makeStyles } from "@material-ui/core";
import Theme from "../../assets/Themes"

const colors = Theme(localStorage.getItem("palette"))

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    color: "black",
  },
  title: {
    fontSize: "1.38rem",
    color: "#051014",
    marginLeft: "5px",
    cursor: "pointer",
  },
  appBar: {
    backgroundColor: colors.header_color,
    color: "black",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerWrapper: {
    display: "flex",
    alignItems: "center",
  },
  header__wrapper__right: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginRight: "15px",
    color: "#051014",
    cursor: "pointer",
  },
}));