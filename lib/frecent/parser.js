const _ = require('lodash');

const findRange = ([/* name */, fileLines]) => {
  const toNum = (line) => parseFloat(line.trim().split('^\s+')[0]);
  const max = _.maxBy(fileLines, toNum);
  const min = _.minBy(fileLines, toNum);
  return [toNum(min), toNum(max)];
}


const combineSets = fileSets => {
  const masterList = { errors: {}, files: {}, directories: {}, symbolic: {}, valid: {} }
  const masterStats = { symbolic: 0, dupeFiles: 0, dupeDirectories: 0, sets: [] }
  fileSets.forEach(([fileItems, stats]) => {
    masterStats.sets.push(stats);
    fileItems.forEach(fileItem => {
      const { error, filePath, isDirectory, isSymbolic } = fileItem;
      if (error) {
        if (!masterList.errors[filePath]) {
          masterList.errors[filePath] = fileItem;
        }
      } else if (isSymbolic) {
        masterList.symbolic[filePath] = fileItem;
      } else if (masterList.valid[filePath]) {
        const dupeType = isDirectory ? 'dupeDirectories' : 'dupeFiles';
        masterStats[dupeType] = masterStats[dupeType] + 1;
      } else {
        const addType = isDirectory ? 'directories' : 'files';
        masterList[addType][filePath] = fileItem.normalizedScore;
        masterList.valid[filePath] = fileItem;
      }
    });
  })
  return [masterList, masterStats]
}

module.exports = { findRange, combineSets };
