import { Component } from "react";
import "../styles/global.css";
import MainLayout from "../layout/MainLayout";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
