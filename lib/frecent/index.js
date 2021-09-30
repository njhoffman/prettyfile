const _ = require('lodash');
const PrettyError = require('pretty-error');
const { sourceQuery } = require('./sources');
const { processFileset } = require('./fileStats');
const { combineSets, findRange } = require('./parser');

// const { ZLUA_EXEC, ZLUA_SCRIPT } = process.env
const ZLUA_EXEC = '/home/linuxbrew/.linuxbrew/Cellar/lua/5.4.3_1/bin/lua';
const ZLUA_SCRIPT = '/home/nicholas/.zinit/plugins/skywind3000---z.lua/z.lua';

const blacklist = [
  "/dev/null"
];

const sources = [
  ['zoxide', '/home/nicholas/.cargo/bin/zoxide', 'query', '--all', '-l', '-s'],
  ['fasd', '/usr/local/bin/fasd', '-s'],
  ['zlua', `${ZLUA_EXEC}`, `${ZLUA_SCRIPT}`, '-l']
];


/* eslint-disable no-console */
const pe = new PrettyError();
process.on('unhandledRejection', err => {
  console.log(`Unhandled Rejection ${err.name}: ${err.message}\n`, pe.render(err));
  process.exit(1);
});

process.on('uncaughtException', err => {
  console.log(`Unhandled Exception ${err.name}: ${err.message}\n`, pe.render(err));
  process.exit(1);
});


const outputLists = (combined, stats, options) => {
  const output = [];
  const fileLists = [].concat(
    options.directories ? combined.directories : []
  ).concat(options.files ? combined.files : []);
  fileLists.forEach(fileList => {
    _.keys(fileList).forEach(filePath => {
      output.push(filePath);
    });
  })
  console.log(output.join('\n'));
}

const outputStats = (stats) => {
  console.log(stats);
}

(async () => {
  const sourceQueries = sources.map(sourceQuery)
  const pathSets = await Promise.all(sourceQueries);
  const ranges = pathSets.map(findRange);
  const processed = await Promise.all(pathSets.map((pathSet, i) => {
    return processFileset(pathSet, ranges[i], blacklist);
  }));
  const [combined, stats] = combineSets(processed);
  _.merge(stats, {
    valid: _.keys(combined.valid).length,
    directories: _.keys(combined.directories).length,
    files: _.keys(combined.files).length
  });
  const options = { directories: false, files: true, color: false, score: false, sizes: false, stats: false };
  if (options.stats) {
    outputStats(stats);
  }
  outputLists(combined, stats, options);
  // remove errors from sources
})()
