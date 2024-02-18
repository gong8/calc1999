function singleChance(pull: number): number {
  if (pull >= 70) return 1;
  return 0.015 + Math.max(0, (pull - 60) * 0.025);
}

export default function probability(pity: number, pulls: number, is5050: boolean): number {
  if (pulls >= 70) return is5050 ? probability(0, pulls - 1, false) * 0.5 + 1 * 0.5 : 1;
  if (pulls <= 0) return 0;
  let chance: number = singleChance(pity + 1);
  if (is5050) {
    const yes = chance * (0.5 + 0.5 * probability(0, pulls - 1, false));
    const no = (1 - chance) * probability(pity + 1, pulls - 1, true);
    return yes + no;
  } else {
    const yes = chance * 1;
    const no = (1 - chance) * probability(pity + 1, pulls - 1, false);
    return yes + no;
  }
}