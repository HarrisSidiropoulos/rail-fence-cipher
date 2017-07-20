/* eslint-disable one-var, one-var-declaration-per-line, no-plusplus, no-console */
function getRowLength(s = '', n = 3) {
  const a = s.split(''), b = [], l = a.length;
  for (let i = 0; i < n && i < l; i += 1) b[i] = [];
  while (a.length > 0) {
    for (let i = 0; i < n && a.length > 0; i += 1) b[i].push(a.shift());
    for (let i = n - 2; i > 0 && a.length > 0; i -= 1) b[i].push(a.shift());
  }
  return b.map(v => v.length);
}

function encodeRailFenceCipher(s = '', n = 3) {
  const a = s.split(''), b = [], l = a.length;
  for (let i = 0; i < n && i < l; i += 1) b[i] = [];
  while (a.length > 0) {
    for (let i = 0; i < n && a.length > 0; i += 1) b[i].push(a.shift());
    for (let i = n - 2; i > 0 && a.length > 0; i -= 1) b[i].push(a.shift());
  }
  return b.map(v => v.join('')).join('');
}

function decodeRailFenceCipher(s = '', n = 3) {
  if (!s) return '';
  const a = getRowLength(s, n), b = [];
  for (let i = 0, sum = 0, l = a.length; i < l; i += 1) {
    const rowLength = a[i];
    a[i] = s.substr(sum, rowLength).split('');
    sum += rowLength;
  }
  for (let j = 0, l = s.length; j <= l; j += (n + (n - 2))) {
    for (let i = 0; i < n; i += 1) b.push(a[i].shift());
    for (let i = n - 2; i > 0; i -= 1) b.push(a[i].shift());
  }
  return b.join('');
}

export {
  encodeRailFenceCipher,
  decodeRailFenceCipher,
};
