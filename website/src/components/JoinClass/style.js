import { makeStyles } from "@material-ui/core";
import { color } from "@mui/system";
import Theme from "../../assets/Themes"

const colors = Theme(localStorage.getItem("palette"))

export const useStyles = makeStyles(() => ({
  textfield: {
    "& .MuiFormLabel-root": {
      color: colors.font_color
    },
    "& label.Mui-focused": {
      color: colors.font_color,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: colors.font_color,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: colors.font_color,
      },
      '&:hover fieldset': {
        borderColor: colors.font_color,
      },
      '&.Mui-focused fieldset': {
        borderColor: colors.font_color,
      },
    },
  },
  input: {
    color: colors.font_color
  }
}));