export function isPangram(input: string): boolean {
  const alpha = [...'abcdefghijklmnopqrstuvwxyz'];
  return alpha.every((letter) => input.toLowerCase().includes(letter));
}
