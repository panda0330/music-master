import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Head from "next/head";
import { wrapper } from "../store";
import React from "react";
import { useRouter } from "next/router";
import { token } from "../store/utils/axiosInstance";

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#050F3F",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #8080805e",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          ":last-child": {
            paddingBottom: "16px",
          },
        },
      },
    },
    MuiButton: {
      variants: [],
    },
  },
  palette: {
    primary: {
      main: "#FF0093",
    },
  },
});



export default wrapper.withRedux(MyApp);
