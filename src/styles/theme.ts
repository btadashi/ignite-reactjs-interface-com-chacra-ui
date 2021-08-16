import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "400": "#47585B",
      "300": "#999999",
      "200": "rgba(153, 153, 153, 0.5)",
      "100": "#DADADA",
      "50": "#F5F8FA",
    },
    yellow: {
      "400": "#FFBA08",
      "300": "rgba(255, 186, 8, 0.5)",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.400',
      }
    }
  }
});