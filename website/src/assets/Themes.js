const colors = {
  DarkTheme: {
    background_color: "#051014",
    header_color: "",
    words_color: "#000000",
  },
  ColorBlind: {
    background_color: "red",
    words_color: "#000000",
  },
  LightTheme: {
    background_color: "#FFFFFF",
    words_color: "#000000",
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