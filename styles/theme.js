import { Montserrat, Open_Sans } from "@next/font/google";
import { createTheme } from "@mui/material/styles";

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const openSans = Open_Sans({
  weight: ["300", "400", "500", "700",],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  typography: {
    body1:{
      fontFamily: montserrat.style.fontFamily,
    },
    body2:{
      fontFamily: openSans.style.fontFamily,
    },
  },
});

export default theme;