import { useSprings, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

const SplitText = ({
  text = "MiLogo",
  className = "",
  delay = 100,
  animationFrom = { opacity: 0, transform: "translateY(30px) scale(0.9)" },
  animationTo = { opacity: 1, transform: "translateY(0) scale(1)" },
  repeatOnHover = true,
}) => {
  const letters = text.split("");
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: startAnimation ? animationTo : animationFrom,
      delay: i * delay,
      config: { tension: 300, friction: 15 },
    }))
  );

  return (
    <div
      className={`flex space-x-2 ${className} cursor-pointer transition-all duration-300 hover:scale-110`}
      onMouseEnter={() => repeatOnHover && setStartAnimation(false)}
      onMouseLeave={() => repeatOnHover && setStartAnimation(true)}
    >
      {letters.map((letter, i) => (
        <animated.span
          key={i}
          style={{ ...springs[i], display: "inline-block" }}
          className="text-6xl font-extrabold text-white tracking-wide neon-text transition-all duration-500"
        >
          {letter}
        </animated.span>
      ))}
    </div>
  );
};

export default SplitText;
