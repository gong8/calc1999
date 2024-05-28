import probability from "@/app/probability";
export default function confidence(pity: number, percentage: number, is5050: boolean): number {
  for (let i = 0; i <= 160; i++) {
    // pull number
    console.log(probability(pity, i, is5050));
    if (probability(pity, i, is5050) >= percentage) return i;
  }
  return 0;
}