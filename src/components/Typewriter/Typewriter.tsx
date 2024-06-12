import { useState, useEffect, useRef } from "react";

interface TypewriterProps extends React.HTMLProps<HTMLSpanElement> {
  text: string;
  delay: number;
  infinite?: boolean;
  startDelay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay,
  infinite,
  startDelay,
  ...props
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (currentIndex <= text.length) {
      timeoutRef.current = setTimeout(() => {
        setCurrentText(
          (prevText) =>
            prevText + (text[currentIndex] ? text[currentIndex] : "")
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      setCurrentIndex(0);
      setCurrentText("");
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, delay, infinite, text]);

  return <span {...props}>{currentText}</span>;
};

export default Typewriter;
