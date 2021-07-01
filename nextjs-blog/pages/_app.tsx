import { Component } from "react";
import "../styles/global.css";

export default function App({
  Component,
  pageProps,
}: {
  Component: Component;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}
