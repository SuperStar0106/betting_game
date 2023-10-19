import React, { useEffect, useRef, useState } from "react";

import { MineComponentStyle } from "./index.style";

type MineComponentProps = {
  isBettingStart?: boolean;
  isBomb?: boolean;
};

export const MineComponent: React.FC<MineComponentProps> = (props) => {
  const { isBettingStart, isBomb } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [clickCount, setClickCount] = useState<number>(0);
  const [isRelease, setIsRelease] = useState<boolean>(false);

  const handleMouseUp = () => {
    setClickCount((prevCount) => prevCount + 1);
    setIsRelease(true);
    buttonRef.current?.classList.remove("clicked-release");
    buttonRef.current?.classList.remove("clicked");
  };

  const handleMouseDown = () => {
    setIsRelease(false);
    clickCount === 1 &&
      isRelease &&
      setClickCount((prevCount) => prevCount + 1);
    buttonRef.current?.classList.remove("clicked");
  };

  const handleMouseOver = () => {
    buttonRef.current?.classList.remove("clicked-release");
  };

  const handleMouseLeave = () => {
    buttonRef.current?.classList.remove("clicked-release");
  };

  useEffect(() => {
    if (clickCount === 1 && isBettingStart) {
      buttonRef.current?.classList.remove("clicked-after");
      buttonRef.current?.classList.add("clicked");
    } else if (clickCount > 1 && !isRelease && isBettingStart) {
      buttonRef.current?.classList.remove("clicked");
      buttonRef.current?.classList.remove("clicked-after-release");
      buttonRef.current?.classList.add("clicked-after");
    } else if (clickCount > 1 && isRelease && isBettingStart) {
      buttonRef.current?.classList.remove("clicked-after");
      buttonRef.current?.classList.add("clicked-after-release");
    }

    console.log("classList: ", buttonRef.current?.classList);
    console.log("clickCount: ", clickCount);
    console.log("isRelease: ", isRelease);
  }, [clickCount, isRelease, isBettingStart]);

  return (
    <MineComponentStyle
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      isBomb={true}
      isShowImg={clickCount !== 0}
    >
      <img src="explosion.gif" alt="" className="back-img explosion" />
      <img src="bomb.svg" alt="" className="back-img back-main" />
    </MineComponentStyle>
  );
};
