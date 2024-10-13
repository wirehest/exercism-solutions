/** Returns phone numbers in a standard format. */
export const clean = (num) => {
  const noSpacers = [...num].filter((x) => !' -().+'.includes(x));
  const twoToNine = '23456789';
  const numToText = {
    0: 'zero',
    1: 'one',
  };
  const testAlpha = noSpacers.some(
    (x) => x.charCodeAt() >= 65 && x.charCodeAt() <= 122
  );
  const testPunct = noSpacers.some((x) => '@:!'.includes(x));
  const testTooShort = noSpacers.length < 10;
  const testTooLong = noSpacers.length > 11;
  const testCountryCode = noSpacers.length === 11 && noSpacers[0] !== '1';

  if (testAlpha) throw new Error('Letters not permitted');
  if (testPunct) throw new Error('Punctuations not permitted');
  if (testTooShort) throw new Error('Incorrect number of digits');
  if (testTooLong) throw new Error('More than 11 digits');
  if (testCountryCode) throw new Error('11 digits must start with 1');

  const noCountry = noSpacers.slice(-10);
  const area = numToText[noCountry[0]];
  const exch = numToText[noCountry[3]];

  if (area) throw new Error(`Area code cannot start with ${area}`);
  if (exch) throw new Error(`Exchange code cannot start with ${exch}`);

  return noCountry.join('');
};