import React from "react";
import Header from "./components/Header";

interface Props {
  children: JSX.Element | JSX.Element[];
}
const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
