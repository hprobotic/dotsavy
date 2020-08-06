import React from "react";
import Header from "./header";
import Footer from "./footer";

export default ({ children }) => (
  <div className="antialiased">
    <Header />
    <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 py-16 md:py-8">
      <main>{children}</main>
    </div>
    <Footer />
  </div>
);
