export function isPaired(input) {
  const BRACKETS = {
    ']': '[',
    ')': '(',
    '}': '{',
  };
  let stack = [];

  return (
    input
      .split('')
      .map((bracket) => {
        switch (true) {
          case Object.keys(BRACKETS).includes(bracket):
            return stack.pop() === BRACKETS[bracket];
          case Object.values(BRACKETS).includes(bracket):
            stack.push(bracket);
          default:
            return true;
        }
      })
      .every((element) => element) && stack.length === 0
  );
}
