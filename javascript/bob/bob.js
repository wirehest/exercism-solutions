/** Returns Bob's responses. */
export function hey(message) {
  let isQuestion = /\?[ ]*$/u.test(message);
  let isYelled =
    !!message && /[A-Z]+/u.test(message) && !/[a-z]+/u.test(message);
  let isSilence = message.trim() === '';

  switch (true) {
    case isQuestion && isYelled:
      return "Calm down, I know what I'm doing!";
    case isQuestion:
      return 'Sure.';
    case isYelled:
      return 'Whoa, chill out!';
    case isSilence:
      return 'Fine. Be that way!';
    default:
      return 'Whatever.';
  }
}
