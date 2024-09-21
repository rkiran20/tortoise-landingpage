import React from "react";
import GetStarted from "./GetStarted";
import Impact from "./Impact";
import Benifits from "./Benifits";
import Awards from "./Awards";
import Testimonials from "./Testimonials";
import Overview from "./Overview";
import Services from "./Services";
import OurServices from "./OurServices";

const Body = () => {
  return (
    <div className="bg-softBeige">
      <GetStarted />
      <Impact />
      <Benifits />
      <Awards />
      <Testimonials />
      <Overview />
      <Services />
      <OurServices />
    </div>
  );
};

export default Body;
