export function convert(num) {
  const SOUNDS = {
    3: 'Pling',
    5: 'Plang',
    7: 'Plong',
  };

  let result = Object.entries(SOUNDS).reduce((raindrops, [divisor, sound]) => {
    if (num % divisor === 0) raindrops += sound;
    return raindrops;
  }, '');

  return !result ? `${num}` : result;
}
