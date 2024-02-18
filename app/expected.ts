function singleChance(pull: number): number {
  if (pull == 70) return 1;
  return 0.015 + Math.max(0, (pull - 60) * 0.025);
}

export default function expected(pity: number): number {
  const chance: number = singleChance(pity + 1);
  if (chance >= 1) return 1;
  return chance * 1 + (1 - chance) * (expected(pity + 1) + 1);
}