#!/usr/bin/env node
process.env.FORCE_COLOR = 3;
const _ = require('lodash');
const EventEmitter = require('events');
const rc = require('rc');
const minimist = require('minimist');
const appName = require('../package.json').name;
const { processLine } = require('./parser');
const defaultConfig = require('./defaultConfig');

const argv = minimist(process.argv.slice(2));
const config = rc(appName, _.defaultsDeep(argv, defaultConfig));

// TODO: identify shell or tty, launch default cmd of pwd

if (process.argv.length > 2) {
  console.log(process.argv);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('utf-8');

  process.stdout.on('close', () => {
    process.stdin.pause();
    process.exit(0);
  });

  process.on('exit', () => {
    process.exit(0);
  });

  const stdinLineByLine = () => {
    const stdinEvents = new EventEmitter();
    let buff = "";
    process.stdin
      .on('data', data => {
        buff += data;
        const lines = buff.split(/[\r\n|\n]/);
        buff = lines.pop().trim();
        lines.filter(Boolean).forEach(line => stdinEvents.emit('line', line));
      })
      .on('end', () => {
        if (buff.length > 0) stdinEvents.emit('line', buff);
        // process.stdout.write('\x1Bc');
      });
    return stdinEvents;
  };


  const stdin = stdinLineByLine();
  stdin.on('line', line => {
    process.nextTick(() =>
      processLine(config, line)
    );
  });

}
