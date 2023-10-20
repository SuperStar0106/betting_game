export const makebombArray = (BOMB_COUNT: number) => {
  const bombArray = Array(BOMB_COUNT).fill(true).concat(Array(25 - BOMB_COUNT).fill(false));
  const shuffledBombArray = bombArray.sort(() => Math.random() - 0.5);

  return shuffledBombArray;
}