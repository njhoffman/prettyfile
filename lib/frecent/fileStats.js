const _ = require('lodash');
const fs = require('fs');
const util = require('util');

const inspectFile = (min, max) => async fileLine => {
  if (!fileLine || fileLine.trim().length == 0) {
    return { error: `Error parsing line: ${fileLine}` }
  }
  const matched = fileLine.trim().match(/^([\d.]+)\s+(.*)/);
  if (!matched || matched.length < 3) {
    return { error: `Error matching line RegEx: ${fileLine}` }
  }
  const [, score, filePath] = matched;
  const normalizedScore = (parseFloat(score) / parseFloat(max)) * 100;
  let fileInfo = null;
  try {
    fileInfo = await (util.promisify(fs.lstat)(filePath));
  } catch (e) {
    console.log(e);
    fileInfo = { error: e.code };
  }
  return {
    ...fileInfo,
    isDirectory: _.isFunction(fileInfo.isDirectory) && fileInfo.isDirectory(),
    isSymbolic: _.isFunction(fileInfo.isSymbolicLink) && fileInfo.isSymbolicLink(),
    filePath,
    min,
    score,
    normalizedScore
  };
};

const filterBlacklist = (set, blacklist) => {
  // const filtered = _.omit(set, blacklist)
  return set.filter(Boolean);
}

const processFileset = async ([name, fileLines], [min, max], blacklist) => {
  const processedSet = await Promise.all(fileLines.map(inspectFile(min, max)));
  const stats = { files: 0, directories: 0, symbolic: 0, missing: 0, min, max, name }
  filterBlacklist(processedSet, blacklist).forEach(set => {
    if (set.error) {
      stats.missing += 1;
    } else if (set.symbolic) {
      stats.symbolic += 1;
    } else if (set.isDirectory) {
      stats.directories += 1;
    } else {
      stats.files += 1;
    }
  });

  // console.log(processedSet);
  return [processedSet, stats];
};

module.exports = { processFileset }
