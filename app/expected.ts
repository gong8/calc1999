function singleChance(pull: number): number {
  if (pull == 80) return 1;
  // return 0.015 + Math.max(0, (pull - 60) * 0.025);
  return 0.008;
}

export default function expected(pity: number, is5050: boolean): number {
  if (pity >= 80) return is5050 ? expected(0, false) + 1 : 1;
  const chance: number = singleChance(pity + 1);
  if (is5050) {
    const yes = chance * (0.5 * 1 + 0.5 * (expected(0, false) + 1));
    const no = (1 - chance) * (expected(pity + 1, true) + 1);
    return yes + no;
  } else {
    return chance * 1 + (1 - chance) * (expected(pity + 1, is5050) + 1);
  }

}