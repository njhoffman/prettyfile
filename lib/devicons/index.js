const icons = require('./map');

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

const attachDevIcon = ({ filename, ext }, fileStats) => {
  if (fileStats && fileStats.directory) {
    return { filename, ...folderIcon };
  }
  if (icons[filename]) {
    return { ...icons[filename], filename };
  }
  if ((icons[ext])) {
    return { ...icons[ext], filename };
  }
  return { filename, ...defaultIcon };
};

module.exports = { attachDevIcon };
