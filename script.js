let obj = {
  a: 'f',
  b: 78,
  c: 'R',
  d: {
      a: {
          a: null,
          b: 'E',
          c: {
              a: true,
              b: 'C',
              c: 'test'
          },
          d: 'U'
      },
      b: {
          a: 'R',
          b: ['S', 4, 6, 'I'],
          c: 0,
      },
      c: ['O'],
      d: null,
      e: 'N'
  }
}

function upperCase(obj) {
  let word = '';
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'string' && value === value.toUpperCase()) {
      word = word + value;
    } else if (typeof value === 'object' && value !== null) {
      word += upperCase(value);
    }    
  }
  return word;
}
console.log(upperCase(obj));