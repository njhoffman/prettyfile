const _ = require('lodash');
const path = require('path');
const chalk = require('chalk');
const fs = require('fs');
const { outputFile } = require('./output');
const { attachDevIcon } = require('./devicons');


let lineCount = 0;
const parseLine = (line, colors) => {
  const matches = line.match(/^(\s*[\d.]+\s+)?(.*)/);
  if (!matches) {
    console.log(lineCount, line.toString());
    return null;
  }

  const parsedPath = path.parse(matches[2]);
  const parts = {
    path: matches[2],
    score: matches[1],
    directory: `${parsedPath.dir}${parsedPath.dir.length > 0 ? '/' : ''}`,
    filename: `${parsedPath.base}`,
    ext: parsedPath.ext.replace(/^./, '')
  };

  return parts;
};

const getFileStats = filePath => {
  let fileStats = { missing: true };
  try {
    const stat = fs.statSync(filePath) ;
    fileStats =  _.pick(stat, ['dev', 'mode', 'uid', 'size', 'birthtime', 'atime']);
    fileStats.directory = stat.isDirectory();
  } catch {
    return fileStats;
  }
  return fileStats;
};

const processLine = (config, line) => {
  const { colors, showSize, showDate, idFile } = config;
  if (line.toString().trim().length > 0) {
    lineCount += 1;
    const parts = parseLine(line, config.colors);
    const fileStats = showSize || showDate || idFile ? getFileStats(parts.path) : null;
    if (parts) {
      const devicon = attachDevIcon(parts, fileStats);
      console.log(outputFile(config, { parts, devicon, fileStats }));
    }
  }
  // process.nextTick();
  // return Promise.resolve();
};

module.exports = { processLine };
