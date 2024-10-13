'use strict';

export const decodedValue = (arr) => {
  const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];

  return +('' + COLORS.indexOf(arr[0]) + COLORS.indexOf(arr[1]));
};
