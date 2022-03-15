const icons = require('./map');
const convert256 = (colorHex) => {
  const r = parseInt(colorHex.slice(1, 3), 16);
  const g = parseInt(colorHex.slice(3, 5), 16);
  const b = parseInt(colorHex.slice(5, 7), 16);
  // return (r * 7 / 255) << 5 + (g * 7 / 255) << 2 + (b * 3 / 255)
  encodedData = (Math.floor((r / 32)) << 5) + (Math.floor((g / 32)) << 2) + Math.floor((b / 64));
  return encodedData;
}

const defaultIcon = {
  icon: "",
  color: "#6d8086",
  name: "Default",
};

const folderIcon = {
  icon: "",
  color: "#4d70aa",
  name: "Default",
};

const stats = {
  time: new Date().getTime(),
  filematch: 0,
  directory: 0,
  default: 0,
  extmatch: 0,
  total: 0,
}

// deimos:
//   'time      112 s',
//   'filematch 46,365',
//   'directory 388,056',
//   'default   723,101', 669,392
//   'extmatch  1,773,149',
//   'total     2,930,671',

const attachDevIcon = ({ filename, ext }, fileStats) => {
  stats.total = stats.total + 1;
  if (fileStats && fileStats.directory) {
    stats.directory = stats.directory + 1;
    return { filename, ...folderIcon };
  }
  if (icons[filename]) {
    stats.filematch = stats.filematch + 1;
    return { ...icons[filename], filename };
  }
  if ((icons[ext])) {
    stats.extmatch = stats.extmatch + 1;
    return { ...icons[ext], filename };
  }

  stats.default = stats.default + 1;
  return { filename, ...defaultIcon };
};

module.exports = { attachDevIcon, stats };
