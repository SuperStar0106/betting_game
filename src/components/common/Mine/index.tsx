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
  setTotalProfit: (totalProfit: number) => void;
  totalProfit: number;
  setSelectedNumbers: (selectedNumber: number[]) => void;
  selectedNumbers: number[];
};

export const MineComponent: React.FC<MineComponentProps> = (props) => {
  const {
    isBettingStart,
    isBomb,
    isBombExplosion,
    handleSetBombExplotion,
    handleAddOpenCards,
    setTotalProfit,
    cardId,
    openCards,
    totalProfit,
    setSelectedNumbers,
    selectedNumbers,
  } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const img = isBomb ? "bomb.svg" : "jewel.svg";

  const handleMouseUp = () => {
    if (isBettingStart) {
      setIsOpen(true);
      !isOpen && setTotalProfit(totalProfit + 1);
      setSelectedNumbers([...selectedNumbers, cardId]);
      !buttonRef.current?.classList.contains("explosion") &&
        setIsSelected(true);
      isBomb && handleSetBombExplotion();
    }
  };

  useEffect(() => {
    isBettingStart && setIsOpen(false);
  }, [isBettingStart]);

  const handleMouseDown = () => {
    !isBettingStart && buttonRef.current?.classList.add("hover-click");
    isOpen && isSelected && buttonRef.current?.classList.add("clicked-after");
  };

  useEffect(() => {
    if (isBombExplosion && !isOpen) {
      buttonRef.current?.classList.remove("clicked-after");
      buttonRef.current?.classList.remove("hover-click");
      buttonRef.current?.classList.remove("clicked");
      buttonRef.current?.classList.add("explosion");
    }
  }, [isBombExplosion, isOpen]);

  useEffect(() => {
    if (selectedNumbers.includes(cardId)) {
      // setIsOpen(true);
      selectedNumbers && handleMouseUp();
      if (isBomb) {
        setTimeout(() => {
          handleSetBombExplotion();
        }, 0.2);
      }
    }
  }, [selectedNumbers]);

  useEffect(() => {
    isOpen && buttonRef.current?.classList.add("clicked");
  }, [isOpen]);

  return (
    <MineComponentStyle
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      isBomb={true}
      isShowImg={isOpen || isBombExplosion}
      isBombExplosion={isSelected}
    >
      {isBomb && (
        <img src="explosion.gif" alt="" className="back-img explosion" />
      )}
      <img src={img} alt="" className="back-img back-main" />
    </MineComponentStyle>
  );
};
