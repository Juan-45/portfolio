import { useState, useEffect, useRef } from "react";

const useTriggerOnScroll = () => {
  const targetEl = useRef(null);

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const innerHeight =
      window.innerHeight || document.documentElement.clientHeight;

    const getPositionOnScroll = () => {
      const rect = targetEl.current.getBoundingClientRect();

      const reachBottomBorder = rect.bottom <= innerHeight;

      if (reachBottomBorder) {
        setTrigger(true);
      }
    };

    window.addEventListener("scroll", getPositionOnScroll, false);

    return () => {
      window.removeEventListener("scroll", getPositionOnScroll);
    };
  }, []);

  return [targetEl, trigger];
};

export default useTriggerOnScroll;
