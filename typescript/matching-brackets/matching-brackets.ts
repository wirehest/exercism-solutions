export function isPaired(input: string): boolean {
  const OPENING_BRACKETS = '[{(';
  let stack: string[] = [];

  return (
    input
      .split('')
      .map((bracket) => {
        switch (true) {
          case OPENING_BRACKETS.includes(bracket):
            stack.push(bracket);
            return true;
          case bracket === ']':
            if (stack.pop() === '[') return true;
            return false;
          case bracket === '}':
            if (stack.pop() === '{') return true;
            return false;
          case bracket === ')':
            if (stack.pop() === '(') return true;
            return false;
          default:
            return true;
        }
      })
      .every((element) => element) && stack.length === 0
  );
}
