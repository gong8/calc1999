function singleChance(pull: number): number {
  if (pull >= 70) return 1;
  return 0.015 + Math.max(0, (pull - 60) * 0.025);
}

export default function probability(pity: number, pulls: number): number {
  if (pulls >= 70) return 1;
  if (pulls <= 0) return 0;
  const chance: number = singleChance(pity + 1);
  return chance + (1 - chance) * (probability(pity + 1, pulls - 1));
}