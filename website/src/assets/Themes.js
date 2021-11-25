const colors = {
  DarkTheme: {
    background_color: "#051014",
    header_color: "#00BDD4",
    words_color: "#000000",
  },
  ColorBlind: {
    background_color: "#0B3954",
    words_color: "#000000",
    header_color: "#FFE66D"
  },
  LightTheme: {
    background_color: "#FFFFFF",
    words_color: "#000000",
    header_color: "#00BDD4"
  }
}

function Theme(value) {
  switch (value) {
    case "Dark":
      return colors.DarkTheme;
    case "CBlind":
      return colors.ColorBlind;
    case "Light":
      return colors.LightTheme;
  }
}


export default Theme;