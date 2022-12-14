import { useState, useEffect } from "react";

const useCheckOrientation = () => {
  const [isOnLandScape, setIsOnLandScape] = useState(false);

  useEffect(() => {
    const updateStateOnCurrentOrientation = (angle) => {
      if (angle === 0) {
        setIsOnLandScape(false);
      } else if (angle === 90 || angle === -90) {
        setIsOnLandScape(true);
      }
    };

    const handleScreenRotation = (event) => {
      // console.log("event", event);
      const currentRotationAngle = event.currentTarget.angle;
      updateStateOnCurrentOrientation(currentRotationAngle);
    };

    window.screen.orientation.addEventListener(
      "change",
      handleScreenRotation,
      false
    );
    const initialOrientation = window.screen.orientation.angle;
    updateStateOnCurrentOrientation(initialOrientation);

    return () =>
      window.screen.orientation.removeEventListener(
        "change",
        handleScreenRotation
      );
  }, []);

  return { isOnLandScape };
};

export default useCheckOrientation;
