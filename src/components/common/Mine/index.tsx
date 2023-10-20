import React, { useEffect, useRef, useState } from "react";
import { MineComponentStyle } from "./index.style";

type MineComponentProps = {
  isBettingStart: boolean;
  isBomb: boolean;
  isBombExplosion: boolean;
  handleSetBombExplotion: () => void;
  handleAddOpenCards: (id: number) => void;
  cardId: number;
  openCards: Array<number>;
};

export const MineComponent: React.FC<MineComponentProps> = (props) => {
  const {
    isBettingStart,
    isBomb,
    isBombExplosion,
    handleSetBombExplotion,
    handleAddOpenCards,
    cardId,
    openCards,
  } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [clickCount, setClickCount] = useState<number>(0);
  const [isRelease, setIsRelease] = useState<boolean>(false);

  const img = isBomb ? "bomb.svg" : "jewel.svg";

  const handleMouseUp = () => {
    isBettingStart && isBomb && handleSetBombExplotion();
    isBettingStart && setClickCount((prevCount) => prevCount + 1);
    setIsRelease(true);
    isBettingStart &&
      buttonRef.current?.classList.remove("clicked-release", "clicked");
    isBettingStart && handleAddOpenCards(cardId);
  };

  const handleMouseDown = () => {
    setIsRelease(false);
    if (!isBettingStart) {
      buttonRef.current?.classList.add("clicked-release");
    }

    if (clickCount === 1 && isRelease) {
      setClickCount((prevCount) => prevCount + 1);
    }
    buttonRef.current?.classList.remove("clicked");
  };

  const handleMouseOverLeave = () => {
    buttonRef.current?.classList.remove("clicked-release");
  };

  useEffect(() => {
    buttonRef.current?.classList.remove(
      "clicked-after",
      "clicked",
      "clicked-after-release"
    );

    if (clickCount === 1 && isBettingStart) {
      buttonRef.current?.classList.add("clicked");
      isBombExplosion && buttonRef.current?.classList.add("explosion");
    } else if (clickCount > 1 && !isRelease) {
      if (isBettingStart) {
        buttonRef.current?.classList.add("clicked-after");
      } else {
        buttonRef.current?.classList.add("clicked-release");
      }
    } else if (clickCount > 1 && isRelease && isBettingStart) {
      buttonRef.current?.classList.add("clicked-after-release");
    }
  }, [clickCount, isRelease, isBettingStart]);

  useEffect(() => {
    isBettingStart && setClickCount((prevCount) => prevCount + 1);
  }, [isBombExplosion]);

  return (
    <MineComponentStyle
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleMouseOverLeave}
      onMouseLeave={handleMouseOverLeave}
      isBomb={true}
      isShowImg={clickCount !== 0 && isBettingStart}
      isBombExplosion={isBombExplosion && openCards.includes(cardId)}
    >
      {isBomb && (
        <img src="explosion.gif" alt="" className="back-img explosion" />
      )}
      <img src={img} alt="" className="back-img back-main" />
    </MineComponentStyle>
  );
};
