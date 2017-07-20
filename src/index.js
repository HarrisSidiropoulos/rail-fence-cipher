/* eslint-disable one-var, one-var-declaration-per-line, no-plusplus, no-console */
function encodeRailFenceCipher(string, numberRails) {
  const symbols = string.split('');
  const period = 2 * (numberRails - 1);
  const rails = symbols.reduce((acc, symbol, index) => {
    for (let i = 0; i < numberRails; i++) {
      if ((index - i) % period === 0 || (index + i) % period === 0) {
        acc[i] = (acc[i] || []).concat(symbol);
      }
    }
    return acc;
  }, []);
  return rails.reduce((acc, el) => acc.concat(el), []).join('');
}

function decodeRailFenceCipher(string, numberRails) {
  const symbols = string.split('');
  const period = 2 * (numberRails - 1);
  const len = Math.floor(symbols.length / period) + 1;
  const res = [];
  let pos = 0;
  for (let i = 0; i < numberRails; i++) {
    for (let j = 0; j <= len; j++) {
      const el1 = i + (j * period);
      const el2 = ((j + 1) * period) - i;
      if (!res[el1] && el1 < symbols.length) res[el1] = symbols[pos++];
      if (!res[el2] && el2 < symbols.length) res[el2] = symbols[pos++];
    }
  }
  return res.join('');
}

export {
  encodeRailFenceCipher,
  decodeRailFenceCipher,
};
