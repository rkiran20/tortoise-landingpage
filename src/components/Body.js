import React from "react";
import GetStarted from "./GetStarted";
import Impact from "./Impact";
import Benifits from "./Benifits";
import Awards from "./Awards";
import Testimonials from "./Testimonials";
import Overview from "./Overview";
import Services from "./Services";
import OurServices from "./OurServices";
import Clients from "./Clients";
import ContactUs from "./ContactUs";

const Body = () => {
  return (
    <div className="bg-softBeige dark:bg-mainBlack  transition-colors duration-500">
      <GetStarted />
      <Impact />
      <Clients />
      <Benifits />
      <Awards />
      <Testimonials />
      <Overview />
      <Services />
      <OurServices />
      <ContactUs />
    </div>
  );
};

export default Body;
