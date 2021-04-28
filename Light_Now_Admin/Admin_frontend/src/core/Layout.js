import React from "react";
import Menu from "./Menu";
import "../styles.css";
import Footer from "./Footer";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => (
  <div>
    <Menu />

    <div className={className} style={{ marginBottom: "5%" }}>
      {children}
    </div>

    <Footer />
  </div>
);

export default Layout;
