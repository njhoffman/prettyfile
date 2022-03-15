const humanSize = (bytes, si) => {
  bytes = Number(bytes); const thresh = si ? 1000 : 1024;
  if (Math.abs(bytes) < thresh) {
    return `${bytes} B`;
  }
  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

  do {
    bytes /= thresh;
    ++u;
  } while (Math.abs(bytes) >= thresh && u < units.length - 1);
  return `${bytes.toFixed(1)} ${units[u]}`;
};

const padLeft = (input, len, onlySpaces = false) => {
  const str = input.toString() || '';
  if (onlySpaces) {
    return len > str.length ? new Array(len - str.length + 1).join(' ') : '';
  }
  return len > str.length ? new Array(len - str.length + 1).join(' ') + str : str;
};

const padRight = (input, len, onlySpaces = false) => {
  const str = input.toString() || '';
  if (onlySpaces) {
    return len > str.length ? new Array(len - str.length + 1).join(' ') : '';
  }
  return len > str.length ? str + new Array(len - str.length + 1).join(' ') : str;
};

const padZeros = (num, numZeros) => (Array(numZeros).join('0') + num).slice(-numZeros);

const numCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const convert256 = (colorHex) => {
  const r = parseInt(colorHex.slice(1, 3), 16);
  const g = parseInt(colorHex.slice(3, 5), 16);
  const b = parseInt(colorHex.slice(5, 7), 16);
  // return (r * 7 / 255) << 5 + (g * 7 / 255) << 2 + (b * 3 / 255)
  encodedData = (Math.floor((r / 32)) << 5) + (Math.floor((g / 32)) << 2) + Math.floor((b / 64));
  return encodedData;
}

module.exports = {
  convert256,
  humanSize,
  padLeft,
  padRight,
  padZeros,
  numCommas
};
