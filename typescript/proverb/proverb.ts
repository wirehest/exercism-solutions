export function proverb(...words: string[]): string {
  let proverb = '';
  for (let i = 0; i < words.length - 1; i++) {
    proverb += `For want of a ${words[i]} the ${words[i + 1]} was lost.\n`;
  }
  proverb += `And all for the want of a ${words[0]}.`;
  return proverb;
}
