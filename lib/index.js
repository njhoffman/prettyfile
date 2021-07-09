const EventEmitter = require('events');
const chalk = require('chalk');
const { attachDevIcon } = require('./devicons');

const outputFile = (fileParts) => {
    const { file, icon, color } = fileParts
    return `${chalk.hex(color)(icon)} ${file}`;
}

// /path/myfile.js /path/myfile2.js | fileman
// -rw-rw-r-- 1 nicholas nicholas  363 Aug 25  2020  test/setup.js | filemanH

const processLine = async (line) => {
  const deviconFiles = attachDevIcon(line);
  console.log(outputFile(deviconFiles));
};

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const stdinLineByLine = () => {
  const stdin = new EventEmitter();
  let buff = "";

  process.stdin
    .on('data', data => {
      buff += data;
      const lines = buff.split(/[\r\n|\n]/);
      buff = lines.pop();
      lines.forEach(line => stdin.emit('line', line));
    })
    .on('end', () => {
      if (buff.length > 0) stdin.emit('line', buff);
    });

  return stdin;
}

const stdin = stdinLineByLine();
stdin.on('line', processLine);
