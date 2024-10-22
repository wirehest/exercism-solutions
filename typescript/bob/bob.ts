export function hey(message: string): string {
  let isQuestion: boolean = /\?[ ]*$/u.test(message);
  let isYelled: boolean =
    !!message && /[A-Z]+/u.test(message) && !/[a-z]+/u.test(message);
  let isSilence: boolean = message.trim() === '';

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
