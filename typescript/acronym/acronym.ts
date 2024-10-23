export function parse(phrase: string): string {
  const pattern = /[A-Z]+[a-z]*|[a-z]+/g;
  return (phrase.match(pattern) ?? [])
    .map((word) => {
      return word[0].toUpperCase();
    })
    .join('');
}
