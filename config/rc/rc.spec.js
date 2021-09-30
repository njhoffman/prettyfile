const n = `rc${  Math.random()}`;
const assert = require('assert');

process.env[`${n  }_envOption`] = 42;

const fs = require('fs');
const path = require('path');
const config = require("..")(n, {
  option: true
});

console.log(config);

assert.equal(config.option, true);
assert.equal(config.envOption, 42);

const customArgv = require("..")(n, {
  option: true
}, { // nopt-like argv
  option: false,
  envOption: 24,
  argv: {
    remain: [],
    cooked: ['--no-option', '--envOption', '24'],
    original: ['--no-option', '--envOption=24']
  }
});

console.log(customArgv);

assert.equal(customArgv.option, false);
assert.equal(customArgv.envOption, 24);


const jsonrc = path.resolve(`.${  n  }rc`);

fs.writeFileSync(jsonrc, [
  '{',
  '// json overrides default',
  '"option": false,',
  '/* env overrides json */',
  '"envOption": 24',
  '}'
].join('\n'));

const commentedJSON = require("..")(n, {
  option: true
});

fs.unlinkSync(jsonrc);

console.log(commentedJSON);

assert.equal(commentedJSON.option, false);
assert.equal(commentedJSON.envOption, 42);

assert.equal(commentedJSON.config, jsonrc);
assert.equal(commentedJSON.configs.length, 1);
assert.equal(commentedJSON.configs[0], jsonrc);
