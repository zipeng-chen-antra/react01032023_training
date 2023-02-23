export function sum(...nums: number[]):number {
  
  return nums.reduce((prev, curr) => prev + curr, 0);
}

export function multiply(...nums: number[]):number {
  return nums.reduce((prev, curr) => prev * curr, 1);
}
