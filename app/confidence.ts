import probability from "@/app/probability";
export default function confidence(pity: number, percentage: number): number {
  for (let i = 0; i <= 70; i++) {
    // pull number
    console.log(probability(pity, i));
    if (probability(pity, i) >= percentage) return i;
  }
  return 0;
}