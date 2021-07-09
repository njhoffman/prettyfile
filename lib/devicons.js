const path = require('path');
const icons = require('./devicons-map');

const defaultIcon = {
  icon : "",
  color : "#6d8086",
  name : "Default",
}

const attachDevIcon = (file) => {
  const ext = path.extname(file).replace('.', '');
    if (icons[file]) {
      return { ...icons[file], file }
    }
  if ((icons[ext])) {
      return { ...icons[ext], file }
    }
    return { file, ...defaultIcon  };
  };

module.exports = { attachDevIcon };
