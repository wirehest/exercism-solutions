type Operation = (a: number, b: number) => number;
interface Operations {
  [key: string]: Operation;
}

export function answer(instruction: string): number {
  const OPS: Operations = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiplied: (a, b) => a * b,
    divided: (a, b) => a / b,
  };

  // build array of instructions
  let result: any = instruction
    .slice(0, instruction.length - 1)
    .split(' ')
    .slice(2)
    .map((element) => {
      if (!isNaN(parseInt(element))) return parseInt(element);
      if (element in OPS || element === 'by') return element;
      throw new Error('Unknown operation');
    })
    .filter((element) => element !== 'by');

  if (result.length === 1 && typeof result[0] === 'number') return result[0];
  let opsIndices = [...result.keys()].filter((k) => k % 2);
  let numIndices = [...result.keys()].filter((k) => !(k % 2));
  if (
    result.length < 3 ||
    opsIndices.some((index) => !(result[index] in OPS)) ||
    numIndices.some((index) => typeof result[index] != 'number')
  ) {
    throw new Error('Syntax error');
  }

  result.reverse(); // reverse so we can use pop instead of shift
  while (result.length > 1) {
    let a: any = result.pop();
    let operation = OPS[result.pop() as keyof Operations];
    let b: any = result.pop();
    result.push(operation(a, b));
  }

  return result[0];
}
