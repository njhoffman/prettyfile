#!/usr/bin/env node
process.env.FORCE_COLOR = 3;

const _ = require('lodash');
const { numCommas, padRight } = require('./utils');
const EventEmitter = require('events');
const rc = require('rc');
const minimist = require('minimist');
const appName = require('../package.json').name;
const { processLine } = require('./parser');
const defaultConfig = require('./defaultConfig');
const logger = require('./logger');

const argv = minimist(process.argv.slice(2));
const config = rc(appName, _.defaultsDeep(argv, defaultConfig));

// TODO: identify shell or tty, launch default cmd of pwd

if (process.argv.length > 2) {
  const args = minimist(process.argv.slice(2));
  if (args.s || argv.score) {
    config.showScore = true;
  }
  if (argv.raw) {
    config.output = 'stdout';
  }
}

process.stdout.on('finish', () => {
  // process.stdin.pause();
  // process.stdout.write('\033c');
  // const stats = require('./devicons').stats;
  // console.log('STATS!', stats);
  logger.info('finished writing');
  process.exit(0);
});

process.on('exit', () => {
  const stats = require('./devicons').stats;
  // stats.time = (new Date().getTime() - stats.time) / 1000;
  // stats.avg = `${stats.total / (stats.time * 60 * 1000)} files / min`
  // stats.time = `${Math.round(stats.time)} s`;
  // const parsedStats = _.map(stats, (val, stat) => `${padRight(stat, 10)}${numCommas(val)}` )
  // console.log(parsedStats)
  logger.info('EXIT process');
  process.exit(0);
});

const stdinLineByLine = () => {
  const stdinEvents = new EventEmitter();
  let buff = '';
  let i = 0;
  let total = 0;
  process.stdin.resume();
  process.stdin.setEncoding('utf-8');
  process.stdin
    .on('data', data => {
      i++;
      buff += data;
      const lines = buff.split(/[\r\n|\n]/);
      total += lines.length;
      buff = lines.pop().trim();
      logger.info(`Emitting ${i} - ${lines.length} (${total}) lines`);
      lines.filter(Boolean).forEach(line => stdinEvents.emit('line', line));
    })
    .on('end', () => {
      logger.info(`ENDING:  ${buff.length}`);
      if (buff.length > 0) stdinEvents.emit('line', buff);
      // process.stdout.write('\x1Bc');
    });
  return stdinEvents;
};

const stdin = stdinLineByLine();
let i = 0;
stdin.on('line', line => {
  process.nextTick(() => {
    i++;
    logger.info(`${i} process line: ${line}`);
    processLine(config, line);
  });
});
