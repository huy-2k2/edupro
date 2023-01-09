import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonScrollTop from "../components/ButtonScrollTop";
export default function AppLayout({ children }) {
  return (
    <div>
      <Header></Header>
      <ButtonScrollTop></ButtonScrollTop>
      {children}
      <Footer></Footer>
    </div>
  );
}
