import { Component } from "react";
import { CookiesProvider } from "react-cookie";
import "../styles/global.css";
import MainLayout from "../layout/MainLayout";
import { CartWrapper } from "../contexts/CartContext";

export default function App({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <CartWrapper>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </CartWrapper>
    </CookiesProvider>
  );
}
