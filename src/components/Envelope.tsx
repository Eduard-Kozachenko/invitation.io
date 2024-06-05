import React, { useCallback, useState } from "react";
import scss from "./Envelope.module.scss";
import CardContent from "./CardContent/CardContent";

const Envelope: React.FC = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  const handleEnvelopeClick = useCallback(() => {
    setIsLetterOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    const letterOverlay = document.querySelector(`.${scss.letter}`);
    if (letterOverlay) {
      letterOverlay.classList.add(scss.zoomOut);
      setTimeout(() => {
        setIsLetterOpen(false);
        letterOverlay.classList.remove(scss.zoomOut);
        // const letterEnvelope = document.querySelector(
        //   `.${scss.letterEnvelope}`
        // ) as HTMLElement | null;
        // if (letterEnvelope) {
        //   letterEnvelope.style.transform = "none";
        // }
      }, 500);
    }
  }, []);

  return (
    <div className={scss.wrapper}>
      <div className={scss.container} onClick={handleEnvelopeClick}>
        <div className={`${scss.lid} ${scss.one}`}></div>
        <div className={`${scss.lid} ${scss.two}`}></div>
        <div className={scss.envelope} />
        <div className={`${scss.letterEnvelope}`}>
          <p>Hello</p>
        </div>
      </div>
      {isLetterOpen && (
        <div className={scss.letterOverlay} onClick={handleClose}>
          <div className={`${scss.letter} ${scss.zoomIn}`}>
            <CardContent />
          </div>
        </div>
      )}
    </div>
  );
};

export default Envelope;
