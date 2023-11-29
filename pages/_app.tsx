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

const Header = () => {
  return (
    <Head>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, shrink-to-fit=no, minimal-ui"
      />
      <meta property="og:url" content="https://stocks.valyoux.io" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Valyouxmusic" />
      <meta
        property="og:description"
        content="The World's First Music Artist Stock Market Powered by Blockchain Technology"
      />
      <meta
        property="og:image"
        content="https://stocks.valyoux.io/public/assets/images/valyou_x_black_logo.svg"
      />


export default wrapper.withRedux(MyApp);
