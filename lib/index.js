#!/usr/bin/env node
process.env.FORCE_COLOR = 3;
const _ = require('lodash');
const { numCommas, padRight } = require('./utils')
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
  const argv = minimist(process.argv.slice(2));
  if (argv.s || argv.score) {
    config.showScore = true;
  }
  if (argv.raw) {
    config.output = "stdout"
  }
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

process.stdout.on('close', () => {
  process.stdin.pause();
  // process.stdout.write('\033c');

  const stats = require('./devicons').stats
  console.log("STATS!", stats)
  process.exit(0);
})

process.on('exit', () => {

  // const stats = require('./devicons').stats;
  // stats.time = (new Date().getTime() - stats.time) / 1000;
  // stats.avg = `${stats.total / (stats.time * 60 * 1000)} files / min`
  // stats.time = `${Math.round(stats.time)} s`;
  // const parsedStats = _.map(stats, (val, stat) => `${padRight(stat, 10)}${numCommas(val)}` )
  // console.log(parsedStats)
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
  process.nextTick(() => {
    processLine(config, line);
  });
});
