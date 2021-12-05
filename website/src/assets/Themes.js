const colors = {
  DarkTheme: {
    background_color: "#051014",
    form_background_color: "#051014",
    header_color: "#00BDD4",
    words_color: "#FFFFFF",
    font_color: "#FFFFFF",
  },
  ColorBlind: {
    background_color: "#0B3954",
    form_background_color: "#FFE66D",
    words_color: "#FFE66D",
    font_color: "#000000",
    header_color: "#FFE66D"
  },
  LightTheme: {
    background_color: "#FFFFFF",
    words_color: "#000000",
    font_color: "#000000",
    header_color: "#00BDD4",
    light_black_color: "3c4043",
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