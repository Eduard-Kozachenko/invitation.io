import React, { useEffect, useRef, useState } from "react";
import Typewriter from "./Typewriter";

interface TypewriterDelayProps extends React.HTMLProps<HTMLSpanElement> {
  text: string;
  delay: number;
  startDelay?: number;
}

const TypewriterDelay: React.FC<TypewriterDelayProps> = ({
  text,
  delay,
  startDelay = 2000,
  ...props
}) => {
  const [isTimeoutExpired, setIsTimeoutExpired] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsTimeoutExpired(true);
    }, startDelay);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [startDelay]);

  if (!isTimeoutExpired) return null;

  return <Typewriter text={text} delay={delay} {...props} />;
};

export default TypewriterDelay;
