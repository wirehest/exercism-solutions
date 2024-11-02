export function clean(num: string): string {
  const noSpacers = [...num].filter((x) => !' -().+'.includes(x));
  const numToText = {
    '0': 'zero',
    '1': 'one',
  };
  const hasLetters = noSpacers.some((x) => {
    return x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 122;
  });
  const hasPunctuation = noSpacers.some((x) => '@:!'.includes(x));
  const tooShort = noSpacers.length < 10;
  const tooLong = noSpacers.length > 11;
  const noCountryCode = noSpacers.length === 11 && noSpacers[0] !== '1';

  if (hasLetters) throw new Error('Letters not permitted');
  if (hasPunctuation) throw new Error('Punctuations not permitted');
  if (tooShort) throw new Error('Incorrect number of digits');
  if (tooLong) throw new Error('More than 11 digits');
  if (noCountryCode) throw new Error('11 digits must start with 1');

  const noCountry = noSpacers.slice(-10);
  const area = numToText[noCountry[0] as keyof typeof numToText];
  const exch = numToText[noCountry[3] as keyof typeof numToText];

  if (area) throw new Error(`Area code cannot start with ${area}`);
  if (exch) throw new Error(`Exchange code cannot start with ${exch}`);

  return noCountry.join('');
}
