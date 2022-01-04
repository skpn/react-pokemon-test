import React from "react";
import { AppProps } from "next/app";

import "../styles/index.css";
import "../styles/scss/index.scss";
// import "@/styles/scss/colors.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
