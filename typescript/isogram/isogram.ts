export function isIsogram(str: string): boolean {
  let strLow = [...str.toUpperCase()].filter((char) => {
    let charCode = char.charCodeAt(0);
    if (charCode > 64 && charCode < 91) return char;
  });

  return [...new Set(strLow)].length === strLow.length;
}
