import React, { useEffect, useRef, useState } from "react";
import { MineComponentStyle } from "./index.style";

type MineComponentProps = {
  isBettingStart: boolean;
  isBomb: boolean;
  isBombExplosion: boolean;
  cardId: number;
  openCards: Array<number>;
  totalProfit: number;
  selectedNumbers: number[];
  setTotalProfit: (totalProfit: number) => void;
  setSelectedNumbers: (selectedNumber: number[]) => void;
  handleSetBombExplotion: () => void;
  handleAddOpenCards: (id: number) => void;
};

export const MineComponent: React.FC<MineComponentProps> = (props) => {
  const {
    isBettingStart,
    isBomb,
    isBombExplosion,
    cardId,
    openCards,
    totalProfit,
    selectedNumbers,
    setSelectedNumbers,
    handleSetBombExplotion,
    handleAddOpenCards,
    setTotalProfit,
  } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const img = isBomb ? "bomb.svg" : "jewel.svg";

  const handleMouseUp = () => {
    if (isBettingStart) {
      !isBombExplosion && setIsOpen(true);
      !isBombExplosion && !isOpen && setTotalProfit(totalProfit + 1);
      setSelectedNumbers([...selectedNumbers, cardId]);
      isBomb && handleSetBombExplotion();
    }
  };

  const handleMouseDown = () => {
    !isBettingStart && buttonRef.current?.classList.add("hover-click");
    isOpen && buttonRef.current?.classList.add("after-click");
  };

  useEffect(() => {
    if (selectedNumbers.includes(cardId)) {
      !isBombExplosion && handleMouseUp();
    }
  }, [selectedNumbers]);

  useEffect(() => {
    console.log("isBombExplosion: ", isBombExplosion);
    if (!isOpen && isBombExplosion) {
      buttonRef.current?.classList.add("explosion");
    }
    if (isOpen && isBombExplosion) {
      buttonRef.current?.classList.remove("clicked");
      buttonRef.current?.classList.add("bomb-effect");
    }
  }, [isBombExplosion, isOpen]);

  useEffect(() => {
    isBettingStart && setIsOpen(false);
  }, [isBettingStart]);

  useEffect(() => {
    console.log(buttonRef.current?.classList);
  }, [buttonRef.current?.classList.length]);

  useEffect(() => {
    !isBombExplosion && isOpen && buttonRef.current?.classList.add("clicked");
  }, [isOpen]);

  return (
    <MineComponentStyle
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      isBomb={true}
      isShowImg={isOpen || isBombExplosion}
      isEffectExplosion={!isOpen && isBombExplosion}
      isBombExplosion={isBombExplosion}
    >
      {isBomb && (
        <img src="explosion.gif" alt="" className="back-img explosion" />
      )}
      <img src={img} alt="" className="back-img back-main" />
    </MineComponentStyle>
  );
};
