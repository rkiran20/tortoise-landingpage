import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.6 });
  useEffect(() => {
    if (view) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [view]);
  return [element, controls];
};

export default useScroll;
