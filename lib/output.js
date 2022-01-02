const chalk = require('chalk');
const ta = require('time-ago');

const { padZeros, humanSize, padRight, padLeft } = require('./utils');

const outputFile = (config, { parts, devicon, fileStats }) => {
  const { score, directory, filename } = parts;
  const { colors, showScore, showDate, showSize, homeShortcut } = config;
  const isDouble = devicon && devicon.double;

  const padding = {
    size: 9,
    date: 5,
    score: 6
  };

  let parsedSize = '';
  if (config.showSize) {
    const size = fileStats && fileStats.size ? humanSize(fileStats.size, true) : '...';
    parsedSize = chalk.hex(colors.size)(size) + padRight(size, padding.size, true);
  }

  let parsedDate = '';
  if (config.showDate) {
    const date = fileStats && fileStats.atime ? ta.ago(new Date(fileStats.atime), true) : '...';
    parsedDate = chalk.hex(colors.date)(date) + padRight(date, padding.date, true);
  }

  let parsedScore = '';
  if (config.showScore) {
    const formattedScore = !isNaN(Number(score)) ? Number(score).toFixed(1) : '...';;
    parsedScore = chalk.hex(colors.score)(formattedScore.trim()) + padRight(formattedScore, padding.score, true);
  }

  const iconColor = devicon && devicon.color ? chalk.hex(devicon.color) : () => { };

  let parsedFilename = filename;
  let parsedDirectory = directory;
  if (homeShortcut) {
    parsedDirectory = parsedDirectory.replace(process.env.HOME, homeShortcut);
  }

  if (fileStats && fileStats.directory) {
    parsedDirectory = chalk.hex(colors.directory)(parsedDirectory);
    parsedFilename = chalk.hex(colors.directory)(parsedFilename);
  } else if (fileStats && fileStats.missing) {
    parsedDirectory = chalk.hex(colors.missing)(parsedDirectory);
    parsedFilename = chalk.hex(colors.missing)(parsedFilename);
  } else {
    parsedDirectory = chalk.hex(colors.pathDirectory)(parsedDirectory);
    parsedFilename = chalk.hex(colors.pathFilename)(parsedFilename);
  }


  if (config.output === "stdout") {
    const output = [
      parsedDate,
      parsedSize,
      parsedScore,
      `${iconColor(devicon.icon)} `,
      '',
      `${parsedDirectory}${parsedFilename}`,
    ].filter(Boolean).join(' ');
    return output
  }

  const output = `${directory}${filename}|`.concat([
    parsedDate,
    parsedSize,
    parsedScore,
    `${iconColor(devicon.icon)} `,
    '',
    `${parsedDirectory}${parsedFilename}`,
  ].filter(Boolean).join(' '));

  return output;

};

module.exports = { outputFile };
