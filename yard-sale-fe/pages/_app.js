import { Component } from "react";
import "../styles/global.css";
import MainLayout from "../layout/MainLayout";
import { CartWrapper } from "../contexts/CartContext";

export default function App({ Component, pageProps }) {
  return (
    <CartWrapper>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </CartWrapper>
  );
}
