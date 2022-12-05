export default function to2DArray<T extends unknown[]>(
  arr: T,
  cols: number
): T[] {
  const newArr: T[] = [];
  for (let i = 0; i < arr.length; i += cols) {
    newArr.push(arr.slice(i, i + cols) as T);
  }

  return newArr;
}
