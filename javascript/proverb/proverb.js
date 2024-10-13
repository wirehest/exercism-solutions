/** Returns a proverb built from the inputs. */
export const proverb = (...args) => {
  if (!args.length) return '';

  const template = (word1, word2) =>
    `For want of a ${word1} the ${word2} was lost.`;
  const lastLine = (word, qual = '') =>
    `And all for the want of a ${qual ? qual + ' ' : ''}${word}.`;
  const hasQualifier = typeof args.at(-1) === 'object';
  let proverb = [];

  for (let i = 0; i < args.length - (hasQualifier ? 2 : 1); i++) {
    proverb.push(template(args[i], args[i + 1]));
  }
  hasQualifier
    ? proverb.push(lastLine(args[0], args.at(-1)['qualifier']))
    : proverb.push(lastLine(args[0]));

  return proverb.join('\n');
};
