import { useState, useEffect } from "react";
import { usePrevious } from "../hooks/usePrevious";
import { useSpring, animated, config } from "react-spring";

const FlipCard = ({ children, title }) => {
  const [currentNumber, setCurrnetNumber] = useState(0);
  const previousNumber = usePrevious(currentNumber);

  const frontCardAnimation = useSpring({
    from: { transform: "rotateX(0deg)" },
    to: { transform: "rotateX(-180deg)" },
    delay: 0,
    config: config.wobbly,
    reset: currentNumber !== previousNumber,
  });

  const backCardAnimation = useSpring({
    from: { transform: "rotateX(180deg)" },
    to: { transform: "rotateX(0deg)" },
    delay: 0,
    config: config.wobbly,
    reset: currentNumber !== previousNumber,
  });

  useEffect(() => {
    setCurrnetNumber(children);
  }, [children]);

  return (
    <div className="flex flex-col space-y-6">
      <div className="clock-container relative flex w-40  flex-col space-y-[1px] overflow-hidden  rounded-lg bg-blackishBlue pb-2">
        <div className="relative flex h-full w-full justify-center overflow-hidden rounded-t-lg   bg-darkDeBlue brightness-[80%] ">
          <span className="translate-y-[50%]">{currentNumber}</span>
          <div className="circle -right-2 -bottom-2"></div>
          <div className="circle -left-2 -bottom-2"></div>

          <animated.div
            style={frontCardAnimation}
            className="transform-style absolute top-0 left-0 flex w-full origin-bottom justify-center overflow-hidden bg-darkDeBlue brightness-[80%] "
          >
            <span className="translate-y-[50%]">{previousNumber}</span>
            <div className="circle -right-2 -bottom-2"></div>
            <div className="circle -left-2 -bottom-2 "></div>
          </animated.div>
        </div>

        <div className="relative flex h-full w-full justify-center overflow-hidden rounded-b-lg bg-darkDeBlue">
          <span className="-translate-y-[50%]">{previousNumber}</span>
          <div className="circle -right-2 -top-2"></div>
          <div className="circle -left-2 -top-2"></div>

          <animated.div
            style={backCardAnimation}
            className="transform-style absolute bottom-0 left-0 flex w-full origin-top justify-center  overflow-hidden bg-darkDeBlue"
          >
            <div className="circle -right-2 -top-2"></div>
            <div className="circle -left-2 -top-2"></div>
            <span className="-translate-y-[50%]">{currentNumber}</span>
          </animated.div>
        </div>
      </div>
      <h1 className="text-center text-2xl uppercase text-grayishBlue">
        {title}
      </h1>
    </div>
  );
};

export default FlipCard;
