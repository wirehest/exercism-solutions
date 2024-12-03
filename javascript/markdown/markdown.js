const SYNTAX = {
  header: { pattern: /^(#{1,6} )/, tag: '' },
  unsortedList: { pattern: /^\* /, tag: '' },
  strong: { pattern: /__(.+)__/, tag: '' },
  emphasis: { pattern: /_(.+)_/, tag: '' },
};

export function parse(markdownStr) {
  let markdownArray = markdownToArray(markdownStr);

  return markdownArray
    .map((element) => {
      let isList = Array.isArray(element);
      let isHeader = SYNTAX.header.pattern.test(element);

      switch (true) {
        case isList:
          return getUnorderedListHTML(element);
        case isHeader:
          return getHeaderHTML(element);
        default:
          return getParagraphHTML(element);
      }
    })
    .join('');
}

function wrap(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

function parser(element, delimiter, tag) {
  const pattern = new RegExp(`${delimiter}(.+)${delimiter}`);
  const replacement = `<${tag}>$1</${tag}>`;
  return element.replace(pattern, replacement);
}

function parseText(element) {
  let parsedText = parser(element, '__', 'strong');
  parsedText = parser(parsedText, '_', 'em');
  return parsedText;
}

function getHeaderHTML(element) {
  let matched = element.match(SYNTAX.header.pattern);
  let prefixLength = matched[0].length;
  let hashCount = prefixLength - 1; // NOTE: -1 adjusts for space
  return wrap(element.substring(prefixLength), `h${hashCount}`);
}

function getUnorderedListHTML(listSubarray) {
  return wrap(
    listSubarray
      .map((listItem) => {
        return wrap(parseText(listItem.substring(2)), 'li');
      })
      .join(''),
    'ul',
  );
}

function getParagraphHTML(element) {
  return wrap(parseText(element), 'p');
}

function markdownToArray(markdownStr) {
  let markdownLines = markdownStr.split('\n').reverse();
  let markdownArray = [];
  let listSubarray = [];

  while (markdownLines.length) {
    let line = markdownLines.pop();
    if (line.startsWith('*')) {
      listSubarray.push(line);
      if (!markdownLines.length) markdownArray.push(listSubarray);
    } else {
      if (listSubarray.length) {
        markdownArray.push(listSubarray);
        listSubarray = [];
      }
      markdownArray.push(line);
    }
  }

  return markdownArray;
}
